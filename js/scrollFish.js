var peixinho = document.getElementById('peixeVoltar');

window.addEventListener('scroll', function() {
    if (window.scrollY > 100) { // Ponto de rolagem onde a cor muda
        peixinho.style.color = '#3bc4ff'; // Cor opaca
        peixinho.style.cursor = 'pointer';
    } else {
        peixinho.style.color = '#86c3e500'; // Transparente
        peixinho.style.cursor = 'default';
    }
});

peixinho.addEventListener('mouseenter', function() {
    if (window.scrollY > 100) {
        peixinho.style.color = '#003f71'
    }
})

peixinho.addEventListener('mouseleave', function() {
    if (window.scrollY > 100) {
        peixinho.style.color = '#3bc4ff'
    }
})
