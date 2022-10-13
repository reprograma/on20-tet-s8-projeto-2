let escreverTarefa = document.querySelector('form input');
let semInput = document.querySelector('p');
let form = document.querySelector('form');
let botaoMarcarTodos = document.getElementById('button-select')
let botaoDelete = document.getElementById('button-clean');
let ul = document.getElementById('todo-list-container');
let p = document.getElementById('lugar-do-erro');

form.addEventListener('submit', cadastroLista);

function marcarTodasTarefas() { 
        let x = document.getElementById("button-select");
        if (x.innerHTML === "MARCAR") {
            let itensDaListaDeTarefas = document.querySelectorAll('li');
            itensDaListaDeTarefas.forEach(function (li) {
            li.classList.add('checked');})
          x.innerHTML = "DESMARCAR";
        } else {
          x.innerHTML = "MARCAR";
          let itensDaListaDeTarefas = document.querySelectorAll('li');
            itensDaListaDeTarefas.forEach(function (li) {
            li.classList.remove('checked');})
        }}

  botaoMarcarTodos.addEventListener('click', marcarTodasTarefas)
  function marcarTarefa(evento) {
    evento.target.classList.toggle('checked');
  }

  function toggleTarefa() {
    let element = document.getElementById("button-select");
    element.classList.toggle(marcarTodasTarefas);
 }

  function deletarTarefa(evento) {
    ul.removeChild(evento.target.parentElement);
    p.removeChild(evento.target.parentElement)
  }

function cadastroLista (naoAtualizar){
    naoAtualizar.preventDefault() 

    if (escreverTarefa.value.trim() === ''){
        let blankPage = document.createElement('content');
        semInput.value = 'Ué, cadê o texto? 🤔';
        blankPage.innerText = semInput.value;
        document.getElementById('lugar-do-erro').appendChild(blankPage);
    } else {
        let itemDaLista = document.createElement('li');
        itemDaLista.innerText = escreverTarefa.value;
        escreverTarefa.value = '';

        let botaoDeletar = document.createElement('button');
        itemDaLista.appendChild(botaoDeletar);
        botaoDeletar.addEventListener('click', deletarTarefa)

        itemDaLista.addEventListener('click', marcarTarefa)
        ul.appendChild(itemDaLista);

    }

function deletarTodasTarefas() {

    let itensDaListaDeTarefas = document.querySelectorAll('li');
    itensDaListaDeTarefas.forEach(function (li) {
      ul.removeChild(li);
    })
    let ListaDeTarefas = document.querySelectorAll('content');
    ListaDeTarefas.forEach(function (content) {
        p.removeChild(content);
    })


}
botaoDelete.addEventListener('click', deletarTodasTarefas);


}