/* 
Ejercicio 9 Buscador nombre del mes del año

*/
document.getElementById("buscarNombre").addEventListener("click",buscarNombre);

function buscarNombre () {

    const meses= ["Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto","Septiembre","Octubre","Noviembre","Diciembre"];


    let mes = Number(document.getElementById('mes').value);
    let numeromes = mes -1;
    let respuesta="";

    respuesta=(numeromes==-1)?"no has elegido numero": meses[numeromes];
    /*

    if (numeromes==-1 ) {

        respuesta='no has elegido numero';
    }else{
        respuesta=meses[numeromes];
    }
    */

    document.getElementById('nombreMes').innerHTML= respuesta;


}