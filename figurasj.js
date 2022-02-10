// ejercicio 3 

// Codigo del Cuadrado

console.group("Cuadrados");

// perimetro lado x lado = lado x 4

function perimetroCuadrado(lado) {
    return lado * 4;
}

// area lado al cuadrado = lado x lado

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();


//-------------------------------------------------------------------

// Codigo del Triangulo

console.group("Triangulos");

// perimetro Triangulo  sumar lados

function perimetroTriangulo(ladoT1, ladoT2, baseT) {
    return parseInt(ladoT1) + parseInt(ladoT2) + parseInt(baseT);

    // area del Triangulo  = base x altura / 2
}

function areaTriangulo(baseT, alturaT) {
    return (baseT * alturaT) / 2;
}

console.groupEnd();
//-------------------------------------------------------------------

// Codigo del Circulo

console.group("Circulos");

// Diametro

function diametroCirculo(radioCirculo) {
    return radioCirculo * 2;
}
// Pi

const Pi = Math.PI;
console.log("Pi es: " + Pi);

// Circunferencia (perimetro)

function perimetroCirculo(radioCirculo) {
    const diametro = diametroCirculo(radioCirculo);
    return diametro * Pi;
}

// Area

function areaCirculo(radioCirculo) {
    return (radioCirculo * radioCirculo) * Pi;
}

console.groupEnd();

//--------------------------------------------------------------- html // js------------------------------------------------------------------

// ---------------------------------------------- js cuadrado

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado"); // nos permite obtener desde js el input que inserta desde html el usuario
    const value = input.value; // obtenemos el valor ingresado por los usuarios

    const perimetro = perimetroCuadrado(value); // cuando den click ejecute el perimetro -- llamamos a la funcion perimetro donde aparece eel calculo que se calculara con lo ingresado en value
    alert(perimetro);
}

function calcularAreaCuadrado() {

    const input = document.getElementById("inputCuadrado"); // nos permite obtener desde js el input que inserta desde html el usuario
    const value = input.value; // obtenemos el valor ingresado por los usuarios

    const area = areaCuadrado(value); // cuando den click ejecute el perimetro -- llamamos a la funcion perimetro donde aparece eel calculo que se calculara con lo ingresado en value
    alert(area);

}

//  ----------------------------------------------js triangulo -------------------------------------

function calcularPerimetroTriangulo() {

    var inputa = document.getElementById("inputTrianguloA");
    var valueA = inputa.value;

    var inputc = document.getElementById("inputTrianguloC");
    var valueC = inputc.value;

    var inputb = document.getElementById("inputTrianguloB");
    var valueB = inputb.value;

    const perimetroT = perimetroTriangulo(valueA, valueB, valueC);
    alert(parseInt(perimetroT));
}

function calcularAreaTriangulo() {

    var inputb = document.getElementById("inputTrianguloB");
    var valueB = inputb.value;

    var inputd = document.getElementById("inputTrianguloD");
    var valueD = inputd.value;


    const areaT = areaTriangulo(valueB, valueD);
    alert(parseInt(areaT));

}

//  ----------------------------------------------js circulo -------------------------------------


function calcularDiametroCirculo() {

    var inputDi = document.getElementById("inputCirculoA");
    var valueDi = inputDi.value;

    const diametroC = diametroCirculo(valueDi);
    alert(parseInt(diametroC));

}

function calcularPerimetroCirculo() {

    var inputPe = document.getElementById("inputCirculoB");
    var valuePe = inputPe.value;

    const perimetroCi = perimetroCirculo(valuePe);
    alert(parseInt(perimetroCi));


}

function calcularAreaCirculo() {

    var inputAr = document.getElementById("inputCirculoA");
    var valueAr = inputAr.value;

    const areaCi = areaCirculo(valueAr);
    alert(parseInt(areaCi));


}