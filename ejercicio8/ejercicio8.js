/* 
JavaScript para el ejercicio 8 del portfolio de js 
*/
document.getElementById("mcd").addEventListener("click",mcd);

function mcd(){

    
    let resultado="";
    let dividendo = Number(document.getElementById('dividendo').value);
    let divisor = Number(document.getElementById('divisor').value);
    let resto=0;
    let auxiliar=0;


    if (((dividendo > 0) && (dividendo%1==0)) && ((divisor > 0) && (divisor%1==0)) ) {


                if (divisor>dividendo) {

                    auxiliar=dividendo;
                    dividendo=divisor;
                    divisor=auxiliar;

                }

                

                do {  
                    
                    resto=dividendo%divisor;
                    if (resto!=0) {

                        dividendo=divisor;
                        divisor=resto;
                    }
                    
                
                } while (resto!==0) ;
                resultado="El máximo común divisor es : "+divisor+"<br>";
     } else {
        resultado="los números no son correctos, ambos tienen que ser enteros y positivos";
     }

    document.getElementById('resultadoDivision').innerHTML=resultado;
}
