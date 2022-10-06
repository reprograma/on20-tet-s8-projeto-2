
let input = document.querySelector('input');
let form = document.querySelector('form');
let btnForm = document.querySelector('form button');
let ulLista = document.querySelector('ul');

function adicionarTarefa(e) {
    e.preventDefault();
    let itemDaLista = document.createElement('li');
    itemDaLista.innerHTML = input.value;
    ulLista.appendChild(itemDaLista)    
}
form.addEventListener('submit', adicionarTarefa);



