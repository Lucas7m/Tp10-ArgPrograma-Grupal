// Ejercicio 17

function ingresaMouse1(event){
    document.getElementById("casilla1").style.backgroundColor = 'lightblue';
}

function ingresaMouse2(event){
    document.getElementById("casilla2").style.backgroundColor = 'lightblue';
}

function ingresaMouse3(event){
    document.getElementById("casilla3").style.backgroundColor = 'lightblue';
}

function ingresaMouse4(event){
    document.getElementById("casilla4").style.backgroundColor = 'lightblue';
}
// --------------------------------------------------------------------------------


// Ejercicio 18

function ingresaMouse1_2(event){
    document.getElementById("casilla1_2").style.backgroundColor = 'lightblue';
}

function saleMouse1(event){
    document.getElementById("casilla1_2").style.backgroundColor = 'white';
}

function ingresaMouse2_2(event){
    document.getElementById("casilla2_2").style.backgroundColor = 'lightblue';
}

function saleMouse2(event){
    document.getElementById("casilla2_2").style.backgroundColor = 'white';
}

function ingresaMouse3_2(event){
    document.getElementById("casilla3_2").style.backgroundColor = 'lightblue';
}

function saleMouse3(event){
    document.getElementById("casilla3_2").style.backgroundColor = 'white';
}

function ingresaMouse4_2(event){
    document.getElementById("casilla4_2").style.backgroundColor = 'lightblue';
}

function saleMouse4(event){
    document.getElementById("casilla4_2").style.backgroundColor = 'white';
}
// --------------------------------------------------------------------------------


// Ejercicio 19
let i = 2;
const redimensionado = document.querySelector("#redimensionado");

redimensionado.addEventListener("dblclick", cambiaColor);

function cambiaColor(){
    if(i%2 == 0){
        redimensionado.style.backgroundColor='black';
        redimensionado.style.width="250px";
        redimensionado.style.height="250px";
    }else{
        redimensionado.style.backgroundColor='aqua';
        redimensionado.style.width="800px";
        redimensionado.style.height="70px";
    }
    i++;  
}
// --------------------------------------------------------------------------------


// Ejercicio 20

const linkcito = document.getElementById("linkcito");

linkcito.addEventListener("click", function cancelarRecarga(event){
    let pagina = document.links.linkcito.href;
    event.preventDefault();
    console.log(pagina);
});
// --------------------------------------------------------------------------------


// Ejercicio 21

const formulario = document.getElementById("formu");

formulario.addEventListener("submit", function(event){
    event.preventDefault();
    if(document.getElementById("exampleInputPassword1").value != ""){
        document.getElementById("envioForm").innerHTML="¡El envio del formulario fue exitoso!";
    }else{
        document.getElementById("envioForm").innerHTML="TIENE QUE INGRESAR UNA PASSWORD";
    }
    
})