function actividad11() {
    let year = parseInt(window.prompt("Introduce un año: "));
    if ((year % 4 == 0) && (year % 100 != 0 || year % 400 == 0)) {
        alert("Es bisiesto");
    }
    else {
        alert("No es bisiesto")
    }
}