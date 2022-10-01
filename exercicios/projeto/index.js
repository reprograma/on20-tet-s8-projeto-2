let inputTarefa = document.querySelector('form input');
let form = document.querySelector('form');
let ul = document.getElementById('todo-list-container');
// PEGAR O QUE ESTA ESCRITO NO INPUT
// console.log(inputTarefa.value)

function cadastrarTarefa(evento) {
  evento.preventDefault();
  
  let itemDaLista = document.createElement('li');
  itemDaLista.innerText = inputTarefa.value;
  // elementoPai.appendChild(elementoFilho) -> elementoFilho é o elemento a ser adicionado
  ul.appendChild(itemDaLista);
}

// FORM -> SUBMIT (clicar no botao do form ou apertar o enter dentro input) -> cadastrarTarefa(evento)
form.addEventListener('submit', cadastrarTarefa);