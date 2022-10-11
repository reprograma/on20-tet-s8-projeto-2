
let input = document.querySelector('input');
let form = document.querySelector('form');
let btnForm = document.querySelector('form button');
let ulLista = document.querySelector('ul');
let btnMarcarDesmarcarTodas = document.getElementById('btn-marcar-todas');
let btnDeletarTodas = document.getElementById('btn-deletar-todas');
let msgErro = document.createElement('p');   

function verificarTarefas() {
    let todasTarefas = document.querySelectorAll('li');
    let tarefasMarcadas = document.querySelectorAll('.checked');

    if (todasTarefas && tarefasMarcadas) {
        if (todasTarefas.length === tarefasMarcadas.length) {
            btnMarcarDesmarcarTodas.innerText = 'Desmarcar Todas'
        } else {
            btnMarcarDesmarcarTodas.innerText = 'Marcar todas'
        }
    }    
}
function deletarTodas() {
    let todasTarefas = document.querySelectorAll('li');
    todasTarefas.forEach((itemLi) => {
        ulLista.removeChild(itemLi)        
    });
    input.value = '';
    msgErro.innerText = '';
    btnMarcarDesmarcarTodas.innerHTML = 'Marcar todas'
}
btnDeletarTodas.addEventListener('click', deletarTodas)

function marcarDesmarcarTodas() {
    let todasTarefas = document.querySelectorAll('li');

    if (btnMarcarDesmarcarTodas.innerText === 'Marcar todas') {
        todasTarefas.forEach((itemli) => {
            itemli.classList.add('checked')
        })
        btnMarcarDesmarcarTodas.innerText = 'Desmarcar todas';
    } else {
        todasTarefas.forEach((itemli) => {
            itemli.classList.remove('checked')

        })
        btnMarcarDesmarcarTodas.innerText = 'Marcar todas';
}
}
btnMarcarDesmarcarTodas.addEventListener('click',marcarDesmarcarTodas)

function marcarTarefa(e) {
    //e.target é o elemento que recebeu o evento
    e.target.classList.toggle('checked');
    verificarTarefas();
}
function deletarTarefa(e) {
    ulLista.removeChild(e.target.parentElement);   
    verificarTarefas();
}

function adicionarTarefa(e) {
    e.preventDefault();
    
    if(input.value.trim() ==='') {
        let main = document.querySelector('main');
        main.insertBefore(msgErro,ulLista)
        msgErro.innerText = '* Texto inválido!'
    } else {
        
        msgErro.innerText = '';
        
        let itemDaLista = document.createElement('li');
        itemDaLista.innerHTML = input.value;
        input.value = ''
        ulLista.appendChild(itemDaLista);
        itemDaLista.addEventListener('click', marcarTarefa)
        
        let btnDeletarTarefa = document.createElement('button');
        itemDaLista.appendChild(btnDeletarTarefa);
        btnDeletarTarefa.addEventListener('click', deletarTarefa)        
    }
}
form.addEventListener('submit', adicionarTarefa);



