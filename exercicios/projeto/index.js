
// variações e marcações específicas da ação 
let inputTarefa = document.querySelector('form input');
let form = document.querySelector('form');
let ul = document.getElementById('tarefas-container');
let botaoMarcarTodos = document.getElementById("marcar-todos");
let botaoDeletarTodos = document.getElementById('deletar-todos'); 
// console.log(inputTarefa.value)
// pegar o que está escrito no input 
// evento de submmit dentro do formulario 

// deletar todas as tarefas 

function deletarTodos () {
    let itensDaListaDeTarefa = document.querySelectorAll ('li');
    itensDaListaDeTarefa.forEach(function (li){
        ul.removeChild(li)
    })
}

botaoDeletarTodos.addEventListener('click', deletarTodos)
// todas as tarefas marcadas

function marcarTodasTarefas(){
    let itensDaListaDeTarefa = document.querySelectorAll('li');
    // SELECIONA TODOS OS ITENS DA LISTA 
    itensDaListaDeTarefa.forEach(function (li){
        li.classList.toggle('checked');   
    })
    // ação de callback
}
// houve uma troca de ação do ADD para o TOGGLE como formar de desmarcar todos os que estão marcados como feito 

botaoMarcarTodos.addEventListener('click', marcarTodasTarefas)

function marcarTarefa(evento){
    // evento.target.classList.toggle
evento.target.classList.toggle ('checked');
}

// deletar todas as tarefas 

function deletarTarefa(evento){
    // elementoPai.removeChild(filho) = filho é o elemento a ser apagado
 // console.log(evento.target.parentElement);
//  identificar quem é o filho e o pai, ou seja, os elementos 
    ul.removeChild(evento.target.parentElement)
}

// cadastrar tarefas 

function cadastrarTarefa(evento) {
  evento.preventDefault();
  let itemDaLista = document.createElement('li');
  itemDaLista.innerText = inputTarefa.value
  ul.appendChild(itemDaLista);
  itemDaLista.addEventListener ('click', marcarTarefa);
  let botaoDeletar = document.createElement('button');
  itemDaLista.appendChild(botaoDeletar);
  botaoDeletar.addEventListener('click',deletarTarefa)
}


// elementoPai.appendChild(elementoFilho)= elementoFilho é o elemento a ser adcionado 
// observa o form se recebe o evento de submit, clicar no botao do form ou apertar o enter dentro do input, se acontece, cadastrarTarefa(evento)
form.addEventListener('submit', cadastrarTarefa);
 



