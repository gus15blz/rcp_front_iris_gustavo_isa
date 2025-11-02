const produtos = [
  // NOTEBOOKS
  {
    nome: "Notebook Gamer Acer Nitro 5",
    preco: 5999.00,
    categoria: "Notebooks",
    imagem: "img/acer_nitro.jpg",
    descricao: "Notebook gamer de alto desempenho com placa de vídeo dedicada, ideal para jogos e trabalho pesado.",
    especificacoes: {
      "Processador": "Intel Core i5-11400H ou AMD Ryzen 5 5600H",
      "Placa de Vídeo": "NVIDIA GeForce GTX 1650 4GB",
      "Memória RAM": "8GB DDR4 (expansível até 32GB)",
      "Armazenamento": "SSD 256GB NVMe",
      "Tela": "15.6\" Full HD IPS 144Hz",
      "Sistema Operacional": "Windows 11",
      "Bateria": "57Wh, até 8 horas"
    }
  },
  {
    nome: "Notebook Dell G15 Intel Core i7",
    preco: 6999.90,
    categoria: "Notebooks",
    imagem: "img/dell_g15.jpg",
    descricao: "Notebook gamer Dell com processador Intel Core i7 de última geração, perfeito para jogos de alta performance e multitarefas pesadas."
  },
  {
    nome: "Notebook Lenovo Ideapad Gaming 3i",
    preco: 5499.00,
    categoria: "Notebooks",
    imagem: "img/ideiapad.jpg",
    descricao: "Notebook gamer Lenovo com excelente custo-benefício, ideal para jogos e trabalho criativo com ótima performance gráfica."
  },
  {
    nome: "Notebook ASUS TUF Gaming F15",
    preco: 6499.90,
    categoria: "Notebooks",
    imagem: "img/tuf_gaming.jpg",
    descricao: "Notebook robusto da linha TUF Gaming da ASUS, construído para durar com design militar e componentes premium."
  },
  {
    nome: "MacBook Air M2 13 polegadas",
    preco: 8999.00,
    categoria: "Notebooks",
    imagem: "img/m2.jpg",
    descricao: "MacBook Air com chip M2 da Apple, oferecendo performance excepcional, bateria de longa duração e tela Retina de alta qualidade."
  },
  // PERIFÉRICOS
  {
    nome: "Headset Gamer RGB HyperX Cloud II",
    preco: 499.90,
    categoria: "Periféricos",
    imagem: "img/cloudII.jpg",
    descricao: "Headset gamer com som surround 7.1 virtual, iluminação RGB e microfone destacável, ideal para comunicação em jogos."
  },
  {
    nome: "Mouse Gamer Logitech G Pro X Superlight",
    preco: 749.90,
    categoria: "Periféricos",
    imagem: "img/logitech.jpg",
    descricao: "Mouse sem fio ultra leve, perfeito para jogos competitivos com sensor HERO 25K e bateria de longa duração."
  },
  {
    nome: "Teclado Mecânico RGB Redragon Kumara",
    preco: 299.00,
    categoria: "Periféricos",
    imagem: "img/kumaraa.avif",
    descricao: "Teclado mecânico com switches Outemu Blue, iluminação RGB personalizável e layout compacto ideal para jogos."
  },
  {
    nome: "Webcam Logitech C920 HD Pro",
    preco: 399.90,
    categoria: "Periféricos",
    imagem: "img/camera_logitech.jpg",
    descricao: "Webcam Full HD 1080p com microfone estéreo integrado e autofoco, perfeita para videoconferências e transmissões."
  },
  {
    nome: "Mousepad Gamer RGB HyperX",
    preco: 199.90,
    categoria: "Periféricos",
    imagem: "img/mousepad_hyperex.webp",
    descricao: "Mousepad estendido com iluminação RGB, superfície de baixo atrito e bordas costuradas para maior durabilidade."
  },
  {
    nome: "Headset Gamer Corsair HS70 Pro",
    preco: 649.90,
    categoria: "Periféricos",
    imagem: "img/hs70_pro.jpg",
    descricao: "Headset wireless com som surround, bateria de 16 horas e design confortável para longas sessões de jogo."
  },
  {
    nome: "Mouse Gamer Razer DeathAdder V3",
    preco: 599.90,
    categoria: "Periféricos",
    imagem: "img/razer-deathadder-v3-hero-desktop.webp",
    descricao: "Mouse ergonômico com sensor óptico de 30K DPI e switches ópticos Razer para resposta instantânea."
  },
  {
    nome: "Teclado Mecânico Corsair K70 RGB",
    preco: 899.90,
    categoria: "Periféricos",
    imagem: "img/K70_RGB_PRO_PC_02.avif",
    descricao: "Teclado mecânico premium com switches Cherry MX, iluminação RGB individual por tecla e apoio para punho."
  },
  {
    nome: "Microfone HyperX SoloCast",
    preco: 449.90,
    categoria: "Periféricos",
    imagem: "img/microfone.webp",
    descricao: "Microfone USB condensador com padrão cardióide, filtro de pop integrado e controle de ganho para streaming."
  },
  // MONITORES
  {
    nome: "Monitor Gamer LG UltraGear 27'",
    preco: 1299.90,
    categoria: "Monitores",
    imagem: "img/monitorLG.jpg",
    descricao: "Monitor 4K 27 polegadas com taxa de atualização de 144Hz, tecnologia HDR e cores precisas para jogos e trabalho."
  },
  {
    nome: "Monitor Gamer ASUS TUF 24' 144Hz",
    preco: 1099.90,
    categoria: "Monitores",
    imagem: "img/monitorTUFF.png",
    descricao: "Monitor Full HD de 24 polegadas com 144Hz, tempo de resposta de 1ms e tecnologia Adaptive-Sync para jogos fluidos."
  },
  {
    nome: "Monitor Gamer Samsung Odyssey 32'",
    preco: 2499.90,
    categoria: "Monitores",
    imagem: "img/odissey.webp",
    descricao: "Monitor curva ultrawide de 32 polegadas com resolução 4K, taxa de atualização de 240Hz e tecnologia Quantum Dot."
  },
  {
    nome: "Monitor AOC Hero 27' 165Hz",
    preco: 1399.90,
    categoria: "Monitores",
    imagem: "img/aoc.webp",
    descricao: "Monitor Full HD de 27 polegadas com 165Hz, HDR10 e tecnologia FreeSync Premium para experiência imersiva."
  },
  {
    nome: "Monitor Gamer MSI Optix 24'",
    preco: 999.90,
    categoria: "Monitores",
    imagem: "img/optix.jpg",
    descricao: "Monitor Full HD de 24 polegadas com 144Hz, bordas ultrafinas e tecnologia Anti-Flicker para conforto visual."
  },
  // HARDWARE
  {
    nome: "Placa de Vídeo RTX 3060 12GB",
    preco: 2499.90,
    categoria: "Hardware",
    imagem: "img/3060.jpg",
    descricao: "Placa de vídeo NVIDIA RTX 3060 com 12GB GDDR6, tecnologia Ray Tracing e DLSS para jogos em alta qualidade."
  },
  {
    nome: "SSD NVMe Kingston 1TB",
    preco: 449.90,
    categoria: "Hardware",
    imagem: "img/nvme.jpg",
    descricao: "SSD NVMe de 1TB com velocidades de leitura de até 3500MB/s, ideal para boot rápido e transferência de arquivos."
  },
  {
    nome: "Placa de Vídeo RTX 4070 12GB",
    preco: 4299.90,
    categoria: "Hardware",
    imagem: "img/4070.jpg",
    descricao: "Placa de vídeo de alto desempenho RTX 4070 com 12GB GDDR6X, perfeita para gaming em 4K e criação de conteúdo."
  },
  {
    nome: "Memória RAM DDR4 16GB 3200MHz",
    preco: 349.90,
    categoria: "Hardware",
    imagem: "img/ram.webp",
    descricao: "Kit de memória RAM DDR4 de 16GB com velocidade de 3200MHz, ideal para jogos e multitarefas pesadas."
  },
  {
    nome: "SSD SATA 2TB Samsung 870 EVO",
    preco: 699.90,
    categoria: "Hardware",
    imagem: "img/memoriaSansung.webp",
    descricao: "SSD SATA de 2TB com tecnologia V-NAND, velocidades de até 560MB/s e garantia de 5 anos da Samsung."
  },
  {
    nome: "Placa Mãe ASUS TUF Gaming B550",
    preco: 1299.90,
    categoria: "Hardware",
    imagem: "img/b550.png",
    descricao: "Placa mãe AMD B550 com suporte para processadores Ryzen, PCIe 4.0 e design robusto para gaming."
  },
  {
    nome: "Processador AMD Ryzen 7 5800X",
    preco: 1999.90,
    categoria: "Hardware",
    imagem: "img/ryzen7.avif",
    descricao: "Processador AMD Ryzen 7 5800X com 8 núcleos, 16 threads e clock de até 4.7GHz para máxima performance."
  },
  {
    nome: "Fonte 750W 80 Plus Gold",
    preco: 599.90,
    categoria: "Hardware",
    imagem: "img/fonte.webp",
    descricao: "Fonte modular 750W com certificação 80 Plus Gold, eficiência de 90% e proteções completas para seu PC."
  },
  // CONSOLES
  {
    nome: "Console PlayStation 5",
    preco: 4299.90,
    categoria: "Consoles",
    imagem: "img/ps5.jpg",
    descricao: "PlayStation 5 com SSD ultra-rápido, gráficos em 4K e 120fps, ray tracing e compatibilidade com PS4."
  },
  {
    nome: "Xbox Series X 1TB",
    preco: 3999.90,
    categoria: "Consoles",
    imagem: "img/seriesX.jpg",
    descricao: "Xbox Series X com 4K a 120fps, ray tracing, Quick Resume e acesso ao Xbox Game Pass."
  },
  {
    nome: "Nintendo Switch OLED",
    preco: 2499.90,
    categoria: "Consoles",
    imagem: "img/switch.jpg",
    descricao: "Nintendo Switch com tela OLED de 7 polegadas, melhor qualidade de imagem e som para jogos portáteis."
  },
  {
    nome: "Xbox Series S 512GB",
    preco: 2299.90,
    categoria: "Consoles",
    imagem: "img/seriesS.jpg",
    descricao: "Xbox Series S compacto e acessível com resolução até 1440p, 120fps e compatibilidade total com jogos da nova geração."
  },
  {
    nome: "PlayStation 5 Digital Edition",
    preco: 3899.90,
    categoria: "Consoles",
    imagem: "img/ps5digital.webp",
    descricao: "PlayStation 5 Digital Edition sem leitor de discos, mesma performance do PS5 com preço mais acessível."
  },
  // MÓVEIS
  {
    nome: "Cadeira Gamer DXRacer Racing",
    preco: 1899.90,
    categoria: "Móveis",
    imagem: "img/cadeira fusion.png",
    descricao: "Cadeira gamer ergonômica com apoio lombar, braços ajustáveis, reclinável até 135° e design esportivo."
  },
  {
    nome: "Cadeira Gamer Cougar Armor One",
    preco: 1599.90,
    categoria: "Móveis",
    imagem: "img/cadeiraMonster.jpg",
    descricao: "Cadeira gamer com estrutura de aço reforçada, espuma de alta densidade e design robusto para longas sessões."
  },
  {
    nome: "Mesa Gamer 1.60m com RGB",
    preco: 1299.90,
    categoria: "Móveis",
    imagem: "img/mesa.jpg",
    descricao: "Mesa gamer de 1.60m com iluminação RGB integrada, espaço amplo para múltiplos monitores e porta-tudo organizado."
  },
  {
    nome: "Suporte para Monitor Articulado",
    preco: 299.90,
    categoria: "Móveis",
    imagem: "img/suporte.jpg",
    descricao: "Suporte articulado para monitor com ajuste de altura, inclinação e rotação, suporta até 9kg e monitores de 17 a 32 polegadas."
  },
  {
    nome: "Estande para Headset Gamer",
    preco: 149.90,
    categoria: "Móveis",
    imagem: "img/suporteHeadset.jpg",
    descricao: "Estande elegante para headset com base pesada, iluminação RGB opcional e design minimalista para sua mesa."
  }
];


const lista = document.getElementById("lista-produtos");
const contadorCarrinho = document.getElementById("contador-carrinho");
const btnCarrinho = document.getElementById("carrinho");
const modalCarrinho = document.getElementById("modal-carrinho");
const btnFecharCarrinho = document.getElementById("fechar-carrinho");
const carrinhoItems = document.getElementById("carrinho-items");
const carrinhoFooter = document.getElementById("carrinho-footer");
const carrinhoTotal = document.getElementById("carrinho-total");
const btnFinalizarCompra = document.getElementById("finalizar-compra");
const filtrosCheckbox = document.querySelectorAll(".filtro-checkbox");
const btnLimparFiltros = document.getElementById("limpar-filtros");
const modalProduto = document.getElementById("modal-produto");
const modalProdutoBody = document.getElementById("modal-produto-body");
const btnFecharProduto = document.getElementById("fechar-produto");

let categoriaFiltro = "all";
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

// Função para atualizar contador do carrinho
function atualizarContadorCarrinho() {
  const totalItens = carrinho.reduce((total, item) => total + item.quantidade, 0);
  contadorCarrinho.textContent = totalItens;
}

// Função para adicionar produto ao carrinho
function adicionarAoCarrinho(produto) {
  const itemExistente = carrinho.find(item => item.nome === produto.nome);
  
  if (itemExistente) {
    itemExistente.quantidade += 1;
  } else {
    carrinho.push({
      ...produto,
      quantidade: 1,
      id: Date.now()
    });
  }
  
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  atualizarContadorCarrinho();
  renderizarCarrinho();
}

// Função para remover produto do carrinho
function removerDoCarrinho(id) {
  carrinho = carrinho.filter(item => item.id !== id);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  atualizarContadorCarrinho();
  renderizarCarrinho();
}

// Função para atualizar quantidade do produto
function atualizarQuantidade(id, novaQuantidade) {
  if (novaQuantidade <= 0) {
    removerDoCarrinho(id);
    return;
  }
  
  const item = carrinho.find(item => item.id === id);
  if (item) {
    item.quantidade = novaQuantidade;
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    atualizarContadorCarrinho();
    renderizarCarrinho();
  }
}

// Função para calcular total do carrinho
function calcularTotal() {
  return carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
}

// Função para renderizar carrinho
function renderizarCarrinho() {
  if (carrinho.length === 0) {
    carrinhoItems.innerHTML = `
      <div class="carrinho-vazio">
        <p>😔 Seu carrinho está vazio</p>
        <p>Adicione produtos para começar!</p>
      </div>
    `;
    carrinhoFooter.style.display = "none";
    return;
  }
  
  carrinhoFooter.style.display = "block";
  carrinhoItems.innerHTML = carrinho.map(item => `
    <div class="carrinho-item" data-id="${item.id}">
      <img src="${item.imagem}" alt="${item.nome}">
      <div class="carrinho-item-info">
        <h3>${item.nome}</h3>
        <p class="carrinho-item-preco">R$ ${item.preco.toFixed(2).replace(".", ",")}</p>
      </div>
      <div class="carrinho-item-controles">
        <button class="btn-quantidade btn-diminuir" onclick="atualizarQuantidade(${item.id}, ${item.quantidade - 1})">-</button>
        <span class="quantidade">${item.quantidade}</span>
        <button class="btn-quantidade btn-aumentar" onclick="atualizarQuantidade(${item.id}, ${item.quantidade + 1})">+</button>
        <button class="btn-remover" onclick="removerDoCarrinho(${item.id})">🗑️</button>
      </div>
      <div class="carrinho-item-subtotal">
        R$ ${(item.preco * item.quantidade).toFixed(2).replace(".", ",")}
      </div>
    </div>
  `).join("");
  
  const total = calcularTotal();
  carrinhoTotal.textContent = `R$ ${total.toFixed(2).replace(".", ",")}`;
}

// Abrir modal do carrinho
function abrirCarrinho() {
  modalCarrinho.style.display = "flex";
  document.body.style.overflow = "hidden";
  renderizarCarrinho();
}

// Fechar modal do carrinho
function fecharCarrinho() {
  modalCarrinho.style.display = "none";
  document.body.style.overflow = "";
}

// Event listeners
if (btnCarrinho) {
  btnCarrinho.addEventListener("click", abrirCarrinho);
}

if (btnFecharCarrinho) {
  btnFecharCarrinho.addEventListener("click", fecharCarrinho);
}

if (btnFinalizarCompra) {
  btnFinalizarCompra.addEventListener("click", () => {
    if (carrinho.length === 0) return;
    mostrarModalConfirmacao();
  });
}

// Fechar modal ao clicar fora
if (modalCarrinho) {
  modalCarrinho.addEventListener("click", (e) => {
    if (e.target === modalCarrinho) {
      fecharCarrinho();
    }
  });
}

// Tornar funções acessíveis globalmente para onclick
window.atualizarQuantidade = atualizarQuantidade;
window.removerDoCarrinho = removerDoCarrinho;

// Atualizar contador ao carregar
atualizarContadorCarrinho();

// ======== MODAL DE DETALHES DO PRODUTO ========

// Função para gerar especificações padrão caso não existam
function gerarEspecificacoesPadrao(produto) {
  const especificacoesPadrao = {
    "Notebooks": {
      "Processador": "Processador de alta performance",
      "Placa de Vídeo": "Placa de vídeo dedicada",
      "Memória RAM": "8GB DDR4 (expansível)",
      "Armazenamento": "SSD 256GB ou superior",
      "Tela": "Full HD ou superior",
      "Sistema Operacional": "Windows 11 ou Linux",
      "Garantia": "12 meses"
    },
    "Periféricos": {
      "Conectividade": "USB ou Wireless",
      "Compatibilidade": "Windows, macOS, Linux",
      "Garantia": "12 meses",
      "Dimensões": "Variável conforme modelo"
    },
    "Monitores": {
      "Resolução": "Full HD ou superior",
      "Taxa de Atualização": "60Hz ou superior",
      "Tamanho": "Conforme especificado",
      "Tipo de Painel": "IPS, VA ou TN",
      "Conectores": "HDMI, DisplayPort, VGA",
      "Garantia": "12 meses"
    },
    "Hardware": {
      "Compatibilidade": "Compatível com sistemas modernos",
      "Garantia": "12 meses",
      "Fabricante": "Marcas reconhecidas",
      "Dimensões": "Conforme especificação técnica"
    },
    "Consoles": {
      "Capacidade": "Conforme modelo",
      "Resolução Máxima": "4K HDR",
      "Conectividade": "Wi-Fi, Ethernet, Bluetooth",
      "Garantia": "12 meses"
    },
    "Móveis": {
      "Material": "Alta qualidade",
      "Suporte de Peso": "Conforme especificação",
      "Ajustes": "Conforme modelo",
      "Garantia": "12 meses"
    }
  };

  return especificacoesPadrao[produto.categoria] || {
    "Garantia": "12 meses",
    "Condições": "Novo e lacrado"
  };
}

// Função para abrir modal de produto
function abrirModalProduto(produto) {
  const modal = document.getElementById("modal-produto");
  const modalBody = document.getElementById("modal-produto-body");
  
  if (!modal || !modalBody) {
    return;
  }

  // Gerar especificações (usar as do produto ou padrão)
  const especificacoes = produto.especificacoes || gerarEspecificacoesPadrao(produto);
  const descricao = produto.descricao || `${produto.nome} da categoria ${produto.categoria}. Produto de alta qualidade com garantia de satisfação.`;

  // Criar HTML do modal
  let especificacoesHTML = "";
  for (const [chave, valor] of Object.entries(especificacoes)) {
    especificacoesHTML += `
      <div class="especificacao-item">
        <span class="especificacao-label">${chave}:</span>
        <span class="especificacao-valor">${valor}</span>
      </div>
    `;
  }

  modalBody.innerHTML = `
    <div class="produto-detalhes-container">
      <div class="produto-detalhes-imagem">
        <img src="${produto.imagem}" alt="${produto.nome}">
      </div>
      <div class="produto-detalhes-info">
        <h1 class="produto-detalhes-titulo">${produto.nome}</h1>
        <div class="produto-detalhes-categoria">${produto.categoria}</div>
        <div class="produto-detalhes-preco">
          <small>R$</small>${produto.preco.toFixed(2).replace(".", ",")}
        </div>
        <p class="produto-detalhes-descricao">${descricao}</p>
        
        <div class="produto-detalhes-especificacoes">
          <h3>📋 Especificações Técnicas</h3>
          ${especificacoesHTML}
        </div>
        
        <div class="produto-detalhes-acoes">
          <button class="btn-adicionar-produto-modal" data-produto-nome="${produto.nome.replace(/"/g, '&quot;')}">
            🛒 Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  `;

  modal.style.display = "flex";
  modal.style.alignItems = "center";
  modal.style.justifyContent = "center";
  document.body.style.overflow = "hidden";

  // Adicionar evento ao botão de adicionar ao carrinho
  const btnAdicionar = modalBody.querySelector(".btn-adicionar-produto-modal");
  if (btnAdicionar) {
    btnAdicionar.addEventListener("click", () => {
      adicionarAoCarrinhoModal(produto);
    });
  }
}

// Função para fechar modal de produto
function fecharModalProduto() {
  const modal = document.getElementById("modal-produto");
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = "";
  }
}

// Função para adicionar ao carrinho do modal
function adicionarAoCarrinhoModal(produto) {
  if (!produto) return;
  
  adicionarAoCarrinho(produto);
  
  // Feedback visual no botão do modal
  const botao = document.querySelector(".btn-adicionar-produto-modal");
  if (botao) {
    botao.textContent = "✓ Adicionado ao Carrinho!";
    botao.classList.add("adicionado");
    
    setTimeout(() => {
      botao.textContent = "🛒 Adicionar ao Carrinho";
      botao.classList.remove("adicionado");
    }, 2000);
  }
}

// Event listeners do modal de produto
if (btnFecharProduto) {
  btnFecharProduto.addEventListener("click", fecharModalProduto);
}

if (modalProduto) {
  modalProduto.addEventListener("click", (e) => {
    if (e.target === modalProduto) {
      fecharModalProduto();
    }
  });
}

// ======== ANIMAÇÃO DE COMPRA FINALIZADA ========

// Função para criar animação de confetti
function criarConfetti() {
  const canvas = document.getElementById("confetti-canvas");
  if (!canvas) return;
  
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const confetti = [];
  const colors = ['#8b5cf6', '#7c3aed', '#6d28d9', '#10b981', '#059669', '#fbbf24', '#f59e0b'];
  const confettiCount = 150;
  
  for (let i = 0; i < confettiCount; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: -Math.random() * canvas.height,
      r: Math.random() * 4 + 2,
      d: Math.random() * confettiCount,
      color: colors[Math.floor(Math.random() * colors.length)],
      tilt: Math.floor(Math.random() * 10) - 10,
      tiltAngleIncrement: Math.random() * 0.07 + 0.05,
      tiltAngle: 0
    });
  }
  
  let animationId;
  let startTime = Date.now();
  const duration = 3000; // 3 segundos
  
  function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const elapsed = Date.now() - startTime;
    if (elapsed > duration) {
      cancelAnimationFrame(animationId);
      return;
    }
    
    confetti.forEach((c, i) => {
      ctx.beginPath();
      ctx.lineWidth = c.r / 2;
      ctx.strokeStyle = c.color;
      ctx.moveTo(c.x, c.y);
      ctx.lineTo(c.x + c.tilt + c.r, c.y + c.tilt + c.r / 2);
      ctx.stroke();
      
      c.tiltAngle += c.tiltAngleIncrement;
      c.y += Math.cos(c.d) + 3 + c.r / 2;
      c.x += Math.sin(c.d) - 0.5;
      c.tilt = Math.sin(c.tiltAngle - i / 3) * 15;
      
      if (c.y > canvas.height) {
        c.x = Math.random() * canvas.width;
        c.y = -10;
        c.tilt = Math.floor(Math.random() * 10) - 20;
      }
    });
    
    animationId = requestAnimationFrame(drawConfetti);
  }
  
  drawConfetti();
  
  // Limpar canvas após animação
  setTimeout(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, duration);
  
  // Atualizar tamanho do canvas quando a janela é redimensionada
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// Função para mostrar modal de confirmação
function mostrarModalConfirmacao() {
  const modalConfirmar = document.getElementById("modal-confirmar-compra");
  const confirmarResumo = document.getElementById("confirmar-resumo");
  const confirmarValorTotal = document.getElementById("confirmar-valor-total");
  const btnFecharConfirmar = document.getElementById("fechar-confirmar-compra");
  const btnCancelar = document.getElementById("cancelar-compra");
  const btnConfirmar = document.getElementById("confirmar-compra-btn");
  
  if (!modalConfirmar) {
    // Fallback - ir direto para animação
    finalizarCompraComAnimacao();
    return;
  }
  
  // Calcular totais
  const total = calcularTotal();
  const totalItens = carrinho.reduce((total, item) => total + item.quantidade, 0);
  
  // Atualizar valor total
  if (confirmarValorTotal) {
    confirmarValorTotal.textContent = `R$ ${total.toFixed(2).replace(".", ",")}`;
  }
  
  // Criar resumo dos itens
  if (confirmarResumo) {
    if (carrinho.length === 0) {
      confirmarResumo.innerHTML = "<p style='color: rgba(255,255,255,0.7); text-align: center;'>Nenhum item no carrinho</p>";
    } else {
      confirmarResumo.innerHTML = carrinho.map(item => `
        <div class="confirmar-item">
          <div class="confirmar-item-info">
            <div class="confirmar-item-nome">${item.nome}</div>
            <div class="confirmar-item-detalhes">Quantidade: ${item.quantidade}x</div>
          </div>
          <div class="confirmar-item-preco">R$ ${(item.preco * item.quantidade).toFixed(2).replace(".", ",")}</div>
        </div>
      `).join("");
    }
  }
  
  // Mostrar conteúdo inicial (PIX por padrão)
  atualizarDetalhesPagamento('pix', total);
  
  // Adicionar event listeners para mudança de método de pagamento
  const metodosInput = document.querySelectorAll('input[name="metodo-pagamento"]');
  metodosInput.forEach(input => {
    input.addEventListener('change', function() {
      atualizarDetalhesPagamento(this.value, total);
    });
  });
  
  // Mostrar modal
  modalConfirmar.style.display = "flex";
  modalConfirmar.style.alignItems = "center";
  modalConfirmar.style.justifyContent = "center";
  document.body.style.overflow = "hidden";
  
  // Função para fechar modal de confirmação
  function fecharModalConfirmacao() {
    modalConfirmar.style.display = "none";
    document.body.style.overflow = "";
  }
  
  // Event listeners
  if (btnFecharConfirmar) {
    btnFecharConfirmar.onclick = fecharModalConfirmacao;
  }
  
  if (btnCancelar) {
    btnCancelar.onclick = fecharModalConfirmacao;
  }
  
  if (btnConfirmar) {
    btnConfirmar.onclick = function() {
      // Obter método de pagamento selecionado
      const metodoSelecionado = document.querySelector('input[name="metodo-pagamento"]:checked');
      const metodo = metodoSelecionado ? metodoSelecionado.value : 'pix';
      
      // Validar dados do formulário conforme método
      if (metodo === 'cartao') {
        const nomeCartao = document.getElementById("nome-cartao");
        const numeroCartao = document.getElementById("numero-cartao");
        const validadeCartao = document.getElementById("validade-cartao");
        const cvvCartao = document.getElementById("cvv-cartao");
        
        if (!nomeCartao || !nomeCartao.value.trim()) {
          alert("Por favor, preencha o nome no cartão.");
          nomeCartao?.focus();
          return;
        }
        if (!numeroCartao || numeroCartao.value.replace(/\s/g, "").length < 13) {
          alert("Por favor, preencha o número do cartão corretamente.");
          numeroCartao?.focus();
          return;
        }
        if (!validadeCartao || validadeCartao.value.length !== 5) {
          alert("Por favor, preencha a validade do cartão (MM/AA).");
          validadeCartao?.focus();
          return;
        }
        if (!cvvCartao || cvvCartao.value.length < 3) {
          alert("Por favor, preencha o CVV do cartão.");
          cvvCartao?.focus();
          return;
        }
      } else if (metodo === 'boleto') {
        const cpfBoleto = document.getElementById("cpf-boleto");
        const nomeBoleto = document.getElementById("nome-boleto");
        const emailBoleto = document.getElementById("email-boleto");
        
        if (!cpfBoleto || !cpfBoleto.value.replace(/\D/g, "")) {
          alert("Por favor, preencha o CPF/CNPJ.");
          cpfBoleto?.focus();
          return;
        }
        if (!nomeBoleto || !nomeBoleto.value.trim()) {
          alert("Por favor, preencha o nome completo.");
          nomeBoleto?.focus();
          return;
        }
        if (!emailBoleto || !emailBoleto.value.includes("@")) {
          alert("Por favor, preencha um e-mail válido.");
          emailBoleto?.focus();
          return;
        }
      }
      
      fecharModalConfirmacao();
      // Aguardar um pouco antes de mostrar animação
      setTimeout(() => {
        finalizarCompraComAnimacao(metodo);
      }, 300);
    };
  }
  
  // Fechar ao clicar fora
  modalConfirmar.onclick = function(e) {
    if (e.target === modalConfirmar) {
      fecharModalConfirmacao();
    }
  };
  
  // Fechar com ESC
  function handleEscKey(e) {
    if (e.key === "Escape" && modalConfirmar.style.display === "flex") {
      fecharModalConfirmacao();
      document.removeEventListener("keydown", handleEscKey);
    }
  }
  document.addEventListener("keydown", handleEscKey);
}

// Função para gerar QR Code do PIX
function gerarQRCodePIX(chavePix, valor) {
  // Gerar QR Code com a chave PIX e valor
  // Usando API pública de QR Code (formato simples para demonstração)
  const valorFormatado = valor.toFixed(2);
  // Criar string PIX simplificada (para demo - em produção use biblioteca oficial)
  const dadosPix = `PIX:${chavePix}|VALOR:${valorFormatado}`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(dadosPix)}&bgcolor=FFFFFF&color=000000&margin=1`;
  return qrCodeUrl;
}

// Função para atualizar detalhes do pagamento conforme método selecionado
function atualizarDetalhesPagamento(metodo, valorTotal) {
  const detalhesPagamento = document.getElementById("detalhes-pagamento");
  if (!detalhesPagamento) return;
  
  const chavePix = "41991259003";
  
  if (metodo === 'pix') {
    const qrCodeUrl = gerarQRCodePIX(chavePix, valorTotal);
    detalhesPagamento.innerHTML = `
      <div class="pix-container">
        <h4 style="color: #ffffff; margin-bottom: 20px; font-size: 1.2rem;">Escaneie o QR Code ou copie a chave PIX</h4>
        <div class="pix-qrcode">
          <img src="${qrCodeUrl}" alt="QR Code PIX" onerror="this.src='https://via.placeholder.com/250x250/8b5cf6/ffffff?text=QR+Code+PIX'">
        </div>
        <div class="pix-chave">
          <span class="pix-chave-label">Chave PIX:</span>
          <div class="pix-chave-valor" id="chave-pix-texto">
            ${chavePix}
            <button class="btn-copiar-pix" onclick="copiarChavePix()">📋 Copiar</button>
          </div>
        </div>
        <p style="color: rgba(255, 255, 255, 0.7); font-size: 0.85rem; margin-top: 15px;">
          Após o pagamento, sua compra será confirmada automaticamente.
        </p>
      </div>
    `;
  } else if (metodo === 'cartao') {
    detalhesPagamento.innerHTML = `
      <div class="form-pagamento">
        <h4 style="color: #ffffff; margin-bottom: 15px; font-size: 1.2rem;">💳 Dados do Cartão</h4>
        <div class="form-group">
          <label class="form-label">Nome no Cartão</label>
          <input type="text" class="form-input" id="nome-cartao" placeholder="Nome completo" required>
        </div>
        <div class="form-group">
          <label class="form-label">Número do Cartão</label>
          <input type="text" class="form-input" id="numero-cartao" placeholder="0000 0000 0000 0000" maxlength="19" required>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Validade</label>
            <input type="text" class="form-input" id="validade-cartao" placeholder="MM/AA" maxlength="5" required>
          </div>
          <div class="form-group">
            <label class="form-label">CVV</label>
            <input type="text" class="form-input" id="cvv-cartao" placeholder="123" maxlength="4" required>
          </div>
        </div>
        <div class="form-group form-row-full">
          <label class="form-label">Parcelas</label>
          <select class="form-input" id="parcelas-cartao" required>
            <option value="1">1x de R$ ${valorTotal.toFixed(2).replace(".", ",")} sem juros</option>
            ${valorTotal >= 100 ? `<option value="2">2x de R$ ${(valorTotal / 2).toFixed(2).replace(".", ",")} sem juros</option>` : ''}
            ${valorTotal >= 150 ? `<option value="3">3x de R$ ${(valorTotal / 3).toFixed(2).replace(".", ",")} sem juros</option>` : ''}
            ${valorTotal >= 200 ? `<option value="4">4x de R$ ${(valorTotal / 4).toFixed(2).replace(".", ",")} sem juros</option>` : ''}
            ${valorTotal >= 300 ? `<option value="6">6x de R$ ${(valorTotal / 6).toFixed(2).replace(".", ",")} sem juros</option>` : ''}
            ${valorTotal >= 500 ? `<option value="12">12x de R$ ${(valorTotal / 12).toFixed(2).replace(".", ",")} sem juros</option>` : ''}
          </select>
        </div>
        <p style="color: rgba(255, 255, 255, 0.7); font-size: 0.85rem; margin-top: 10px;">
          🔒 Seus dados estão seguros e criptografados.
        </p>
      </div>
    `;
    
    // Máscaras para os campos
    const numeroCartao = document.getElementById("numero-cartao");
    if (numeroCartao) {
      numeroCartao.addEventListener("input", function(e) {
        let value = e.target.value.replace(/\D/g, "");
        value = value.match(/.{1,4}/g)?.join(" ") || value;
        e.target.value = value;
      });
    }
    
    const validadeCartao = document.getElementById("validade-cartao");
    if (validadeCartao) {
      validadeCartao.addEventListener("input", function(e) {
        let value = e.target.value.replace(/\D/g, "");
        if (value.length >= 2) {
          value = value.substring(0, 2) + "/" + value.substring(2, 4);
        }
        e.target.value = value;
      });
    }
    
    const cvvCartao = document.getElementById("cvv-cartao");
    if (cvvCartao) {
      cvvCartao.addEventListener("input", function(e) {
        e.target.value = e.target.value.replace(/\D/g, "");
      });
    }
  } else if (metodo === 'boleto') {
    const vencimento = new Date();
    vencimento.setDate(vencimento.getDate() + 3);
    const vencimentoFormatado = vencimento.toLocaleDateString('pt-BR');
    
    detalhesPagamento.innerHTML = `
      <div class="form-pagamento">
        <h4 style="color: #ffffff; margin-bottom: 15px; font-size: 1.2rem;">📄 Dados para Boleto</h4>
        <div class="form-group">
          <label class="form-label">CPF/CNPJ</label>
          <input type="text" class="form-input" id="cpf-boleto" placeholder="000.000.000-00" required>
        </div>
        <div class="form-group">
          <label class="form-label">Nome Completo</label>
          <input type="text" class="form-input" id="nome-boleto" placeholder="Nome completo" required>
        </div>
        <div class="form-group">
          <label class="form-label">E-mail</label>
          <input type="email" class="form-input" id="email-boleto" placeholder="seu@email.com" required>
        </div>
        <div style="background: rgba(139, 92, 246, 0.2); border: 1px solid rgba(139, 92, 246, 0.4); border-radius: 8px; padding: 15px; margin-top: 15px;">
          <p style="color: #ffffff; margin: 0; font-size: 0.9rem;">
            <strong>📅 Vencimento:</strong> ${vencimentoFormatado}
          </p>
          <p style="color: rgba(255, 255, 255, 0.8); margin: 8px 0 0 0; font-size: 0.85rem;">
            O boleto será enviado para o e-mail informado após a confirmação da compra.
          </p>
        </div>
      </div>
    `;
    
    // Máscara para CPF/CNPJ
    const cpfBoleto = document.getElementById("cpf-boleto");
    if (cpfBoleto) {
      cpfBoleto.addEventListener("input", function(e) {
        let value = e.target.value.replace(/\D/g, "");
        if (value.length <= 11) {
          value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
        } else {
          value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
        }
        e.target.value = value;
      });
    }
  }
}

// Função para copiar chave PIX
function copiarChavePix() {
  const chavePix = "41991259003";
  navigator.clipboard.writeText(chavePix).then(() => {
    const btn = document.querySelector(".btn-copiar-pix");
    if (btn) {
      const textoOriginal = btn.textContent;
      btn.textContent = "✓ Copiado!";
      btn.style.background = "rgba(16, 185, 129, 0.5)";
      setTimeout(() => {
        btn.textContent = textoOriginal;
        btn.style.background = "";
      }, 2000);
    }
  }).catch(() => {
    alert("Chave PIX: " + chavePix);
  });
}

// Tornar função acessível globalmente
window.copiarChavePix = copiarChavePix;

// Função para finalizar compra com animação
function finalizarCompraComAnimacao(metodoPagamento = 'pix') {
  const modalCompra = document.getElementById("modal-compra-finalizada");
  const compraMensagem = document.getElementById("compra-mensagem");
  const compraDetalhes = document.getElementById("compra-detalhes");
  const btnFecharCompra = document.getElementById("fechar-compra-finalizada");
  
  if (!modalCompra) {
    // Fallback caso o modal não exista
    alert(`✅ Compra finalizada!\n\nTotal: ${carrinhoTotal.textContent}\n\nObrigado pela compra! 🎉`);
    carrinho = [];
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    atualizarContadorCarrinho();
    renderizarCarrinho();
    fecharCarrinho();
    return;
  }
  
  // Calcular informações da compra
  const totalItens = carrinho.reduce((total, item) => total + item.quantidade, 0);
  const total = calcularTotal();
  
  // Definir ícones e mensagens por método de pagamento
  const metodosInfo = {
    'pix': {
      icone: '🧾',
      nome: 'PIX',
      mensagem: 'Pagamento via PIX',
      status: 'Aprovação instantânea'
    },
    'cartao': {
      icone: '💳',
      nome: 'Cartão de Crédito',
      mensagem: 'Pagamento via Cartão',
      status: 'Processando pagamento...'
    },
    'boleto': {
      icone: '📄',
      nome: 'Boleto Bancário',
      mensagem: 'Boleto gerado',
      status: 'Vencimento em 3 dias úteis'
    }
  };
  
  const infoMetodo = metodosInfo[metodoPagamento] || metodosInfo['pix'];
  
  // Atualizar mensagem e detalhes
  if (compraMensagem) {
    compraMensagem.textContent = "Obrigado pela sua compra! 🎉";
  }
  
  if (compraDetalhes) {
    compraDetalhes.innerHTML = `
      <p><strong>Itens comprados:</strong> ${totalItens}</p>
      <p><strong>Total:</strong> ${carrinhoTotal.textContent}</p>
      <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid rgba(139, 92, 246, 0.3);">
        <p style="font-size: 0.95rem; opacity: 0.9; margin-bottom: 8px;">
          <strong>${infoMetodo.icone} ${infoMetodo.mensagem}</strong>
        </p>
        <p style="font-size: 0.85rem; opacity: 0.7; margin: 0;">
          ${infoMetodo.status}
        </p>
      </div>
    `;
  }
  
  // Fechar modal do carrinho primeiro
  fecharCarrinho();
  
  // Mostrar modal de compra finalizada
  setTimeout(() => {
    modalCompra.style.display = "flex";
    modalCompra.style.alignItems = "center";
    modalCompra.style.justifyContent = "center";
    document.body.style.overflow = "hidden";
    
    // Iniciar animação de confetti
    criarConfetti();
    
    // Limpar carrinho
    carrinho = [];
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    atualizarContadorCarrinho();
    renderizarCarrinho();
  }, 300);
  
  // Função para fechar modal de compra
  function fecharModalCompra() {
    modalCompra.style.display = "none";
    document.body.style.overflow = "";
  }
  
  // Event listener para fechar o modal
  if (btnFecharCompra) {
    btnFecharCompra.addEventListener("click", fecharModalCompra);
  }
  
  // Fechar ao clicar fora do modal
  modalCompra.addEventListener("click", function(e) {
    if (e.target === modalCompra) {
      fecharModalCompra();
    }
  });
  
  // Fechar com ESC
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && modalCompra.style.display === "flex") {
      fecharModalCompra();
    }
  });
}

function carregarProdutos(categoriaSelecionada = "all") {
  if (!lista) return;
  
  lista.innerHTML = "";

  // Filtrar produtos por categoria
  const produtosFiltrados = categoriaSelecionada === "all" 
    ? produtos 
    : produtos.filter(p => p.categoria === categoriaSelecionada);

  // Agrupar por categoria
  const produtosPorCategoria = {};
  produtosFiltrados.forEach(produto => {
    if (!produtosPorCategoria[produto.categoria]) {
      produtosPorCategoria[produto.categoria] = [];
    }
    produtosPorCategoria[produto.categoria].push(produto);
  });

  // Renderizar por categoria
  Object.keys(produtosPorCategoria).forEach(categoria => {
    // Título da categoria
    const tituloCategoria = document.createElement("h2");
    tituloCategoria.classList.add("titulo-categoria");
    tituloCategoria.textContent = categoria;
    lista.appendChild(tituloCategoria);

    // Container da categoria
    const containerCategoria = document.createElement("div");
    containerCategoria.classList.add("categoria-produtos");

    produtosPorCategoria[categoria].forEach(produto => {
    const item = document.createElement("div");
    item.classList.add("produto");
      item.dataset.categoria = produto.categoria;

      const img = document.createElement("img");
      img.src = produto.imagem;
      img.alt = produto.nome;
      img.loading = "lazy";

    item.innerHTML = `
      <h2>${produto.nome}</h2>
        <p>R$ ${produto.preco.toFixed(2).replace(".", ",")}</p>
        <button class="add-carrinho">➕ Adicionar ao Carrinho</button>
    `;
      
      item.insertBefore(img, item.firstChild);

    // Evento para abrir modal ao clicar no card (exceto no botão)
    item.addEventListener("click", function(e) {
      // Verificar se o clique foi no botão ou em elementos dentro do botão
      const clickedButton = e.target.closest(".add-carrinho");
      const isButton = e.target.classList.contains("add-carrinho") || clickedButton !== null;
      
      if (!isButton) {
        e.preventDefault();
        e.stopPropagation();
        abrirModalProduto(produto);
      }
    });
    
    // Adicionar cursor pointer em todos os elementos clicáveis exceto o botão
    const elementosClicaveis = item.querySelectorAll("*:not(.add-carrinho):not(button)");
    elementosClicaveis.forEach(el => {
      el.style.cursor = "pointer";
    });

    // Estilo de cursor pointer para indicar que é clicável
    item.style.cursor = "pointer";

    const botao = item.querySelector(".add-carrinho");
    botao.addEventListener("click", (e) => {
      e.stopPropagation(); // Evitar abrir modal ao clicar no botão
      adicionarAoCarrinho(produto);
        
        // Feedback visual
        botao.textContent = "✓ Adicionado!";
        botao.style.background = "linear-gradient(135deg, #10b981 0%, #059669 100%)";
        
        setTimeout(() => {
          botao.textContent = "➕ Adicionar ao Carrinho";
          botao.style.background = "";
        }, 1500);
      });

      containerCategoria.appendChild(item);
    });

    lista.appendChild(containerCategoria);
  });
}

// Event listeners para filtros
if (filtrosCheckbox && filtrosCheckbox.length > 0) {
filtrosCheckbox.forEach(checkbox => {
  checkbox.addEventListener("change", function() {
    if (this.value === "all") {
      // Se "Todos" for selecionado, desmarcar os outros
      if (this.checked) {
        filtrosCheckbox.forEach(cb => {
          if (cb.value !== "all") cb.checked = false;
        });
        categoriaFiltro = "all";
      }
    } else {
      // Se uma categoria específica for selecionada, desmarcar "Todos"
      if (this.checked) {
        document.querySelector('.filtro-checkbox[value="all"]').checked = false;
        categoriaFiltro = this.value;
      } else {
        // Se nenhuma categoria estiver selecionada, selecionar "Todos"
        const algumSelecionado = Array.from(filtrosCheckbox).some(cb => cb.checked && cb.value !== "all");
        if (!algumSelecionado) {
          document.querySelector('.filtro-checkbox[value="all"]').checked = true;
          categoriaFiltro = "all";
        }
      }
    }
    
    carregarProdutos(categoriaFiltro);
  });
});
}

// Botão limpar filtros
if (btnLimparFiltros) {
  btnLimparFiltros.addEventListener("click", () => {
    filtrosCheckbox.forEach(cb => {
      if (cb.value === "all") {
        cb.checked = true;
      } else {
        cb.checked = false;
      }
    });
    categoriaFiltro = "all";
    carregarProdutos(categoriaFiltro);
  });
  
  // Carregar produtos inicialmente
  carregarProdutos();
} else {
  // Se o botão não existir ainda, aguardar DOM e carregar
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => carregarProdutos(), 100);
    });
  } else {
    setTimeout(() => carregarProdutos(), 100);
  }
}

// ======== BOTÃO DE ALTERNAR TEMA ========
const btnTema = document.getElementById("toggle-tema");
const body = document.body;

// Verificar tema salvo
if (btnTema) {
  const temaSalvo = localStorage.getItem("tema");
  if (temaSalvo === "claro") {
    body.classList.add("tema-claro");
    btnTema.textContent = "☀️";
  } else {
    btnTema.textContent = "🌙";
  }
}

// Alternar tema com animação suave
if (btnTema) {
  btnTema.addEventListener("click", function() {
    // Prevenir múltiplos cliques durante animação
    if (body.classList.contains("animando-tema")) {
      return;
    }
    
    // Adicionar classe de animação
    body.classList.add("animando-tema");
    
    // Toggle do tema
    body.classList.toggle("tema-claro");
    
    // Atualizar ícone e salvar preferência
    if (body.classList.contains("tema-claro")) {
      btnTema.textContent = "☀️";
      localStorage.setItem("tema", "claro");
    } else {
      btnTema.textContent = "🌙";
      localStorage.setItem("tema", "escuro");
    }
    
    // Animação do botão (rotação)
    btnTema.style.transform = "rotate(360deg) scale(1.15)";
    btnTema.style.transition = "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
    
    // Remover classe de animação e resetar botão após transição
    setTimeout(() => {
      body.classList.remove("animando-tema");
      btnTema.style.transform = "";
      btnTema.style.transition = "";
    }, 600);
  });
}

// ======== BANNER CARROSSEL FIXO DE PROPAGANDA ========
document.addEventListener("DOMContentLoaded", function() {
  const btnAnterior = document.getElementById("btn-anterior");
  const btnProximo = document.getElementById("btn-proximo");
  const slides = document.querySelectorAll(".carrossel-slide");
  const indicadores = document.querySelectorAll(".indicador");
  let slideAtual = 0;
  let intervaloCarrossel = null;

  // Verificar se os elementos existem
  if (!btnAnterior || !btnProximo || !slides || slides.length === 0) {
    return;
  }

  // Função para mostrar slide
  function mostrarSlide(index) {
    if (!slides || slides.length === 0) return;
    
    // Garantir que o índice está dentro dos limites
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
    
    if (indicadores && indicadores.length > 0) {
      indicadores.forEach((indicador, i) => {
        indicador.classList.toggle("active", i === index);
      });
    }
    
    slideAtual = index;
  }

  // Resetar auto-play ao interagir
  function resetAutoPlay() {
    if (intervaloCarrossel) {
      clearInterval(intervaloCarrossel);
      intervaloCarrossel = null;
    }
    intervaloCarrossel = setInterval(() => {
      if (slides && slides.length > 0) {
        slideAtual = (slideAtual + 1) % slides.length;
        mostrarSlide(slideAtual);
      }
    }, 5000);
  }

  // Próximo slide
  btnProximo.addEventListener("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (slides && slides.length > 0) {
      slideAtual = (slideAtual + 1) % slides.length;
      mostrarSlide(slideAtual);
      resetAutoPlay();
    }
  });

  // Slide anterior
  btnAnterior.addEventListener("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (slides && slides.length > 0) {
      slideAtual = (slideAtual - 1 + slides.length) % slides.length;
      mostrarSlide(slideAtual);
      resetAutoPlay();
    }
  });

  // Indicadores clicáveis
  if (indicadores && indicadores.length > 0) {
    indicadores.forEach((indicador, index) => {
      indicador.addEventListener("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        slideAtual = index;
        mostrarSlide(slideAtual);
        resetAutoPlay();
      });
    });
  }

  // Inicializar primeiro slide
  mostrarSlide(0);
  
  // Auto-play do carrossel
  resetAutoPlay();
});

// ======== BOTÃO DE LOGIN NO HEADER ========
const btnLoginHeader = document.getElementById("btn-login-header");
if (btnLoginHeader) {
  btnLoginHeader.addEventListener("click", function() {
    window.location.href = "login.html";
  });
}
