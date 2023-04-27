const hipervinculo = document.getElementById('hipervinculo');
const boton1 = document.getElementsByTagName('button')[0];
const boton2 = document.getElementsByTagName('button')[1];
const boton3 = document.getElementsByTagName('button')[2];

function cambiarHipervinculo(url) {
    hipervinculo.href = url;
    hipervinculo.innerText = url;
    }