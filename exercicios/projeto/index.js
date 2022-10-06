let inputTafera = document.querySelector('form input');
let form = document.querySelector('form')
let ul = document.getElementById('cadastrar-list')

function marcarTarefa(evento) {
   evento.target.classList.toggle('check')
   console.log(evento)
}

function deletarTarefa(evento) {
    ul.removeChild(evento.target.parentElement)
}


function cadastarTarefa(evento) {
    evento.preventDefault()


   let li = document.createElement('li') 
   li.innerText = inputTafera.value 

   let = botaoDeletar = document.createElement('button')
   li.appendChild(botaoDeletar)
   botaoDeletar.addEventListener('click', deletarTarefa)

   li.addEventListener('click', marcarTarefa)
   ul.appendChild(li)
}

form.addEventListener('submit', cadastarTarefa);
