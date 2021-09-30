function actividad11() {
    let string1 = "02/04/2015"; //En este caso toma 2 como Febrero y 4 como el día
    let string2 = "2015-04-02"; //En este caso toma 4 como Abril y 2 como el día
    let string3 = "April 02, 2015"; //Simplemente utilizamos este string en el constructor de Date

    date1 = new Date(string1);
    date2 = new Date(string2);
    date3 = new Date(string3); //Date admite este formato de string para la creacion de fechas

    console.log(date1);
    console.log(date2);
    console.log(date3);
}