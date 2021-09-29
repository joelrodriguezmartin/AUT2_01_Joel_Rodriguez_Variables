function actividad9(){
    let cantidadEuro = parseInt(window.prompt("Introduce cantidad de dinero: "));
    let arrayDinero = [500, 200, 100, 50, 20, 10, 5, 2, 1];
    let arrayBilletes = [];
    let aux = cantidadEuro;
    for (let i = 0; i < arrayDinero.length; i++){
        let numeroBilletes = ~~(aux / arrayDinero[i]); //Division entera de la cantidad entre el billete (descartamos decimales)
        console.log(numeroBilletes)
        arrayBilletes.push(numeroBilletes);
        aux -= numeroBilletes * arrayDinero[i];
    }

    console.log("El resultado en billetes y monedas de " + cantidadEuro + "€ es: ")
    arrayDinero.forEach
    for (let i = 0; i < arrayDinero.length; i++){
    console.log("Billetes/monedas de " + arrayDinero[i] + ": " + arrayBilletes[i])
    }
}