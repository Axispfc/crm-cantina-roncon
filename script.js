document.addEventListener("DOMContentLoaded", () => {
  const botaoPedido = document.querySelector(".botao-pedido");

  if (!botaoPedido) {
    return;
  }

  botaoPedido.addEventListener("click", () => {
    sessionStorage.setItem(
      "origemAcesso",
      "pagina-inicial"
    );
  });
});