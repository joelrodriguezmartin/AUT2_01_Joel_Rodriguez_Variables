function actividad14(){
    let fecha = window.prompt("Introduce una fecha en formato YYYY-mm-dd");
    alert("La fecha juliana es: " + fechaJuliana(fecha));
}

function fechaJuliana(fecha){
    let dateUnix = new Date(fecha); //primero creamos una fecha
    dateUnix = dateUnix.getTime(); //la pasamos a tiempo unix
    dateUnix = dateUnix/1000/3600/24; //la dividimos entre 1000 para pasar de ms a s, entre 3600 para pasar de s a h y entre 24 para pasar de h a d
    let fechaJuliana = dateUnix + 2440587.5; //El valor que se suma para calcular la fecha juliana es el numero de dias desde el 4713 AD

    return fechaJuliana;
}