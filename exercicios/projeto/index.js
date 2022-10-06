let inputTarefa = document.querySelector('form input');
let form = document.querySelector('form');
let ul = document.getElementById('todo-list-container');
let botaoMarcarTodos = document.getElementById('marcar-todos')
let botaoDeletarTodos = document.getElementById('deletar-todos');
let digiteTarefa = document.createElement('li');

// PEGAR O QUE ESTA ESCRITO NO INPUT
// console.log(inputTarefa.value)

function deletarTodasTarefas() {
  let itensDaListaDeTarefas = document.querySelectorAll('li');
  itensDaListaDeTarefas.forEach(function (li) {
    // pai.removeChild(filho)
    ul.removeChild(li);
    inputTarefa.disabled = false;
    botaoMarcarTodos.disabled = false;
  });
  botaoMarcarTodos.classList.remove('allChecked');
}

botaoDeletarTodos.addEventListener('click', deletarTodasTarefas);

function marcarTodasTarefas() {
  if (botaoMarcarTodos.classList.contains('allChecked')) {
    let itensDaListaDeTarefas = document.querySelectorAll('li');
    itensDaListaDeTarefas.forEach(function (li) {
    li.classList.remove('checked');
  } ) } else {
    let itensDaListaDeTarefas = document.querySelectorAll('li');
    itensDaListaDeTarefas.forEach(function (li) {
    li.classList.add('checked');
    } ) }
}

botaoMarcarTodos.addEventListener('click', function () {
    marcarTodasTarefas();
    selecionarItens();
    // if (botaoMarcarTodos.classList.contains('allChecked')) {
    //   let itensDaListaDeTarefas = document.querySelectorAll('li');
    //   itensDaListaDeTarefas.forEach(function (li) {
    //   li.classList.remove('checked');
    // } ) }
  } )

function selecionarItens() {
  let itensSelecionados = document.querySelectorAll('.checked');
  let itensDaListaDeTarefas = document.querySelectorAll('li');
  if  (itensDaListaDeTarefas.length != itensSelecionados.length || itensDaListaDeTarefas.length === 0) {
    botaoMarcarTodos.classList.remove('allChecked');
  } else {
    botaoMarcarTodos.classList.add('allChecked');
  }
}

function marcarTarefa(evento) {
  evento.target.classList.toggle('checked');
  selecionarItens();

}

function deletarTarefa(evento) {
  // elementoPai.removeChild(filho) ->  filho é o elemento a ser apagado
  ul.removeChild(evento.target.parentElement);
}

function cadastrarTarefa(evento) {
  evento.preventDefault();

  if (inputTarefa.value.trim() === '') {
    digiteTarefa.innerText = 'Digite uma tarefa!'
    ul.appendChild(digiteTarefa);
    
    inputTarefa.disabled = true;
    botaoMarcarTodos.disabled = true;

  } else {
    digiteTarefa.innerHTML = ''
    let itemDaLista = document.createElement('li');
    itemDaLista.innerText = inputTarefa.value;
    inputTarefa.value = '';

    let botaoDeletar = document.createElement('button');
    itemDaLista.appendChild(botaoDeletar);
    botaoDeletar.addEventListener('click', deletarTarefa)

    // elementoPai.appendChild(elementoFilho) -> elementoFilho é o elemento a ser adicionado
    itemDaLista.addEventListener('click', marcarTarefa)
    ul.appendChild(itemDaLista);

    // let botaoDesmarcarTodos = document.getElementById('marcar-todos');
    botaoMarcarTodos.classList.remove('allChecked');
  } }

// FORM -> SUBMIT (clicar no botao do form ou apertar o enter dentro input) -> cadastrarTarefa(evento)
form.addEventListener('submit', cadastrarTarefa);

