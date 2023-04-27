//1. Genera un array de números aleatorios, ordenarlos y mostrarlo en una lista desordenada.
let numeros = [];
for (let i = 0; i < 10; i++) {
    numeros.push(Math.floor(Math.random() * 100) + 1);
};

numeros.sort();
let lista = document.getElementById("numeros");
for (let i = 0; i < numeros.length; i++) {
    let num = document.createElement("li");
    num.innerHTML = numeros[i];
    lista.appendChild(num);
};



//2. Dado el array = [1,2,3,4,5,6] a. Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en pantalla
let array = [1, 2, 3, 4, 5, 6];
let i = 0;
while (i < array.length) {
    let lista = document.createElement("li");
    lista.innerText = array[i];
    document.getElementById("listaWhile").appendChild(lista);
    i++;
};

//b Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en pantalla.
for (let i = 0; i < array.length; i++) {
    let lista = document.createElement("li");
    lista.innerText = array[i];
    document.getElementById("listaFor").appendChild(lista);
};

//c. Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos en pantalla
array.forEach(function (iterar) {
    let lista = document.createElement("li");
    lista.innerText = iterar;
    document.getElementById("listaEach").appendChild(lista);
});

//d. Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
let suma = 0;
for (let i = 0; i < array.length; i++) {
    suma += array[i];
};

document.getElementById("suma").innerHTML = "La suma de los elementos del array es: " + suma;
//e. Generar una copia de un array pero con todos los elementos incrementados en 1.
let copia = [];
for (let i = 0; i < array.length; i++) {
    copia.push(array[i] + 1);
};
document.getElementById("copia").innerHTML = "con un numero aumentado el array es igual a: " + copia;

//f. Calcular el promedio
let promedio = suma / 6
document.getElementById("promedio").innerHTML = "El promedio de los numeros sumados es: " + promedio;



//3. Dado un array de números, mostrar cómo quedaría si cada uno de los números es elevado al cuadrado.
let cuadrado = [];
for (let i = 0; i < array.length; i++) {
    cuadrado.push(array[i] ** 2);
};
document.getElementById("cuadrado").innerHTML = "Si el array fuese al cuadrado quedaria como: " + cuadrado;



//4. Dado el array [ 1, -4, 12, 0, -3, 29, -150], hacer la suma solo de sus números positivos
let arrayVariado = [1, -4, 12, 0, -3, 29, -150]
let arrayPositivo = arrayVariado.filter(numero => numero > 0);
let positivo = 0
for (let i = 0; i < arrayPositivo.length; i++) {
    positivo += arrayPositivo[i]
};
document.getElementById("positivo").innerHTML = "La suma de los elementos del array es: " + positivo;



//5. Dado el array ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"].

//a. Obtener aquellos nombres con al menos 6 letras
let nombres = ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"];
let nombres6 = [];

for (let i = 0; i < nombres.length; i++) {
    if (nombres[i].length >= 6) {
        nombres6.push(nombres[i]);
    }
}
let listaNombres6 = document.getElementById("nombres6");
for (let i = 0; i < nombres6.length; i++) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(nombres6[i]));
    listaNombres6.appendChild(li);
}

//b. Obtener los nombres que comienzan con "M".
let nombresConM = nombres.filter(nombre => nombre.startsWith("M"));

let listaNombresM = document.getElementById("nombresm");
nombresConM.forEach(nombre => {
    let elemento = document.createElement("li");
    elemento.textContent = nombre;
    listaNombresM.appendChild(elemento);
});

//c. Ordenar alfabéticamente y mostrar por consola.
let listaNombresOrdenada = nombres.sort()
document.getElementById("nombresAlfa").innerHTML = listaNombresOrdenada;

//6. Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.
let colores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];
function ValidarColor(color) {
    console.log(color);
    if (colores.includes(color)) {
        document.getElementById("res").innerHTML = "El color se encuentra en el array";
    } else {
        document.getElementById("res").innerHTML = "El color no se encuentra en el array";
    }
}