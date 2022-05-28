/*

*/

document.getElementById("letraDni").addEventListener("click",letraDni);


function letraDni(){

    const LETRAS = "TRWAGMYFPDXBNJZSQVHLCKE";
    
    let dni = Number(document.getElementById('dni').value);
    var expresion_regular_dni = /^[XYZ]?\d{5,8}$/;
    if(expresion_regular_dni.test(dni) === true){
        let resto = dni % 23;
    
        let letra = LETRAS.substring(resto,resto+1);
    
        document.getElementById('letra').innerHTML = "La letra es: "+letra;
    } else {
        document.getElementById('letra').innerHTML = "El dni no es correcto ";
    }
 }




