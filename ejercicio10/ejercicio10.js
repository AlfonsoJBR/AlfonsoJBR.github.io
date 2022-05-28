/* 
Ejercicio 9 Buscador nombre del mes del año

*/
document.getElementById("traducirNombre").addEventListener("click",traducirNombre);

function traducirNombre () {

    const meses= {"Enero":"January",
    "Febrero":"February",
    "Marzo":"March",
    "Abril":"April",
    "Mayo":"May",
    "Junio":"June",
    "Julio":"July",
    "Agosto":"August",
    "Septiembre":"September",
    "Octubre":"October",
    "Noviembre":"November",
    "Diciembre":"December"};


    let mes = document.getElementById('mes').value;
    
    let respuesta="";

    respuesta=(mes=="error")?"no has elegido un nombre correcto": meses[mes];
   

    document.getElementById('nombreMes').innerHTML= respuesta;


}