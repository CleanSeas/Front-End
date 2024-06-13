const abrirModalCtt = document.querySelector("#abrirCtt");
const fecharModalCtt = document.querySelector("#btnFecharCtt");
const modalCtt = document.querySelector("#modCtt");
const campoTEL = document.getElementById("idTel");

abrirModalCtt.addEventListener("click", () => {
  modalCtt.showModal();
});

fecharModalCtt.addEventListener("click", () => {
  modalCtt.close();
});

campoTEL.addEventListener("input", function (e) {
  var value = e.target.value;
  var telPattern = value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{1})(\d{4})(\d)/, "$1 $2-$3")
    .replace(/(-\d{4})\d+?$/, "$1");
  e.target.value = telPattern;
});

function validacao() {
  let modalMsg = document.querySelector(".valida");

  modalMsg.setAttribute("class", "sucesso");
  modalMsg.innerHTML =
    "<h2>Mensagem enviada com <a href='#' id='sucessoTxt'>Sucesso!</a></h2>";
  modalMsg.showModal();

  if (typeof modalMsg.close === "function") {
    setTimeout(() => {
      modalMsg.innerHTML = "";
      modalMsg.setAttribute("class", "valida");
      modalMsg.close();
      modalCtt.close();
      return true;
    }, 2500);
  } else {
    return false;
  }
}
