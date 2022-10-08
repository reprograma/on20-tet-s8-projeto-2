let inputTafera = document.querySelector('form input');
let form = document.querySelector('form')
let ul = document.getElementById('cadastrar-list')
let botaoMarcarTodos = document.getElementById('marcar-todos')
let botaoDeDeletarTodos = document.getElementById('deletar-todos')
let mensagemErro = document.getElementById('mensagem-erro')


// deletar todos
function deletarTodasTarefas(){
    let itensDaListaDeTarefas = document.querySelectorAll('li')
    itensDaListaDeTarefas.forEach(function (li) {
        ul.removeChild(li)
    } )
}


botaoDeDeletarTodos.addEventListener('click', deletarTodasTarefas)

// marcar e desmarcar todas as tarefas
function marcarTodasTarefas(){
    let itensDaListaDeTarefas = document.querySelectorAll('li')
    console.log(itensDaListaDeTarefas)
    itensDaListaDeTarefas.forEach(function (li) {
        if (li.className === 'check') {
            botaoMarcarTodos.innerText = 'Marcar todos'
            li.classList.remove('check')            
        }else{
            li.classList.add('check')
            botaoMarcarTodos.innerText = 'Desmarcar todos'
        }
    } )
}

botaoMarcarTodos.addEventListener('click', marcarTodasTarefas)

// marcar uma tarefa
function marcarTarefa(evento) {
   evento.target.classList.toggle('check')
   console.log(evento)
}

// deletar uma tarefa
function deletarTarefa(evento) {
    ul.removeChild(evento.target.parentElement)
}


function cadastarTarefa(evento) {
    evento.preventDefault()
    
    if (inputTafera.value === '') {
        // aparecer, msg de erro
        mensagemErro.style.display = 'block'
    } else {
        mensagemErro.style.display = 'none'
        let li = document.createElement('li') 
        li.innerText = inputTafera.value 
     
        let botaoDeletar = document.createElement('button')
        li.appendChild(botaoDeletar)
        botaoDeletar.addEventListener('click', deletarTarefa)
     
        li.addEventListener('click', marcarTarefa)
        ul.appendChild(li)
        // limpar o input e focar.
        inputTafera.value = ''
        inputTafera.focus()

        
    }



}

form.addEventListener('submit',cadastarTarefa );
