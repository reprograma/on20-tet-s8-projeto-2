let inputTarefa = document.querySelector('form input');
let form = document.querySelector('form');
let ul = document.getElementById('todo-list-container');
// PEGAR O QUE ESTA ESCRITO NO INPUT
// console.log(inputTarefa.value)

function marcarTarefa(evento) {
  evento.target.classList.toggle('checked');
}

function deletarTarefa(evento) {
  // elementoPai.removeChild(filho) ->  filho é o elemento a ser apagado
  ul.removeChild(evento.target.parentElement);
}

function cadastrarTarefa(evento) {
  evento.preventDefault();

  let itemDaLista = document.createElement('li');
  itemDaLista.innerText = inputTarefa.value;

  let botaoDeletar = document.createElement('button');
  itemDaLista.appendChild(botaoDeletar);
  botaoDeletar.addEventListener('click', deletarTarefa)

  // elementoPai.appendChild(elementoFilho) -> elementoFilho é o elemento a ser adicionado
  itemDaLista.addEventListener('click', marcarTarefa)
  ul.appendChild(itemDaLista);
}

// FORM -> SUBMIT (clicar no botao do form ou apertar o enter dentro input) -> cadastrarTarefa(evento)
form.addEventListener('submit', cadastrarTarefa);
