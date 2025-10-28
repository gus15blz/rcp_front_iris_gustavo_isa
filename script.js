const produtos = [
  {
    nome: "Notebook Gamer Acer Nitro 5",
    preco: 5999.00,
    imagem: "https://a-static.mlcdn.com.br/800x560/notebook-gamer-acer-nitro-5-an515-58-527s-intel-core-i5-16gb-512gb-ssd-nvidia-geforce-rtx3050-4gb-windows-11/magazineluiza/238348600/6de3b7e89b657d3a6f8db3b2b8a4e3f0.jpg"
  },
  {
    nome: "Headset Gamer RGB HyperX Cloud II",
    preco: 499.90,
    imagem: "https://a-static.mlcdn.com.br/800x560/headset-gamer-hyperx-cloud-ii-rgb-usb-virtual-71-vermetho-hhsc2x-xx-rd/gazinshop/2477027/4b3ec6da51f048d01ad9cb2da3e7d78d.jpg"
  },
  {
    nome: "Mouse Gamer Logitech G Pro",
    preco: 349.90,
    imagem: "https://a-static.mlcdn.com.br/800x560/mouse-gamer-logitech-g-pro-hero-16000-dpi-6-botoes-lightsync-rgb-preto-910-005440/magazineluiza/230715600/fdd557f3b6eaa9e6e6af83e0b7af39f8.jpg"
  },
  {
    nome: "Teclado Mecânico RGB Redragon Kumara",
    preco: 299.00,
    imagem: "https://a-static.mlcdn.com.br/800x560/teclado-mecanico-gamer-redragon-kumara-k552-switch-red-rgb/rocketstore/70293p/8cefc88f8f8f1e7b0ce3f3c861efb4a3.jpg"
  }
];

const lista = document.getElementById("lista-produtos");
const carrinho = document.getElementById("carrinho");
let contador = 0;

function carregarProdutos() {
  lista.innerHTML = "";

  produtos.forEach(produto => {
    const item = document.createElement("div");
    item.classList.add("produto");

    item.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}">
      <h2>${produto.nome}</h2>
      <p>R$ ${produto.preco.toFixed(2)}</p>
      <button class="add-carrinho">Adicionar</button>
    `;

    const botao = item.querySelector(".add-carrinho");
    botao.addEventListener("click", () => {
      contador++;
      carrinho.textContent = `🛒 Carrinho (${contador})`;
    });

    lista.appendChild(item);
  });
}

carregarProdutos();
