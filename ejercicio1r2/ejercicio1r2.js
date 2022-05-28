/* 
JavaScript para el ejercicio 1 de la relación 2 del portfolio de js 
*/
document.getElementById("palindromo").addEventListener("click",palindromo);



function cambioColor(nodo,nuevoColor){ 

    var colortexto="#fadc9b";
    var colorfondo="#84b6f4";


    if (nuevoColor=="black") {
        colortexto="white";
        colorfondo="black";
    }


    document.getElementById(nodo).style.color=colortexto;
    document.getElementById(nodo).style.backgroundColor=colorfondo;
    document.getElementById("centro").style.background=colorfondo;

} 



function palindromo() {

    var respuesta=" es un palíndromo";
    let cadena = document.getElementById('cadena').value;
    var len = cadena.length;
    var mid = Math.floor(len/2);
    var inverso="";
    

    for ( var i = 0; i < mid; i++ ) {
        
        if (cadena[i] !== cadena[len - 1 - i]) {
            respuesta="¡no es un palíndromo! <br> Vamos a arreglarlo.<br>";
            for ( var i = len-1; i >0 ; i-- ) {
                inverso+=cadena[i];
            } 
            respuesta+="Concatenamos la cadena, ella misma,  a la inversa  y <br>";  
            respuesta+="aqui tenemos un palíndromo en condiciones: <br>"+cadena+inverso;   
        }    
    }

   
    document.getElementById("respuesta").innerHTML="La cadena "+respuesta;
}