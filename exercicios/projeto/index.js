let inputTafera = document.querySelector('form input');
let form = document.querySelector('form')
let ul = document.getElementById('cadastrar-list')

function cadastarTarefa(evento){
    evento.preventDefault()
   let li = document.createElement('li') 
   li.innerText = inputTafera.value 
   ul.appendChild(li)
}

form.addEventListener('submit', cadastarTarefa);