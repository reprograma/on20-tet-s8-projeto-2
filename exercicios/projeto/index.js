let inputTarefa = document.querySelector('form input');
let form = document.querySelector('form');
let ul = document.getElementById('todo-list-container');
let botaoMarcarEDesmarcarTodos = document.getElementById('marcar-e-desmarcar-todos')
let botaoDeletarTodos = document.getElementById('deletar-todos');
let paragrafoAlert = document.createElement('p');
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



function marcarEDesmarcarTodasTarefas() {
  let itensDaListaDeTarefas = document.querySelectorAll('li')

  //criar a variavel para armadezenar os itens da lista que estão marcados
  let itensDaListaDeTarefasSelecionados =
    document.querySelectorAll('li.checked')

  itensDaListaDeTarefas.forEach(function (li) {
    if (itensDaListaDeTarefasSelecionados.length > 1) {
      li.classList.remove('checked')
      botaoMarcarEDesmarcarTodos.innerHTML = "Marcar Todos"
    }
    
    else {
      li.classList.add('checked')
      botaoMarcarEDesmarcarTodos.innerHTML = "Desmarcar Todos"
    }
  })
}


botaoMarcarEDesmarcarTodos.addEventListener('click', marcarEDesmarcarTodasTarefas)


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
    // let ul = document.getElementById('todo-list-container') referencia;
    let main = document.querySelector('main') // Essa variavel esta armazenando o elemento pai.
    
    paragrafoAlert.innerHTML = "Adicione uma Tarefa!"
    main.insertBefore(paragrafoAlert, ul)  //Elemento inserido antes do elemento ul

  } else {
    paragrafoAlert.innerHTML = ""

    let itemDaLista = document.createElement('li');
    itemDaLista.innerText = inputTarefa.value;
    inputTarefa.value = '';

    let botaoDeletar = document.createElement('button');
    itemDaLista.appendChild(botaoDeletar);
    botaoDeletar.addEventListener('click', deletarTarefa)

    // elementoPai.appendChild(elementoFilho) -> elementoFilho é o elemento a ser adicionado
    itemDaLista.addEventListener('click', marcarTarefa)
    ul.appendChild(itemDaLista);
  }
}

// FORM -> SUBMIT (clicar no botao do form ou apertar o enter dentro input) -> cadastrarTarefa(evento)
form.addEventListener('submit', cadastrarTarefa);
