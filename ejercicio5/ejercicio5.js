/* 
JavaScript para el ejercicio 5 del portfolio de js 
*/
document.getElementById("mayMin").addEventListener("click",mayMin);


function mayMin(){
    let respuesta="";
    let cadena = document.getElementById('cadena').value;
    let cadena2= cadena;
    cadena2=cadena2.toLowerCase();
    
    var letras="abcdefghyjklmnñopqrstuvwxyz";
    var error="f";

    for(i=0; i<cadena2.length; i++){
        if (letras.indexOf(cadena2.charAt(i),0)==-1){
            error="error";
        } 
    }
    
    
    if ((cadena!="")&& (error!="error")){ 

       
   



            if (cadena==cadena.toUpperCase()) {
                respuesta="esta en mayusculas";
            } else {
            
                if (cadena==cadena.toLowerCase()) {
                    respuesta="esta en minusculas";
                } else {
                    respuesta = "esta en una mezcla de  mayusculas y minúsculas" 
                }
            }
     } else {
            respuesta="no es una cadena valida";
     }
    document.getElementById("respuesta").innerHTML="La cadena "+respuesta;
}