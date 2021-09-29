function actividad6Convert(tempF, symbol = false){
    let tempC = (tempF - 32) * 5/9;
    if (symbol){
        return tempC + "ºC";
    }
    else{
        return tempC;
    }
}
function actividad7test1(){
    let tempF = parseInt(window.prompt("Introduce un numero que convertir de ºF a ºC"));
    console.log("El resultado sin pasar parametro es: " + actividad6Convert(tempF));
}
function actividad7test2(){
    let tempF = parseInt(window.prompt("Introduce un numero que convertir de ºF a ºC"));
    console.log("El resultado pasando true es: " + actividad6Convert(tempF, true));
}
