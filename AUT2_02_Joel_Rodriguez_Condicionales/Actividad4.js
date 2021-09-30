function actividad4a() {
    let result = 1, arg1, arg2, res1, res2;

    while (result > 0) {

        arg1 = Math.random() - 0.5;
        if (arg1 < 0) {
            continue //Hacemos continue si el numero del que haremos la raiz cuadrada es negativo
        }
        res1 = Math.sqrt(arg1);

        arg2 = Math.random();

        if ((arg1 + arg2) == 0) {
            break; //Hacemos break si la suma que dividimos es 0
        }

        res2 = res1 / (arg1 + arg2);

        result = res1 + res2;

        console.log(result);

    }
}
function actividad4b() {
    let result = 1, arg1, arg2, res1, res2;
    let divByZero = false;

    while (result > 0 && !divByZero) {

        arg1 = Math.random() - 0.5;
        if (arg1 > 0) {
            res1 = Math.sqrt(arg1);

            arg2 = Math.random();

            if ((arg1 + arg2) == 0) {
                divByZero = true;
            }
            else {
                res2 = res1 / (arg1 + arg2);

                result = res1 + res2;

                console.log(result);
            }
            //El codigo tiene mas líneas y es menos elegante, no es más sencillo
        }
    }
}
function actividad4c() {
    let result, arg1, arg2, res1, res2;
    //Cambiamos while for do while para asegurarnos de que entre aunque result no este inicializado
    do {
        arg1 = Math.random() - 0.5;
        if (arg1 < 0) {
            continue
        }
        res1 = Math.sqrt(arg1);

        arg2 = Math.random();

        if ((arg1 + arg2) == 0) {
            break;
        }

        res2 = res1 / (arg1 + arg2);

        result = res1 + res2;

        console.log(result);
    } while (result > 0);
}