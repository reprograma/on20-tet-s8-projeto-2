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
//Resolução da parte do exercicio de colocar função para desmarcar todas
function marcarTodasTarefas() {
    let itensDaListaDeTarefas = document.querySelectorAll('li');
    
// 3 Passo: Ao clicar no botão, checa se ta com o texto Marcar todas. 
//Se tiver, adiciona a classe checked pra todas e muda o nome para Desmarcar todas
    if (botaoMarcarTodos.innerText === "Marcar todas") {
        itensDaListaDeTarefas.forEach(function (li) {
        li.classList.add('checked');
})
  
// Muda nome do botão para desmarcar todas
    botaoMarcarTodos.innerText = "Desmarcar todas"
  
// 4 Passo: Ao clicar no botão, Checa se o botao ta Desmarcar todas. Se tiver, tira a classe checked pra todas e muda o nome para Marcar todas
    } else {
    itensDaListaDeTarefas.forEach(function (li) {
        li.classList.remove('checked');
    })
  
    botaoMarcarTodos.innerText = "Marcar todas"
}
}

botaoMarcarTodos.addEventListener('click', marcarTodasTarefas)

function marcarTarefa(evento) {
  evento.target.classList.toggle('checked');
}

function deletarTarefa(evento) {
  // elementoPai.removeChild(filho) ->  filho é o elemento a ser apagado
  ul.removeChild(evento.target.parentElement);
}
//Resolução da mensagem de erro, caso a tarefa seja vazia
function cadastrarTarefa(evento) {
  evento.preventDefault();
// Se o valor digitado for vazio, pega elemendo pelo id e coloca display block para aparecer o texto //
  if (inputTarefa.value.trim() === '') {
    document.getElementById("mensagem-error").style.display = "block";
// Se o valor digitado não for vazio, coloca o display none para sumir o texto    
  } else {
    document.getElementById("mensagem-error").style.display = "none";

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
form.addEventListener('submit', cadastrarTarefa)