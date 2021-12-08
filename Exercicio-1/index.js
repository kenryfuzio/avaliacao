var botao  = document.querySelector('#btn-calcular');


botao.addEventListener("click", function imparpar(numero01, numero02, numero03){
    var numero01 = parseInt(document.querySelector('#numero01').value);
    var numero02 = parseInt(document.querySelector('#numero02').value);
    var numero03 = parseInt(document.querySelector('#numero03').value);
   
   
    if(numero01 % 2 == 0) {
         var resultado =  numero01 = numero01 * 3; 


    }
    else {
      var resultado =  numero01 = numero01 + 7;
    } 


      if(numero02 % 2 == 0) {
        var resultado =  numero02 = numero02 * 3; 


   }
   else {
     var resultado =  numero02 = numero02 + 7;
   } 
   if(numero03 % 2 == 0) {
    var resultado =  numero03 = numero03 * 3; 


}
else {
 var resultado =  numero03 = numero03 + 7;
} 

    
   console.log();
   document.querySelector('#resultado01').innerHTML = " Primeiro Número " + numero01;
   document.querySelector('#resultado02').innerHTML = " Segundo Número " + numero02;
   document.querySelector('#resultado03').innerHTML = " Terceiro Número " + numero03;
});