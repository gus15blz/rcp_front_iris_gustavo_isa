// ======== PÁGINA DE LOGIN ========

// Elementos do formulário
const loginForm = document.getElementById("login-form");
const togglePassword = document.getElementById("toggle-password");
const senhaInput = document.getElementById("senha");
const btnLogin = document.getElementById("btn-login");

// Toggle mostrar/ocultar senha
if (togglePassword && senhaInput) {
  togglePassword.addEventListener("click", function() {
    if (senhaInput.type === "password") {
      senhaInput.type = "text";
      togglePassword.textContent = "🙈";
    } else {
      senhaInput.type = "password";
      togglePassword.textContent = "👁️";
    }
  });
}

// Validação e submissão do formulário
if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const lembrar = document.getElementById("lembrar").checked;
    
    // Validação básica
    if (!email || !senha) {
      mostrarErro("Por favor, preencha todos os campos.");
      return;
    }
    
    if (!validarEmail(email)) {
      mostrarErro("Por favor, insira um e-mail válido.");
      return;
    }
    
    // Simular loading
    btnLogin.classList.add("loading");
    btnLogin.disabled = true;
    
    // Simular requisição de login (em produção, isso seria uma chamada à API)
    setTimeout(() => {
      // Simular login bem-sucedido
      mostrarSucesso("Login realizado com sucesso!");
      
      // Salvar preferência de lembrar
      if (lembrar) {
        localStorage.setItem("lembrarUsuario", "true");
        localStorage.setItem("emailUsuario", email);
      } else {
        localStorage.removeItem("lembrarUsuario");
        localStorage.removeItem("emailUsuario");
      }
      
      // Redirecionar após sucesso
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1500);
    }, 1500);
  });
}

// Função para validar e-mail
function validarEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Função para mostrar erro
function mostrarErro(mensagem) {
  // Remover mensagens anteriores
  const erroAnterior = document.querySelector(".mensagem-erro");
  if (erroAnterior) {
    erroAnterior.remove();
  }
  
  const erroDiv = document.createElement("div");
  erroDiv.className = "mensagem-erro";
  erroDiv.textContent = mensagem;
  erroDiv.style.cssText = `
    background: rgba(239, 68, 68, 0.2);
    border: 2px solid rgba(239, 68, 68, 0.5);
    color: #fca5a5;
    padding: 15px;
    border-radius: 12px;
    margin-bottom: 20px;
    text-align: center;
    font-weight: 600;
    animation: shake 0.5s ease;
  `;
  
  loginForm.insertBefore(erroDiv, loginForm.firstChild);
  
  // Remover após 5 segundos
  setTimeout(() => {
    erroDiv.style.animation = "fadeOut 0.3s ease";
    setTimeout(() => erroDiv.remove(), 300);
  }, 5000);
}

// Função para mostrar sucesso
function mostrarSucesso(mensagem) {
  const sucessoDiv = document.createElement("div");
  sucessoDiv.className = "mensagem-sucesso";
  sucessoDiv.textContent = mensagem;
  sucessoDiv.style.cssText = `
    background: rgba(16, 185, 129, 0.2);
    border: 2px solid rgba(16, 185, 129, 0.5);
    color: #6ee7b7;
    padding: 15px;
    border-radius: 12px;
    margin-bottom: 20px;
    text-align: center;
    font-weight: 600;
    animation: fadeIn 0.5s ease;
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10000;
    min-width: 300px;
    box-shadow: 0 4px 20px rgba(16, 185, 129, 0.3);
  `;
  
  document.body.appendChild(sucessoDiv);
}

// Verificar se há email salvo para preencher automaticamente
window.addEventListener("DOMContentLoaded", function() {
  const lembrarUsuario = localStorage.getItem("lembrarUsuario");
  const emailSalvo = localStorage.getItem("emailUsuario");
  
  if (lembrarUsuario === "true" && emailSalvo) {
    const emailInput = document.getElementById("email");
    const lembrarCheckbox = document.getElementById("lembrar");
    
    if (emailInput) {
      emailInput.value = emailSalvo;
    }
    
    if (lembrarCheckbox) {
      lembrarCheckbox.checked = true;
    }
  }
});

// Adicionar CSS para animações de erro/sucesso via JavaScript
const style = document.createElement("style");
style.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    75% { transform: translateX(10px); }
  }
  
  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }
`;
document.head.appendChild(style);
