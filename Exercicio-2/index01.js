var botao  = document.querySelector('#btn-calcular');


botao.addEventListener("click", function media1(numero01){
    var numero01 = parseInt(document.querySelector('#numero01').value);

    var media  = numero01 * numero01;

    console.log();
    document.querySelector('#resultado01').innerHTML = "Esse é o RESULTADO " + media;
});