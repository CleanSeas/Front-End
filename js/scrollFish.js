var bolinha = document.getElementById('bolinha');

window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        bolinha.style.backgroundColor = '#fafafa'; 
        bolinha.style.color = '#3bc4ff';
        bolinha.style.boxShadow = '0 0 1vw .1vw #00000036'
        bolinha.style.cursor = 'pointer';
    } else {
        bolinha.style.backgroundColor = '#86c3e500'; 
        bolinha.style.color = '#86c3e500';
        bolinha.style.boxShadow = '0 0 0 0'
        bolinha.style.cursor = 'default';
    }
});

bolinha.addEventListener('mouseenter', function() {
    if (window.scrollY > 200) {
        bolinha.style.backgroundColor = '#eeeeee';
        bolinha.style.color = '#00b3ff';
    }
})

bolinha.addEventListener('mouseleave', function() {
    if (window.scrollY > 200) {
        bolinha.style.backgroundColor = '#fafafa';
        bolinha.style.color = '#3bc4ff';
    }
})