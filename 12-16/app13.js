function cambiarTamano(clase) {
    var noticias = document.getElementsByClassName("noticia");
    for (var i = 0; i < noticias.length; i++) {
        noticias[i].querySelector(".descripcion").classList.toggle(clase);
    }
}

function destacarNoticia() {
var noticias = document.getElementsByClassName("noticia");
for (var i = 0; i < noticias.length; i++) {
  noticias[i].classList.toggle("noticia-destacada");
}
}