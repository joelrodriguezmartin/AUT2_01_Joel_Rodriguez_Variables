function actividad13() {
    number1 = parseInt(window.prompt("Introduzca el primer numero"));
    number2 = parseInt(window.prompt("Introduzca el segundo numero"));
    number3 = parseInt(window.prompt("Introduzca el tercer numero"));

    let isCrescent = false;
    if (number1 < number2 && number2 < number3) {
        isCrescent = true;
    }

    let isThirdSum = false;
    if (number3 == number1 + number2) {
        isThirdSum = true;
    }

    if (isCrescent) {
        alert("El orden es creciente");
    }
    else {
        alert("No estan ordenados");
    }

    if (isThirdSum) {
        alert("El tercero es suma de los dos primeros");
    }
    else {
        alert("El tercero no es suma de los dos primeros");
    }
}