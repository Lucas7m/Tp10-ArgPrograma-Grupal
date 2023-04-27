const tabla1 = document.getElementById('table1');
const tabla2 = document.getElementById('table2');

tabla1.querySelectorAll('tr').forEach(fila => {
    fila.addEventListener('click', () => {
      fila.classList.toggle('resaltado');
    });
  });
