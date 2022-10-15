
let inputTarefa = document.querySelector('form input');
let form = document.querySelector('form');
let ul = document.getElementById('todo-list-container');
let botaoMarcarTodos = document.getElementById('marcar-todos')
let botaoDeletarTodos = document.getElementById('deletar-todos');
let mensagemErro = document.getElementById('divMensagem');

// PEGAR O QUE ESTA ESCRITO NO INPUT
// console.log(inputTarefa.value)


// document.getElementById("btnEnviar").addEventListener("click", validar, false);

// function validar() {
//   let divMensagem = document.getElementById('divMensagem');
//   let textoNome = document.getElementById('textoNome');

//   if (textoNome.value.length == 0)
//     divMensagem.innerHTML = 'Cadastre a Tarefa.';
//   else
//     divMensagem.innerHTML = '';

//     let itemDaLista = document.createElement('li');
//         itemDaLista.innerText = inputTarefa.value;

// } //Deus, esse não deu certo!

function deletarTodasTarefas() {
  let itensDaListaDeTarefas = document.querySelectorAll('li');
  itensDaListaDeTarefas.forEach(function (li) {
    // pai.removeChild(filho)
    ul.removeChild(li);
  })
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

function cadastrarTarefa(evento) {
  evento.preventDefault();

  if (inputTarefa.value.trim() === '') {
    mensagemErro.innerHTML = ' Cadastre a Tarefa.';

  }

  else {
    divMensagem.innerHTML = ' ';

    let itemDaLista = document.createElement('li');
    itemDaLista.innerText = inputTarefa.value;

    let botaoDeletar = document.createElement('button');
    itemDaLista.appendChild(botaoDeletar);
    botaoDeletar.addEventListener('click', deletarTarefa)

    //elementoPai.appendChild(elementoFilho) -> elementoFilho é o elemento a ser adicionado    
    itemDaLista.addEventListener('click', marcarTarefa)
    ul.appendChild(itemDaLista)
    inputTarefa.value = ''

  }

}

// FORM -> SUBMIT (CLICAR NO BOTÃO FORM OU APERTAR O ENTER DENTRO DO INPUT) - > SE ACONTECE - CADASTRARTAREFA
form.addEventListener('submit', cadastrarTarefa);
