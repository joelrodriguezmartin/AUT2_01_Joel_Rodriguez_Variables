function actividad14() {
    let end = parseInt(window.prompt("Introduzca el principio"));
    let start = end + 100;
    for (let i = start; i >= end; i--) {
        console.log("4 x " + i + " = " + 4 * i);
    }
}