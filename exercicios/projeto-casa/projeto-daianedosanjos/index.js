let inputTarefa = document.querySelector('form input');
let form = document.querySelector('form');
let ul = document.getElementById('todo-list-container');
let botaoMarcarTodos = document.getElementById('marcar-todos')
let botaoDeletarTodos = document.getElementById('deletar-todos');
let mensagem = document.createElement('p')
let itensDaListaDeTarefas = document.querySelectorAll('li');

function deletarTodasTarefas() {
  let itensDaListaDeTarefas = document.querySelectorAll('li');
  itensDaListaDeTarefas.forEach(function (li) {
  ul.removeChild(li);
  });
}
botaoDeletarTodos.addEventListener('click', deletarTodasTarefas);

function marcarDesmarcarTarefas(){
  let itensDaListaDeTarefas = document.querySelectorAll('li');
  itensDaListaDeTarefas.forEach(function (li) {
    li.classList.toggle('checked');
  })
}
botaoMarcarTodos.addEventListener('click', marcarDesmarcarTarefas)

function marcarTodasTarefas() {
  let botaoMarcarTodos = document.getElementById('marcar-todos')
  if (botaoMarcarTodos.innerHTML === "Marcar todas") {
    itensDaListaDeTarefas.forEach(function (li) {
      li.classList.add('checked');
  })
    botaoMarcarTodos.innerHTML = "Desmarcar Todas";

  } else {
    botaoMarcarTodos.innerHTML = "Marcar todas";
    let itensDaListaDeTarefas = document.querySelectorAll('li');
    itensDaListaDeTarefas.forEach(function (li) {
      li.classList.remove('checked');
    })
  }
  botaoMarcarTodos.addEventListener('click', marcarTodasTarefas)
}

//BOTÃO PARA MERCAR E DESMARCAR TAREFA, NÃO CONSEGUI FAZER COM QUE O NOME PERMANECESSE "MARCAR TAREFA" CASO TIVESSE UMA TAREFA DESMARCADA


function marcarTarefa(evento) {
  evento.target.classList.toggle('checked');
}
botaoMarcarTodos.addEventListener('click', marcarTodasTarefas)

function deletarTarefa(e) {
  ul.removeChild(e.target.parentElement);
}

function cadastrarTarefa(e) {
  e.preventDefault();

  if (inputTarefa.value.trim() === '') {
    let main = document.querySelector('main')
    mensagem.innerHTML = "Texto inválido, digite sua tarefa."
    main.insertBefore(mensagem, ul);

  } else {
    mensagem.innerHTML = ""
    let itemDaLista = document.createElement('li');
    itemDaLista.innerText = inputTarefa.value;
    inputTarefa.value = '';

    let botaoDeletar = document.createElement('button');
    itemDaLista.appendChild(botaoDeletar);
    botaoDeletar.addEventListener('click', deletarTarefa)

    itemDaLista.addEventListener('click', marcarTarefa)
    ul.appendChild(itemDaLista);
  }
}

form.addEventListener('submit', cadastrarTarefa);