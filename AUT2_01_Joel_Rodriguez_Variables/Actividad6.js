function actividad6() {
    for (let i = 0; i < 5; i++) {
        number = parseInt(window.prompt("Introduzca un numero: "));
        console.log("El numero es " + number++ + " y sus 5 siguientes son: ")

        for (let i = 0; i < 5; i++) {
            console.log(number++);
        }
    }
}