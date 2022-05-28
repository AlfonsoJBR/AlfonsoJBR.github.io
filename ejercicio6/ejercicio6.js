/* 
JavaScript para el ejercicio 6 del portfolio de js 
*/

document.getElementById("palindromo").addEventListener("click",palindromo);

function palindromo() {

    var respuesta=" es un palíndromo";
    let cadena = document.getElementById('cadena').value;
    
    var len = cadena.length;
    var mid = Math.floor(len/2);
    var inverso="";
    var si="si";
    
    var letras="abcdefghyjklmnñopqrstuvwxyz";
    var error="f";
    var cadena2=cadena.toLowerCase();

    
    for(var i=0; i<cadena2.length; i++){
        if (letras.indexOf(cadena2.charAt(i),0)==-1){
            error="error";
        } 
    }
    
    
    if ((cadena!="")&& (error!="error")){ 

       

        for ( var i = 0; i < mid; i++ ) {
            
            if (cadena[i] !== cadena[len - 1 - i]) {
                
                si="no";
            }    
        }
        if (si=="no") {
            respuesta="¡no es un palíndromo! <br> Vamos a arreglarlo.<br>";

                for ( var j = len-1; j >= 0; j-- ) {
                    inverso+=cadena[j];
                } 
                respuesta+="Concatenamos la cadena, ella misma,  a la inversa  y <br>";  
                respuesta+="aqui tenemos un palíndromo en condiciones: <br>"+cadena+inverso;   
         }

        } else {
            respuesta="no es valida!";
        }

    document.getElementById("respuesta").innerHTML="La cadena "+respuesta;
}
