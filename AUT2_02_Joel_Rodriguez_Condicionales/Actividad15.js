function actividad15a() {
    let grados = parseInt(window.prompt("Introduce un angulo en º: "))
    alert(deg2rad(grados) + " radianes");
}
function actividad15b() {
    let radianes = parseInt(window.prompt("Introduce un angulo en radianes: "))
    alert(rad2deg(radianes) + " grados");
}
function actividad15c() {
    let anguloGrados = parseInt(window.prompt("Introduce un angulo en º: "))
    alert(sinDeg(anguloGrados) + " es el seno del angulo");
}
function actividad15d() {
    let anguloGrados = parseInt(window.prompt("Introduce un angulo en º: "))
    alert(cosDeg(anguloGrados) + " es el coseno del angulo");
}
function actividad15e() {
    let anguloGrados = parseInt(window.prompt("Introduce un angulo en º: "))
    alert(sinDegAlt(anguloGrados) + " es el seno del angulo");
}
function actividad15f() {
    let anguloGrados = parseInt(window.prompt("Introduce un angulo en º: "))
    alert(cosDegAlt(anguloGrados) + " es el coseno del angulo");
}
//360º = 2pi --> radianes = grados * 180/pi, grados = radianes * pi/180
function deg2rad(grados) {
    //funcion que cambia de grados a radianes 
    let radianes = grados * Math.PI / 180;
    return radianes;
}
function rad2deg(radianes) {
    //funcion que cambia de radianes a grados
    let grados = radianes * 180 / Math.PI;
    return grados;
}
function sinDeg(anguloGrados) {
    //funcion que calcula el seno a partir de un grado
    let anguloRadianes = deg2rad(anguloGrados);
    let seno = Math.sin(anguloRadianes);
    return seno;
}
function cosDeg(anguloGrados) {
    //funcion que calcula el coseno a partir de un grado
    let anguloRadianes = deg2rad(anguloGrados);
    let coseno = Math.cos(anguloRadianes);
    return coseno;
}
function sinDegAlt(anguloGrados) {
    //funcion que calcula el seno a partir del coseno (cosDeg) teniendo en cuenta sin²x + cos²x = 1
    let seno = Math.sqrt(1 - Math.pow(cosDeg(anguloGrados), 2))
    return seno;
}
function cosDegAlt(anguloGrados) {
    //funcion que calcula el coseno a partir del seno (sinDeg) teniendo en cuenta sin²x + cos²x = 1
    let coseno = Math.sqrt(1 - Math.pow(sinDeg(anguloGrados), 2))
    return coseno;
}