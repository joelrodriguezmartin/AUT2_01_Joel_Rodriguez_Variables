function actividad7() {
    let intentos = 3;
    let acertado = false;
    let capital = "Bogotá"
    while (intentos >= 1 && !acertado) {
        respuesta = window.prompt("Intenta averiguar el pais, intentos restantes " + intentos);
        if (respuesta == capital) {
            acertado = true;
            alert("Has acertado");
        }
        else {
            intentos--;
        }
    }
    if (!acertado) {
        alert("Has fallado todos los intentos");
    }
}