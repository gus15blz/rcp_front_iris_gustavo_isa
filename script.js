const botoes = document.querySelectorAll('.add-carrinho');
const carrinho = document.getElementById('carrinho');
let contador = 0;

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    contador++;
    carrinho.textContent = `🛒 Carrinho (${contador})`;
  });
});
