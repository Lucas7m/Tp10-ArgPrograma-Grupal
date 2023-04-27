const palabrasDestacadas = document.querySelectorAll('strong');
    palabrasDestacadas.forEach(palabra => {
    palabra.addEventListener('click', () => {
    palabra.classList.add('hidden');
    });
    });