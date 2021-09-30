function actividad10() {
    let date = new Date(Date.now());
    console.log(date.toLocaleDateString() + " " + date.toLocaleTimeString() + " GMT" + date.getTimezoneOffset());
}