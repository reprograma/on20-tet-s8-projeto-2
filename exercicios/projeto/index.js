let inputTarefa = document.querySelector('form input');
let form = document.querySelector('form');
let ul = document.getElementById('todo-list-container');
let botaoMarcarTodos = document.getElementById('marcar-todos')
let botaoDeletarTodos = document.getElementById('deletar-todos');
// PEGAR O QUE ESTA ESCRITO NO INPUT
// console.log(inputTarefa.value)

function deletarTodasTarefas() {
  let itensDaListaDeTarefas = document.querySelectorAll('li');
  itensDaListaDeTarefas.forEach(function (li) {
    // pai.removeChild(filho)
    ul.removeChild(li);
  });
}

botaoDeletarTodos.addEventListener('click', deletarTodasTarefas);

function marcarTodasTarefas() {
  let itensDaListaDeTarefas = document.querySelectorAll('li');
  itensDaListaDeTarefas.forEach(function (li) {
    li.classList.add('checked');
  })
}

botaoMarcarTodos.addEventListener('click', marcarTodasTarefas)

function marcarTarefa(evento) {
  evento.target.classList.toggle('checked');
}

function deletarTarefa(evento) {
  // elementoPai.removeChild(filho) ->  filho é o elemento a ser apagado
  ul.removeChild(evento.target.parentElement);
}

function cadastarTarefa(evento) {
  evento.preventDefault()


 let li = document.createElement('li') 
 li.innerText = inputTafera.value 

 let = botaoDeletar = document.createElement('button')
 li.appendChild(botaoDeletar)
 botaoDeletar.addEventListener('click', deletarTarefa)

 li.addEventListener('click', marcarTarefa)
 ul.appendChild(li)
}

form.addEventListener('submit', cadastarTarefa);

// FORM -> SUBMIT (clicar no botao do form ou apertar o enter dentro input) -> cadastrarTarefa(evento)
form.addEventListener('submit', cadastrarTarefa);