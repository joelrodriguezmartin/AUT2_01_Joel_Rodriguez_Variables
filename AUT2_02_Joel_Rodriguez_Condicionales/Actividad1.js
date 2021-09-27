function actividad1() {
    let number1 = parseInt(window.prompt("Introduzca primera variable"));
    let number2 = parseInt(window.prompt("Introduzca segunda variable"));
    let number3 = parseInt(window.prompt("Introduzca tercera variable"));

    var isNegative = false;
    var equalToZero = false;
    var sumOver10Different = false;

    if (number1 < 0 || number2 < 0 || number3 < 0) {
        isNegative = true;
    }
    if (number1 == 0 && number2 == 0 && number3 == 0) {
        equalToZero = true;
    }
    if (((number1 + number2 + number3) > 10) && number1 != number2 && number2 != number3) {
        sumOver10Different = true;
    }

    if (isNegative || equalToZero || sumOver10Different) {
        if (isNegative) {
            alert("ERROR: Al menos una variable es negativa");
        }
        if (equalToZero) {
            alert("ERROR: Las tres variables son 0");
        }
        if (sumOver10Different) {
            alert("ERROR: La suma es mayor que 10 y las 3 variables son diferentes")
        }
    }
}