let inputTarefa = document.querySelector('form input');
let form = document.querySelector('form');
let ul = document.getElementById('todo-list-container')
let botaoMarcarTodos = document.getElementById ('button-check-all');
let marcouTodos = false

function marcarTodastarefas() {
    let itensDaListaDeTarefas = document.querySelectorAll('li');
    if (!marcouTodos) {
        itensDaListaDeTarefas.forEach (function (li) {
            li.classList.add('checked');
        })
        marcouTodos = true
    } else {
        itensDaListaDeTarefas.forEach (function (li) {
            li.classList.remove('checked');
        })
        marcouTodos = false
    }
}

function marcarTarefa(evento) {
    evento.target.classList.add('checked');
}

function deletarTarefa (evento) {
    ul.removeChild(evento.target.parentElement);
}

function cadastrarTarefa(evento) {
    evento.preventDefault();

    if (inputTarefa.value == ('')) {
        alert ('Tarefa vazia, Digite');
        return
    }
    
    let itemDaLista = document.createElement('li');
    itemDaLista.innerText = inputTarefa.value;

    let botaoDeletar = document.createElement('button');
    itemDaLista.appendChild(botaoDeletar);
    botaoDeletar.addEventListener('click', deletarTarefa);

    itemDaLista.addEventListener('click', marcarTarefa)
    ul.appendChild(itemDaLista);
    
}

botaoMarcarTodos.addEventListener('click', marcarTodastarefas);

form.addEventListener('submit', cadastrarTarefa);
