function actividad9() {
    var mes = parseInt(window.prompt("Introduce un mes"));
    var año = parseInt(window.prompt("Introduce un año"));
    if (mes < 0 || mes > 12) {
        alert("Mes incorrecto")
    }
    else {
        var mesanterior = mes - 1
        var messiguiente = mes + 1
        var añosig = año
        var añoprev = año
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