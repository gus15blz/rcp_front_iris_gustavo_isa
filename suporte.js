// ======== FAQ - Accordion ========
document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const pergunta = item.querySelector('.faq-pergunta');
    
    pergunta.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Fecha todos os itens
      faqItems.forEach(faqItem => {
        faqItem.classList.remove('active');
      });
      
      // Abre o item clicado se não estava ativo
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
});

// ======== CHATBOT ========
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotSendBtn = document.getElementById('chatbot-send');
const suggestionButtons = document.querySelectorAll('.suggestion-btn');

// Base de conhecimento do chatbot
const chatbotKnowledge = {
  saudações: {
    patterns: ['oi', 'olá', 'hello', 'hi', 'bom dia', 'boa tarde', 'boa noite', 'e aí'],
    responses: [
      'Olá! 👋 Como posso ajudá-lo hoje?',
      'Oi! 😊 Em que posso auxiliá-lo?',
      'Bem-vindo! Como posso ajudar?'
    ]
  },
  despedidas: {
    patterns: ['tchau', 'até logo', 'obrigado', 'valeu', 'ok', 'tudo certo'],
    responses: [
      'De nada! Fico feliz em ajudar. Qualquer outra dúvida, estou aqui! 😊',
      'Por nada! Se precisar de mais alguma coisa, só chamar! 👍',
      'Foi um prazer ajudar! Volte sempre! 🎉'
    ]
  },
  pedido: {
    patterns: ['pedido', 'comprar', 'como comprar', 'como fazer pedido', 'adicionar ao carrinho'],
    responses: [
      'Para fazer um pedido, navegue pelos produtos, adicione os itens ao carrinho e clique em "Finalizar Compra". Você poderá escolher entre PIX, Cartão ou Boleto. 🛒',
      'É simples! Escolha os produtos, adicione ao carrinho e finalize a compra. Aceitamos PIX, Cartão de Crédito e Boleto Bancário. 💳'
    ]
  },
  entrega: {
    patterns: ['entrega', 'prazo', 'demora', 'quanto tempo', 'frete', 'envio'],
    responses: [
      'O prazo de entrega varia de 5 a 12 dias úteis, dependendo do método de pagamento e região. Para PIX e Cartão: 5-10 dias. Para Boleto: 8-12 dias após confirmação. 📦',
      'Nossos prazos são: PIX/Cartão (5-10 dias) e Boleto (8-12 dias úteis após confirmação). Oferecemos frete grátis para compras acima de R$ 299! 🚚'
    ]
  },
  pagamento: {
    patterns: ['pagamento', 'pix', 'cartão', 'boleto', 'forma de pagamento', 'como pagar', 'aceita'],
    responses: [
      'Aceitamos PIX (aprovação instantânea), Cartão de Crédito (até 12x sem juros) e Boleto Bancário (vencimento em 3 dias). Todos os pagamentos são seguros! 💳',
      'Você pode pagar com: PIX (rápido!), Cartão (parcelado em até 12x) ou Boleto. Escolha a opção que preferir na finalização da compra! 🎯'
    ]
  },
  garantia: {
    patterns: ['garantia', 'troca', 'devolução', 'defeito', 'problema'],
    responses: [
      'Todos os produtos têm garantia de fábrica (geralmente 12 meses). Você também pode trocar ou devolver em até 7 dias após o recebimento, desde que o produto esteja na embalagem original. 🔧',
      'Oferecemos garantia de fábrica e você tem 7 dias para troca/devolução após o recebimento. O produto deve estar na embalagem original e sem uso. ✅'
    ]
  },
  rastreamento: {
    patterns: ['rastrear', 'rastreamento', 'código', 'onde está', 'status'],
    responses: [
      'Após o envio, você receberá um e-mail com o código de rastreamento. Você pode acompanhar seu pedido através do link enviado. 📍',
      'Quando seu pedido for enviado, você receberá um e-mail com o código de rastreamento para acompanhar a entrega em tempo real! 📬'
    ]
  },
  frete: {
    patterns: ['frete grátis', 'frete gratis', 'valor do frete', 'custo do frete'],
    responses: [
      'Oferecemos frete grátis para compras acima de R$ 299,00 em todo o Brasil! Para compras menores, o frete é calculado automaticamente no carrinho. 🆓',
      'Compre acima de R$ 299 e ganhe frete grátis! O cálculo do frete aparece automaticamente no carrinho de compras. 🚛'
    ]
  },
  contato: {
    patterns: ['contato', 'telefone', 'email', 'falar com', 'atendimento', 'suporte humano'],
    responses: [
      'Você pode entrar em contato pelo telefone (41) 99125-9003 ou e-mail contato@techstore.com.br. Nossa equipe está pronta para ajudar! 📞',
      'Entre em contato: (41) 99125-9003 ou contato@techstore.com.br. Estamos à sua disposição! 💬'
    ]
  },
  default: {
    responses: [
      'Desculpe, não entendi completamente. Pode reformular sua pergunta? Ou clique em uma das sugestões acima! 🤔',
      'Hmm, não tenho certeza sobre isso. Tente perguntar sobre pedidos, entregas, pagamentos ou garantias. Ou use as sugestões! 💡',
      'Não consegui entender. Que tal tentar uma dessas perguntas: "Como fazer um pedido?", "Qual o prazo de entrega?" ou "Quais formas de pagamento?"? 😊'
    ]
  }
};

// Função para encontrar a melhor resposta
function encontrarResposta(mensagem) {
  const mensagemLower = mensagem.toLowerCase().trim();
  
  // Verifica cada categoria
  for (const [categoria, dados] of Object.entries(chatbotKnowledge)) {
    if (categoria === 'default') continue;
    
    for (const pattern of dados.patterns) {
      if (mensagemLower.includes(pattern)) {
        const responses = dados.responses;
        return responses[Math.floor(Math.random() * responses.length)];
      }
    }
  }
  
  // Resposta padrão se não encontrar correspondência
  const defaultResponses = chatbotKnowledge.default.responses;
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// Função para adicionar mensagem do usuário
function adicionarMensagemUsuario(texto) {
  const messageDiv = document.createElement('div');
  messageDiv.className = 'message user-message';
  
  messageDiv.innerHTML = `
    <div class="message-avatar">👤</div>
    <div class="message-content">
      <p>${texto}</p>
    </div>
  `;
  
  chatbotMessages.appendChild(messageDiv);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Função para adicionar mensagem do bot
function adicionarMensagemBot(texto) {
  // Simula um pequeno delay para parecer mais natural
  setTimeout(() => {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message bot-message';
    
    messageDiv.innerHTML = `
      <div class="message-avatar">🤖</div>
      <div class="message-content">
        <p>${texto}</p>
      </div>
    `;
    
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }, 500);
}

// Função para processar mensagem
function processarMensagem(mensagem) {
  if (!mensagem.trim()) return;
  
  adicionarMensagemUsuario(mensagem);
  const resposta = encontrarResposta(mensagem);
  adicionarMensagemBot(resposta);
}

// Event listeners
if (chatbotSendBtn) {
  chatbotSendBtn.addEventListener('click', () => {
    const mensagem = chatbotInput.value.trim();
    if (mensagem) {
      processarMensagem(mensagem);
      chatbotInput.value = '';
      chatbotInput.focus();
    }
  });
}

if (chatbotInput) {
  chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const mensagem = chatbotInput.value.trim();
      if (mensagem) {
        processarMensagem(mensagem);
        chatbotInput.value = '';
      }
    }
  });
}

// Sugestões de perguntas
if (suggestionButtons) {
  suggestionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const query = btn.getAttribute('data-query');
      if (query) {
        processarMensagem(query);
      }
    });
  });
}

// Carrega o contador do carrinho se existir
document.addEventListener('DOMContentLoaded', function() {
  const contadorCarrinho = document.getElementById('contador-carrinho');
  if (contadorCarrinho) {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    contadorCarrinho.textContent = carrinho.length;
  }
  
  // Link do carrinho
  const btnCarrinho = document.getElementById('carrinho');
  if (btnCarrinho) {
    btnCarrinho.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  }
  
  // Link do login
  const btnLogin = document.getElementById('btn-login-header');
  if (btnLogin) {
    btnLogin.addEventListener('click', () => {
      window.location.href = 'login.html';
    });
  }
});

