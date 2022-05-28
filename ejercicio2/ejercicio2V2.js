/* javascript para el ejercicio 2 de portfolio de lenguajes de marcas */


//indicamos al principio del javascript que eventos dispara que función
// Esta es un tipo de  solucion usa el arbol dom
//document.getElementById("calcular").onclick()=***** aqui iria la function**** 
// pero solo se hace cuando la funcion es muy escueta

//Segunda forma de hacerlo y la mas extendida , es usar addEventListener

document.getElementById("calcular").addEventListener("click",calcular);



function calcular(){

    // obtener dato (radio)

    let radio = Number(document.getElementById('radio').value);

    // realizar cálculos
    // usando la clase Math

    if ((radio > 0) && (radio%1==0) ) {
    
    let circunferencia = 2 * radio * Math.PI;
    let circulo = radio ** 2 *Math.PI;
    let esfera = radio ** 3 * Math.PI;

    // mostrar resultados

    // te atreves a refactorizar la salida de resultados?????

    // primer nodo li creado y enganchado al arbol orginal 
    // 1 paso crear el nodo li
    let nuevoNodo=document.createElement("li");
    //2 paso meter contendido en el arbol;
    nuevoNodo.innerHTML="La longitud de la circunferencia es : "+circunferencia.toFixed(2);
    //3 paso. colgar el nodo en el arbol
    document.getElementById("resultado").appendChild(nuevoNodo);

    let nuevoNodo2=document.createElement("li");
    //2 paso meter contendido en el arbol;
    nuevoNodo2.innerHTML="El area del círculo es : "+circulo.toFixed(2);
    //3 paso. colgar el nodo en el arbol
    document.getElementById("resultado").appendChild(nuevoNodo2);

    let nuevoNodo3=document.createElement("li");
    //2 paso meter contendido en el arbol;
    nuevoNodo3.innerHTML="El volumen de la esfera es : "+esfera.toFixed(2);
    //3 paso. colgar el nodo en el arbol
    document.getElementById("resultado").appendChild(nuevoNodo3);

    } else {

    let nuevoNodo=document.createElement("li");
    
    nuevoNodo.innerHTML="El número no es positivo o no es entero <br>";
    
    document.getElementById("resultado").appendChild(nuevoNodo);
    }
}
