function actividad5() {
    let dni = window.prompt("Introduce tu dni sin letra");
    alert(dniLetra(dni));
}

function dniLetra(letras) {
    arrayLetras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
    let numeroDni = parseInt(letras) % 23;
    return arrayLetras[numeroDni];
}

