let inputTarefa = document.querySelector('form input');
let form = document.querySelector('form');
let ul = document.getElementById('todo-list-container');
let botaoMarcarTodos = document.getElementById('marcar-todos')
let botaoDeletarTodos = document.getElementById('deletar-todos');
let mensagemErro = document.querySelector('.mensagem-erro');
// PEGAR O QUE ESTA ESCRITO NO INPUT
// console.log(inputTarefa.value)

function deletarTodasTarefas() {
  mensagemErro.classList.remove('visivel');
  let itensDaListaDeTarefas = document.querySelectorAll('li');
  itensDaListaDeTarefas.forEach(function (li) {
    // pai.removeChild(filho)
    ul.removeChild(li);
  });
  trocarBotaoMarcarTarefas(false);
}

botaoDeletarTodos.addEventListener('click', deletarTodasTarefas);

function toggleTodasTarefas() {
  mensagemErro.classList.remove('visivel');
  let itensDaListaDeTarefas = document.querySelectorAll('li');
  const todosItensMarcados = Array.from(itensDaListaDeTarefas).every(item => item.classList.contains('checked'));
  if (todosItensMarcados) {
    itensDaListaDeTarefas.forEach(function (li) {
      li.classList.remove('checked');
    })
  } else {
    itensDaListaDeTarefas.forEach(function (li) {
      li.classList.add('checked');
    })
  }
  trocarBotaoMarcarTarefas(!todosItensMarcados && itensDaListaDeTarefas.length > 0);
}

botaoMarcarTodos.addEventListener('click', toggleTodasTarefas);

function trocarBotaoMarcarTarefas(todosItensMarcados) {
  if (todosItensMarcados) {
    botaoMarcarTodos.innerText = 'Desmarcar todas';
  } else {
    botaoMarcarTodos.innerText = 'Marcar todas';
  }
}

function verificarETrocarBotaoMarcarTarefas() {
  let itensDaListaDeTarefas = document.querySelectorAll('li');
  const todosItensMarcados = Array.from(itensDaListaDeTarefas).every(item => item.classList.contains('checked'));
  trocarBotaoMarcarTarefas(todosItensMarcados && itensDaListaDeTarefas.length > 0);
}

function marcarTarefa(evento) {
  mensagemErro.classList.remove('visivel');
  evento.target.classList.toggle('checked');
  verificarETrocarBotaoMarcarTarefas();
}

function deletarTarefa(evento) {
  mensagemErro.classList.remove('visivel');
  // elementoPai.removeChild(filho) ->  filho é o elemento a ser apagado
  ul.removeChild(evento.target.parentElement);
  verificarETrocarBotaoMarcarTarefas();
}

function cadastrarTarefa(evento) {
  evento.preventDefault();

  if (inputTarefa.value.trim() === '') {
    mensagemErro.innerText = 'Digite uma tarefa';
    mensagemErro.classList.add('visivel');
  } else {
    mensagemErro.classList.remove('visivel');
    let itemDaLista = document.createElement('li');
    itemDaLista.innerText = inputTarefa.value;
    inputTarefa.value = '';

    let botaoDeletar = document.createElement('button');
    itemDaLista.appendChild(botaoDeletar);
    botaoDeletar.addEventListener('click', deletarTarefa)

    // elementoPai.appendChild(elementoFilho) -> elementoFilho é o elemento a ser adicionado
    itemDaLista.addEventListener('click', marcarTarefa)
    ul.appendChild(itemDaLista);
    trocarBotaoMarcarTarefas(false);
  }
}

// FORM -> SUBMIT (clicar no botao do form ou apertar o enter dentro input) -> cadastrarTarefa(evento)
form.addEventListener('submit', cadastrarTarefa);
