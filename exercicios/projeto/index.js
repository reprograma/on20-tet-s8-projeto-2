let inputTarefa = document.querySelector('form input');
let form = document.querySelector('form');
let ul = document.getElementById('todo-list-container');
let botaoMarcarDesmarcarTodos = document.getElementById('marcar-todos')
let botaoDeletarTodos = document.getElementById('deletar-todos');
// PEGAR O QUE ESTA ESCRITO NO INPUT
// console.log(inputTarefa.value)

function verificarTarefas() {
  let itensDaListaDeTarefas = document.querySelectorAll('li');
  let itensMarcados = document.querySelectorAll('.checked');

  if (itensMarcados && itensDaListaDeTarefas) {
    if (itensMarcados.length === itensDaListaDeTarefas.length) {
      botaoMarcarDesmarcarTodos.innerText = 'Desmarcar todas';
    } else {
      botaoMarcarDesmarcarTodos.innerText = 'Marcar todas';
    }
  }
}

function deletarTodasTarefas() {
  let itensDaListaDeTarefas = document.querySelectorAll('li');
  itensDaListaDeTarefas.forEach(function (li) {
    // pai.removeChild(filho)
    ul.removeChild(li);
  });
  // main.removeChild(mensagem)
  // mensagem.innerText = ''
}

botaoDeletarTodos.addEventListener('click', deletarTodasTarefas);

function marcarDesmarcarTodasTarefas() {
  let itensDaListaDeTarefas = document.querySelectorAll('li');
  if (botaoMarcarDesmarcarTodos.innerText === 'Marcar todas') {
    itensDaListaDeTarefas.forEach(function (li) {
      li.classList.add('checked');
    })
    botaoMarcarDesmarcarTodos.innerText = 'Desmarcar todas';
  } else {
    itensDaListaDeTarefas.forEach(function (li) {
      li.classList.remove('checked');
    })
    botaoMarcarDesmarcarTodos.innerText = 'Marcar todas';
  }
}

botaoMarcarDesmarcarTodos.addEventListener('click', marcarDesmarcarTodasTarefas)

function marcarTarefa(evento) {
  evento.target.classList.toggle('checked');
  verificarTarefas();
}

function deletarTarefa(evento) {
  // elementoPai.removeChild(filho) ->  filho é o elemento a ser apagado
  ul.removeChild(evento.target.parentElement);
  verificarTarefas();
}

function cadastrarTarefa(evento) {
  evento.preventDefault();

  if (inputTarefa.value.trim() === '') {
    let mensagemErro = document.createElement('p');
    mensagemErro.classList.add("erro");
    mensagemErro.innerHTML = "Por favor, digite uma tarefa";
    form.appendChild(mensagemErro);
  } else {
    // caso exista uma mensagem de erro remove ela do HTML
    let mensagemErro = document.querySelector(".erro");
    if (mensagemErro) {
      form.removeChild(mensagemErro);
    }

    let itemDaLista = document.createElement('li');
    itemDaLista.innerText = inputTarefa.value;
    inputTarefa.value = '';

    let botaoDeletar = document.createElement('button');
    itemDaLista.appendChild(botaoDeletar);
    botaoDeletar.addEventListener('click', deletarTarefa)

    // elementoPai.appendChild(elementoFilho) -> elementoFilho é o elemento a ser adicionado
    itemDaLista.addEventListener('click', marcarTarefa)
    ul.appendChild(itemDaLista);
  }
}

// FORM -> SUBMIT (clicar no botao do form ou apertar o enter dentro input) -> cadastrarTarefa(evento)
form.addEventListener('submit', cadastrarTarefa);
