let inputTarefa = document.querySelector('form input');
let form = document.querySelector('form');
let ul = document.getElementById('todo-list-container');
let botaoMarcarTodos = document.getElementById('marcar-todos')
let botaoDeletarTodos = document.getElementById('deletar-todos');

function deletarTodasTarefas() {
  let itensDaListaDeTarefas = document.querySelectorAll('li');
  itensDaListaDeTarefas.forEach(function (li) {
    ul.removeChild(li);
  });
}

botaoDeletarTodos.addEventListener('click', deletarTodasTarefas);

function marcarTodasTarefas() {
  let itensDaListaDeTarefas = document.querySelectorAll('li');
  itensDaListaDeTarefas.forEach(function (li) {
    li.classList.add('checked');
  })
  botaoMarcarTodos.innerText="Desmarcar todas"
}

function desmarcarTodasTarefas(){
  let itensDaListaDeTarefas = document.querySelectorAll('li');
  itensDaListaDeTarefas.forEach(function(li){
    li.classList.remove('checked')
  })
  botaoMarcarTodos.innerText="Marcar todas"
}

function toggleTodasTarefas(){
  let tudoMarcado = true;
  let itensDaListaDeTarefas = document.querySelectorAll('li');
  itensDaListaDeTarefas.forEach(function(li){
    if(!li.classList.contains("checked")){
      tudoMarcado = false;
    }
  })

  if(tudoMarcado){
    desmarcarTodasTarefas();
  } else{
    marcarTodasTarefas();
  }
}
 

botaoMarcarTodos.addEventListener('click', toggleTodasTarefas)

function marcarTarefa(evento) {
  evento.target.classList.toggle('checked');
}

function deletarTarefa(evento) {
  ul.removeChild(evento.target.parentElement);
}

function cadastrarTarefa(evento) {
  evento.preventDefault();

  let divAlert = document.querySelector("#divAlert");
  divAlert.textContent= "";
  
  if (inputTarefa.value.trim() === '') {
    criarAlerta("Digite uma tarefa!");
  } else {
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

function criarAlerta(texto){
  let msg = document.createElement("div");
    msg.textContent = texto;

    var divAlert = document.querySelector("#divAlert");
    divAlert.appendChild(msg);
}
