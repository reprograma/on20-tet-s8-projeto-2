let inputTarefa = document.querySelector('form input');
let form = document.querySelector('form');
let ul = document.getElementById('todo-list-container');
let botaoSelecionarTodos = document.getElementById('selecionar-todos')
let botaoDeletarTodos = document.getElementById('deletar-todos');
let spanTarefaErro = document.getElementById('tarefa-erro');
// pegar o que está escrito no input
// console.log(inputTarefa.value)

function deletarTodasTarefas() {
  let itensDaListaDeTarefas = document.querySelectorAll('li');
  itensDaListaDeTarefas.forEach(function (li) {
    ul.removeChild(li);
  });
}

botaoDeletarTodos.addEventListener('click', DeletarTodos);
// Selecionar todas

function selecionarTodasTarefas() {
  let itensDaListaDeTarefas = document.querySelectorAll('li');
  itensDaListaDeTarefas.forEach(function (li) {
    li.classList.add('checked');
  });
  marcarEDesmarcarBotao();
}

botaoSelecionarTodos.addEventListener('click', selecionarTodasTarefas)

function selecionarTarefa(evento) {
  evento.target.classList.toggle('checked');
  mselecionarEDesmarcarBotao();
}

function deletarTarefa(evento) {
  // elementoPai.removeChild(filho) = filho é o elemento a ser apagado
  ul.removeChild(evento.target.parentElement);
}

function cadastrarTarefa(evento) {
  evento.preventDefault();
  spanTarefaErro.innerText = "";

  if (inputTarefa.value.trim() === '') {
    spanTarefaErro.innerText = "Inclua uma tarefa";
  } else {
    let itemDaLista = document.createElement('li');
    itemDaLista.innerText = inputTarefa.value;
    inputTarefa.value = '';

    let botaoDeletar = document.createElement('button');
    itemDaLista.appendChild(botaoDeletar);
    botaoDeletar.addEventListener('click', deletarTarefa)

    // elementoPai.appendChild(elementoFilho) = elementoFilho é o elemento a ser adicionado
    itemDaLista.addEventListener('click', marcarTarefa)
    ul.appendChild(itemDaLista);
  }
  marcarEDesmarcarBotao();
}

// FORM -> SUBMIT (clicar no botao do form ou apertar o enter dentro input) -> cadastrarTarefa(evento)
form.addEventListener('submit', cadastrarTarefa);


function desmarcarTodasTarefas() {
  let itensDaListaDeTarefas = document.querySelectorAll('li');
  itensDaListaDeTarefas.forEach(function (li) {
    li.classList.remove('checked');
  });
  marcarEDesmarcarBotao();
}

function marcarEDesmarcarBotao() {
  let listaDeTarefas = document.querySelectorAll('li');
  let todasEstaoMarcadas = true;
  listaDeTarefas.forEach(function(li) {
    if(li.classList.contains('checked') == false) {
      todasEstaoMarcadas = false;
    }
  });

  if(todasEstaoMarcadas) {
    botaoMarcarTodos.innerText = "Desmarcar todas";
    botaoMarcarTodos.removeEventListener('click', marcarTodasTarefas);
    botaoMarcarTodos.addEventListener('click', desmarcarTodasTarefas);
  } else {
    botaoMarcarTodos.innerText = "Marcar todas";
    botaoMarcarTodos.removeEventListener('click', desmarcarTodasTarefas);
    botaoMarcarTodos.addEventListener('click', marcarTodasTarefas);
  }
}