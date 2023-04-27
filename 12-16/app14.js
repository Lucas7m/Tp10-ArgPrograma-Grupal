function cambiarContenido() {
    var tdElementos = document.querySelectorAll("#tabla1 td");
    for (var i = 0; i < tdElementos.length; i++) {
      tdElementos[i].innerHTML = "-";
    }
  }

  