function actividad13a() {
    hora = parseFloat(window.prompt("Introduce hora en formato decimal "));
    alert(hdec2hms(hora));
}
function actividad13b() {
    hora = window.prompt("Introduce hora en formato hora hh:mm:ss ");
    alert(hms2hdec(hora));
}

function hdec2hms(hora) {
    let hh, mm, ss;
    let minsec = hora - Math.floor(hora); //sacamos los minutos y segundos retirando la parte decimal del numero original

    hh = Math.floor(hora); //asignamos a la hora la parte entera del numero original

    ss = minsec * 3600;//calculamos la cantidad de segundos en el numero original

    mm = Math.floor(ss / 60)//calculamos la cantidad de minutos con la division entera de los segundos

    ss %= 60;//y los segundos seran el resto de la division

    let stringDateOutput = hh + ":" + mm + ":" + ss;
    return stringDateOutput;
}

function hms2hdec(hora) {
    let hh, mm, ss;
    const arrayTime = hora.split(":");

    hh = parseInt(arrayTime[0]);
    console.log(hh);
    mm = parseInt(arrayTime[1]);
    console.log(mm);
    ss = parseInt(arrayTime[2]);
    console.log(ss);

    let horaResult = hh + (mm / 60) + (ss / 3600);
    return horaResult;
}