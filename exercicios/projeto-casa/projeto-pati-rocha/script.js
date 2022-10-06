
let input = document.querySelector('input');
let form = document.querySelector('form');
let btnForm = document.querySelector('form button');
let ulLista = document.querySelector('ul');


function marcarTarefa(e) {
    //e.target é o elemento que recebeu o evento
    e.target.classList.toggle('marcado');
}
function deletarTarefa(e) {
   ulLista.removeChild(e.target.parentElement);
}

function adicionarTarefa(e) {
    e.preventDefault();

    let itemDaLista = document.createElement('li');
    itemDaLista.innerHTML = input.value;
    ulLista.appendChild(itemDaLista);
    itemDaLista.addEventListener('click', marcarTarefa)
    
    let btnDeletarTarefa = document.createElement('button');
    itemDaLista.appendChild(btnDeletarTarefa);
    btnDeletarTarefa.addEventListener('click', deletarTarefa)

    
    
    


}
form.addEventListener('submit', adicionarTarefa);



