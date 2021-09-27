function ej1(){
    console.log(2>3+2) //false
    console.log(1+false+3.5)//4.5
    console.log(4*true+2)//6
    console.log(5/0)//Infinity
    console.log(10>2>0)//true
    //console.log(3* hola + 2)//Error hola is not defined
    console.log(5/"hola")//NaN
    console.log(Math.PI * 32)//100.53096491487338
}
function ej2(){
    let nota = parseInt(window.prompt("Introduzca una nota"));

  
    if(nota > 0 && nota < 5){
        alert("Suspenso");
    }
    else if(nota >= 5 && nota < 7){
        alert("Aprobado");
    }
    else if(nota >=  7 && nota < 9){
        alert("Notable");
    }
    else if(nota >= 9 && nota <= 10){
        alert("Sobresaliente");
    }
    else if(isNaN(nota)){
        alert("ERROR Introduzca numero")
    }
    else if(nota > 10) {
        alert("ERROR Introduzca numero entre 0 y 10")
    }       
}
function ej3(){
    console.log(parseInt("15"));//15

    console.log(parseInt("15.5"));//15

    console.log(parseInt(15.5));//15

    console.log(parseInt("true"));//NaN

    console.log(parseInt(true));//NaN
}
        
    
