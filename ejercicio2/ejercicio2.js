/* javascript para el ejercicio 2 de portfolio de lenguajes de marcas */

function calcular(){

    // obtener dato (radio)

    let radio = Number(document.getElementById('radio').value);

    // realizar cálculos
    // usando la clase Math
    
    let circunferencia = 2 * radio * Math.PI;
    let circulo = radio ** 2 *Math.PI;
    let esfera = radio ** 3 * Math.PI;

    // mostrar resultados

    // te atreves a refactorizar la salida de resultados?????

    document.getElementById("circunferencia").innerHTML="La longitud de la circunferencia es : "+circunferencia.toFixed(2);

    document.getElementById("circulo").innerHTML="El área del círculo es : "+circulo.toFixed(2);

    document.getElementById("esfera").innerHTML="El volumen de la esfera es : "+esfera.toFixed(2);
}