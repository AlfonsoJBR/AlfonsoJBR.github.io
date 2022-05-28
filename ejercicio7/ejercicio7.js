/* 
Aquí van las funciones del ejercicio 7
*/
document.getElementById("dividir").addEventListener("click",dividir);


function dividir() {

    let divi = Number(document.getElementById('dividendo').value);
    let divisor=Number(document.getElementById('divisor').value);
    resultado="";


    if (((divi > 0) && (divi%1==0)) && ((divisor > 0) && (divisor%1==0)) ) {


            let cociente=0;

            while (divi>=divisor){
                divi -=divisor;
                cociente++;
            }
            resultado= "El cociente es : "+cociente+" , el resto es : "+divi;
    } else {
        resultado="los números no son correctos, ambos tienen que ser enteros y positivos";

    }
    document.getElementById('resultadoDivision').innerHTML=resultado;


}