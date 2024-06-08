const abrirModal = document.querySelector('#abrirModalTime');
const fecharModal = document.querySelector('#btnFecharTime')
const modal = document.querySelector('#modalTime');

abrirModal.addEventListener('click', (e)=> {
    modal.showModal();
})

fecharModal.addEventListener('click', (e)=> {
    modal.close();
})

