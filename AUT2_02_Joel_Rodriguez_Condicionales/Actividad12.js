function actividad12(){
    fecha = window.prompt("Introduzca una fecha con formato yyyy-mm-dd");
    formato = window.prompt("Introduzca formato: d dia, h hora, m minuto, s segundo");
    calcularFecha(fecha, formato);
}

function calcularFecha(fecha, formato = e){
    let date = new Date(fecha); //definimos la fecha recogida en parametros
    dateUnix = date.getTime()/1000;//calculamos el tiempo en segundos de la fecha
    nowUnix = Date.now()/1000;//calculamos el tiempo en segundos actual
    diffTime = nowUnix - dateUnix;//calculamos diferencia de los tiempos en segundos
    switch(formato){
        case "d":
            alert(diffTime/24/3600);//pasamos de segundos a dias y lo mostramos
            break;
        case "h":
            alert(diffTime/3600);//pasamos de segundos a horas y lo mostramos
            break;
        case "m":
            alert(diffTime/60);//pasamos de segundos a minutos y lo mostramos
            break;
        case "s":
            alert(diffTime);//mostramos los segundos
            break;
        default:
            alert("ERROR EN FORMATO");
            break;
    }   
}