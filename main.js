document.addEventListener('DOMContentLoaded', function () {

    const novoItem = document.querySelector('#input-novo-item');
    const botaoAdicionar = document.querySelector('#botao-submit');
    const  listaDeTarefas = document.querySelector('#lista-de-tarefas');

    //document.querySelector('#botao-submit').addEventListener('click', function(e) {...}) pode ser escrito:
    botaoAdicionar.addEventListener('click', function(e) {
        e.preventDefault();

        const novoItemTexto = novoItem.value;
        //console.log(novoItemTexto);

        if(novoItemTexto.trim() !== "") {
            //Cria novo elemento <li>
            const novaLinha = document.createElement('li');
            
            //Define o conteúdo do elemento <li> como o valor do input
            novaLinha.textContent = novoItemTexto;

            novaLinha.addEventListener('click', function () {
                if (this.style.textDecoration === 'line-through') {
                    this.style.textDecoration = 'none';
                } else {
                    this.style.textDecoration = 'line-through';
                }
            });

            //Adiciona o novo elemento a lista já existente
            listaDeTarefas.appendChild(novaLinha);

            //Limpa o valor do input
            novoItem.value = "";
        }
    })
})

/* IMPLEMENTAÇÃO DO CÓDIGO USANDO JQUERY

$(document).ready(function() {                                  //Igual a: document.addEventListener('DOMContentLoaded', function () {

    $('#botao-submit').click(function(e) {                      //Igual a: document.querySelector('#botao-submit').addEventListener('click', function(e) {...})
        e.preventDefault();

        const novoItemTexto = $('#input-novo-item').val();      //Igual a: const novoItemTexto = document.querySelector('#input-novo-item').value;
        //console.log(novoItemTexto);

        if(novoItemTexto.trim() !== "") {
            const novaLinha = $('<li>').text(novoItemTexto);    //Igual a: const novaLinha = document.createElement('li');  novaLinha.textContent = novoItemTexto;

            novaLinha.click(function() {
                if (this.style.textDecoration === 'line-through') {
                    this.style.textDecoration = 'none';
                } else {
                    this.style.textDecoration = 'line-through';
                }
            })

            $('#lista-de-tarefas').append(novaLinha);           //Igual a: listaDeTarefas.appendChild(novaLinha);

            $('#input-novo-item').val("")                       //Igual a: novoItem.value = "";
        }
    })
})
*/