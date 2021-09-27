function actividad9() {
    mes = parseInt(window.prompt("Introduce un mes"));
    año = parseInt(window.prompt("Introduce un año"));
    if (mes < 0 || mes > 12) {
        alert("Mes incorrecto")
    }
    else {
        mesanterior = mes - 1
        messiguiente = mes + 1
        añosig = año
        añoprev = año
        if (mesanterior < 1) {
            mesanterior = 12;
            añoprev--;
        }
        if (messiguiente > 12) {
            messiguiente = 1;
            añosig++;
        }
        alert("Mes anterior: " + mesanterior + "/" + añoprev + " Mes siguiente: " + messiguiente + "/" + añosig);
    }
}