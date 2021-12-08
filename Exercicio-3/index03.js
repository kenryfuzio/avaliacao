var botao = document.querySelector('#btn-calcular');
botao.addEventListener('click', function() {
    let numero01 = parseInt(document.querySelector('#numero01').value);
    let numero02 = parseInt(document.querySelector('#numero02').value);  

    [numero01, numero02] = [numero02, numero01];
    
   
    
    console.log();
    document.querySelector('#resultado01').innerHTML = "Esse é o primeiro número: " + numero01;
    document.querySelector('#resultado02').innerHTML = "Esse é o segundo número: " + numero02;


});