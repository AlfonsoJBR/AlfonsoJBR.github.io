/*


*/
document.getElementById("comparar").addEventListener("click",comparar);


function comparar(){

// entrada de datos

let lado1 =Number(document.getElementById('lado1').value);
let lado2 =Number(document.getElementById('lado2').value);
let lado3 =Number(document.getElementById('lado3').value);

let respuesta="Algun numero que has puesto no es entero o es menor que 1";

if (((lado1 > 0) && (lado1%1==0) )  &&  ((lado2 > 0) && (lado2%1==0) && ((lado3 > 0) && (lado3%1==0))) )  {



    if ( lado1==lado2 && lado2==lado3 ) {
       respuesta = "es equilátero";
    } else {
          if (lado1==lado2 || lado2==lado3 || lado3==lado1) {
              respuesta = "es isósceles";
          } else {
              respuesta = "es escaleno";
          }
    }
}
// mostrar el resultado

document.getElementById('resultadoTipo').innerHTML="El triángulo "+respuesta;

}