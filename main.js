const novoItem = document.querySelector('#input-novo-item');
const botaoAdicionar = document.querySelector('#botao-submit');

botaoAdicionar.addEventListener('click', function(e) {
    e.preventDefault();

    const novoItemTexto = novoItem.value
    //console.log(novoItemTexto);

    if(novoItemTexto.trim() !== "") {
        const novaLinha = document.createElement('li');
        const  listaDeTarefas = document.querySelector('#lista-de-tarefas');

        novaLinha.textContent = novoItemTexto;
        listaDeTarefas.appendChild(novaLinha);

        novoItem.value = "";
    }
})