function actividad6Convert(tempF){
    let tempC = (tempF - 32) * 5/9;
    return tempC;
}
function actividad6test1(){
    console.log("Comprueba si 32F = 0C")
    let tempF = 32;
    let tempCReal = 0;
    if(actividad6Convert(tempF) == tempCReal){
        console.log("Se ha transformado correctamente, 32F = 0C");
    }
    else{
        console.log("Se ha transformado incorrectamente");
    }
}
function actividad6test2(){
    let tempF = 75.2;
    let tempCReal = 24;
    if(actividad6Convert(tempF) == tempCReal){
        console.log("Se ha transformado correctamente, 75.2F = 24C");
    }
    else{
        console.log("Se ha transformado incorrectamente");
    }
}