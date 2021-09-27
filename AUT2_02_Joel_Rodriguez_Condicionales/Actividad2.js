function actividad2(){
    number = parseInt(window.prompt("Introduce un numero"))
    switch(number){
        case(0):
            alert("Este es muy facil, escoge otro");
            break;
        case 2:
        case 4:
        case 6:
            alert("Numero par");
            break;
        case 1:
        case 3:
        case 5:
            alert("Numero impar");
            break;
        default:
            alert("Solo se contar del 0 al 6");
    }
}