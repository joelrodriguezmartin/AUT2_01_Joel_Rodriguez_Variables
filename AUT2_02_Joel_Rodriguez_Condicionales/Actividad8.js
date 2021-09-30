function actividad8() {
    let arrayOutput = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 0) {
            arrayOutput.push(Math.pow(i, 2));
        }
        else {
            arrayOutput.push(Math.pow(i, 3));
        }
    }
    console.log(arrayOutput)
}