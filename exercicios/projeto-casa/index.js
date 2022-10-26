let inputTarefa = document.querySelector('form input');
let form = document.querySelector('form');
let ul = document.getElementById('todo-list-container');
let botaoMarcarTodos = document.getElementById('marcar-todos')
let botaoDeletarTodos = document.getElementById('deletar-todos');


function deletarTodasTarefas() {
    let itensDaListaDeTarefas = document.querySelectorAll('li');
    itensDaListaDeTarefas.forEach(function (li) {
        ul.removeChild(li);
    });
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

    ul.removeChild(evento.target.parentElement);
}

function cadastrarTarefa(evento) {
    evento.preventDefault();

    if (inputTarefa.value.trim() === '') {

        let erroMessage = document.createElement('p');
        ul.appendChild(erroMessage);
        erroMessage.innerText = "Por favor digite uma tarefa";

    } else {

        let itemDaLista = document.createElement('li');
        itemDaLista.innerText = inputTarefa.value;
        inputTarefa.value = '';

        let botaoDeletar = document.createElement('button');
        itemDaLista.appendChild(botaoDeletar);
        botaoDeletar.addEventListener('click', deletarTarefa)


        itemDaLista.addEventListener('click', marcarTarefa)
        ul.appendChild(itemDaLista);
    }
}