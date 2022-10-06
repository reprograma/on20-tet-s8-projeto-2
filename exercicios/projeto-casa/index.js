//form.addEventListener(`click`, selecionarTarefas)
//form.addEventListener (`click`, deletarTodasTarefas)

ul.appenChild(itemDaLista)

function marcarTodasTarefas() {
    let itensdaLista = document.querySelectorAll(`li`);

    itensdaListaDeTarefa.forEach(function (li) {
        li.classList.add(`checked`)
    })
}


marcartarefa(evento){
evento.targeet.classList.toggle(`checked`);

}
// let itensdaLista = document.querySelector('li')
// itensdaLista.forEach(function banana (li) {
//     li.classList.add('checked')
// });

// form.addEventListener(`submit`, cadastrarTarefa)
