let inputTarefa = document.querySelector('form input');
let form = document.querySelector('form');
let ul = document.getElementById('todo-list-container')
let botaoMarcarTodos = document.getElementById ('button-check-all');
let marcouTodos = false
let botaoLimpar = document.getElementById ('button-clean')

function marcarTodastarefas() {
    let itensDaListaDeTarefas = document.querySelectorAll('li');
    if (!marcouTodos) {
        itensDaListaDeTarefas.forEach (function (li) {
            li.classList.add('checked');
        })

        botaoMarcarTodos.innerHTML = "Desmarcar"

        marcouTodos = true

    } else {
        itensDaListaDeTarefas.forEach (function (li) {
            li.classList.remove('checked');
        })
        
        botaoMarcarTodos.innerHTML = "Marcar Todos"

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
    
    let itemDaLista = document.createElement('li');
    itemDaLista.innerText = inputTarefa.value;

    let botaoDeletar = document.createElement('button');
    itemDaLista.appendChild(botaoDeletar);
    botaoDeletar.addEventListener('click', deletarTarefa);

    itemDaLista.addEventListener('click', marcarTarefa)
    ul.appendChild(itemDaLista);
    
}
    function limparTarefas () {
        inputTarefa.value = ''
    }

botaoMarcarTodos.addEventListener('click', marcarTodastarefas);
botaoLimpar.addEventListener('click',limparTarefas);

form.addEventListener('submit', cadastrarTarefa);
