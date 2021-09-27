function actividad12() {
    let input = parseInt(window.prompt("Introduce un numero "));
    var array = new Array();
    for (let i = 1; i <= input; i++) {
        array.push(i);
        var numberstring = "";
        for (numbers in array) {
            numberstring = numberstring + array[numbers] + " ,"

        }
        console.log(numberstring);
    }
}