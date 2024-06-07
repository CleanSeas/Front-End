const abrirModal = document.querySelector('#abrirModal');
const fecharModal = document.querySelector('#btnFechar')
const modal = document.querySelector('dialog');

abrirModal.addEventListener('click', (e)=> {
    modal.showModal();
})

fecharModal.addEventListener('click', (e)=> {
    modal.close();
})

