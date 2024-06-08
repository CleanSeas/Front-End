const abrirModalCtt = document.querySelector('#abrirCtt');
const fecharModalCtt = document.querySelector('#btnFecharCtt')
const modalCtt = document.querySelector('#modCtt');
const campoTEL = document.getElementById("idTel")

abrirModalCtt.addEventListener('click', (e)=> {
    modalCtt.showModal();
})

fecharModalCtt.addEventListener('click', (e)=> {
    modalCtt.close();
})

campoTEL.addEventListener("input", function(e){
    var value = e.target.value;
    var telPattern = value.replace(/\D/g, '')
                          .replace(/(\d{2})(\d)/, '($1) $2')
                          .replace(/(\d{4})(\d)/, '$1-$2')
                          .replace(/(-\d{4})\d+?$/, '$1')
    e.target.value = telPattern;
})
