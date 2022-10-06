let inputTarefa = document.querySelector('form input');
let form = document.querySelector('form')
let ul = document.getElementById('cadastrar-list')
let botaoMarcarTodos = document.getElementById('marcar-todos')
let botaoDeletarTodos = document.getElementById('deletar-todos')
let mensagemErro = document.getElementById('mensagem-erro')

botaoDeletarTodos.addEventListener('click', deletarTodasTarefas)

function deletarTodasTarefas() {
  let itensListaTarefas = document.querySelectorAll('li')
  itensListaTarefas.forEach(function (li) {
    ul.removeChild(li)
  })
}

function marcarTodasTarefas() {
  let itensListaTarefas = document.querySelectorAll('li')
  console.log(itensListaTarefas)
  itensListaTarefas.forEach(function (li) {
    if (li.className === 'checked') {
      botaoMarcarTodos.innerText = 'Marcar todos'
      li.classList.remove('checked')
    } else {
      li.classList.add('checked')
      botaoMarcarTodos.innerText = 'Desmarcar todas'
    }
  })
}

botaoMarcarTodos.addEventListener('click', marcarTodasTarefas)

function marcarTarefa(evento) {
  evento.target.classList.toggle('checked')
  console.log(evento)
}

function deletarTarefa(evento) {
  ul.removeChild(evento.target.parentElement)
}

function cadastarTarefa(evento) {
  evento.preventDefault()

  if (inputTarefa.value === '') {
    mensagemErro.style.display = 'flex'
  } else {
    mensagemErro.style.display = 'none'
    let li = document.createElement('li')
    li.innerText = inputTarefa.value

    let botaoDeletar = document.createElement('button')
    li.appendChild(botaoDeletar)
    botaoDeletar.addEventListener('click', deletarTarefa)

    li.addEventListener('click', marcarTarefa)
    ul.appendChild(li)

    inputTarefa.value = ''
    inputTarefa.focus()
  }
}
form.addEventListener('submit', cadastarTarefa);