let inputTarefa = document.querySelector('form input');
let form = document.querySelector('form');
let ul = document.getElementById('tarefas-container')
// console.log(inputTarefa.value)
// pegar o que está escrito no input 
// evento de submmit dentro do formulario 

function cadastrarTarefa(evento) {
  evento.preventDefault();
  let itemDaLista = document.createElement('li');
  itemDaLista.innerText = inputTarefa.value
  ul.appendChild(itemDaLista);
}
// elementoPai.appendChild(elementoFilho)= elementoFilho é o elemento a ser adcionado 
// observa o form se recebe o evento de submit, clicar no botao do form ou apertar o enter dentro do input, se acontece, cadastrarTarefa(evento)
form.addEventListener('submit', cadastrarTarefa);