// ======== PÁGINA DE CADASTRO ========

// Elementos do formulário
const cadastroForm = document.getElementById("cadastro-form");
const togglePasswordCadastro = document.getElementById("toggle-password-cadastro");
const toggleConfirmarSenha = document.getElementById("toggle-confirmar-senha");
const senhaCadastroInput = document.getElementById("senha-cadastro");
const confirmarSenhaInput = document.getElementById("confirmar-senha");
const btnCadastro = document.getElementById("btn-cadastro");
const telefoneInput = document.getElementById("telefone");
const cpfInput = document.getElementById("cpf");

// Toggle mostrar/ocultar senha (cadastro)
if (togglePasswordCadastro && senhaCadastroInput) {
  togglePasswordCadastro.addEventListener("click", function() {
    if (senhaCadastroInput.type === "password") {
      senhaCadastroInput.type = "text";
      togglePasswordCadastro.textContent = "🙈";
    } else {
      senhaCadastroInput.type = "password";
      togglePasswordCadastro.textContent = "👁️";
    }
  });
}

// Toggle mostrar/ocultar confirmar senha
if (toggleConfirmarSenha && confirmarSenhaInput) {
  toggleConfirmarSenha.addEventListener("click", function() {
    if (confirmarSenhaInput.type === "password") {
      confirmarSenhaInput.type = "text";
      toggleConfirmarSenha.textContent = "🙈";
    } else {
      confirmarSenhaInput.type = "password";
      toggleConfirmarSenha.textContent = "👁️";
    }
  });
}

// Máscara para telefone
if (telefoneInput) {
  telefoneInput.addEventListener("input", function(e) {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length <= 11) {
      if (value.length <= 10) {
        value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
      } else {
        value = value.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, "($1) $2-$3");
      }
      e.target.value = value;
    }
  });
}

// Máscara para CPF
if (cpfInput) {
  cpfInput.addEventListener("input", function(e) {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length <= 11) {
      value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{0,2}).*/, "$1.$2.$3-$4");
      e.target.value = value;
    }
  });
}

// Validação de senha em tempo real
if (senhaCadastroInput) {
  senhaCadastroInput.addEventListener("input", function() {
    validarSenha(this.value);
  });
}

// Validação de confirmação de senha em tempo real
if (confirmarSenhaInput && senhaCadastroInput) {
  confirmarSenhaInput.addEventListener("input", function() {
    const senha = senhaCadastroInput.value;
    const confirmar = this.value;
    
    if (confirmar && senha !== confirmar) {
      this.setCustomValidity("As senhas não coincidem");
      this.style.borderColor = "#ef4444";
    } else {
      this.setCustomValidity("");
      this.style.borderColor = "";
    }
  });
}

// Função para validar senha
function validarSenha(senha) {
  const reqMinimo = document.getElementById("req-minimo");
  const reqMaiuscula = document.getElementById("req-maiuscula");
  const reqNumero = document.getElementById("req-numero");
  
  // Mínimo de 8 caracteres
  if (senha.length >= 8) {
    reqMinimo.style.color = "#10b981";
    reqMinimo.innerHTML = "✓ Mínimo de 8 caracteres";
  } else {
    reqMinimo.style.color = "#ef4444";
    reqMinimo.innerHTML = "Mínimo de 8 caracteres";
  }
  
  // Uma letra maiúscula
  if (/[A-Z]/.test(senha)) {
    reqMaiuscula.style.color = "#10b981";
    reqMaiuscula.innerHTML = "✓ Uma letra maiúscula";
  } else {
    reqMaiuscula.style.color = "#ef4444";
    reqMaiuscula.innerHTML = "Uma letra maiúscula";
  }
  
  // Um número
  if (/\d/.test(senha)) {
    reqNumero.style.color = "#10b981";
    reqNumero.innerHTML = "✓ Um número";
  } else {
    reqNumero.style.color = "#ef4444";
    reqNumero.innerHTML = "Um número";
  }
}

// Validação e submissão do formulário
if (cadastroForm) {
  cadastroForm.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const nomeCompleto = document.getElementById("nome-completo").value;
    const email = document.getElementById("email-cadastro").value;
    const telefone = telefoneInput.value;
    const cpf = cpfInput.value;
    const senha = senhaCadastroInput.value;
    const confirmarSenha = confirmarSenhaInput.value;
    const aceitarTermos = document.getElementById("aceitar-termos").checked;
    
    // Validações
    if (!nomeCompleto || !email || !telefone || !cpf || !senha || !confirmarSenha) {
      mostrarErro("Por favor, preencha todos os campos.");
      return;
    }
    
    if (!validarEmail(email)) {
      mostrarErro("Por favor, insira um e-mail válido.");
      return;
    }
    
    if (!validarCPF(cpf)) {
      mostrarErro("Por favor, insira um CPF válido.");
      return;
    }
    
    if (senha.length < 8) {
      mostrarErro("A senha deve ter no mínimo 8 caracteres.");
      return;
    }
    
    if (!/[A-Z]/.test(senha)) {
      mostrarErro("A senha deve conter pelo menos uma letra maiúscula.");
      return;
    }
    
    if (!/\d/.test(senha)) {
      mostrarErro("A senha deve conter pelo menos um número.");
      return;
    }
    
    if (senha !== confirmarSenha) {
      mostrarErro("As senhas não coincidem.");
      return;
    }
    
    if (!aceitarTermos) {
      mostrarErro("Você precisa aceitar os termos de uso.");
      return;
    }
    
    // Simular loading
    btnCadastro.classList.add("loading");
    btnCadastro.disabled = true;
    
    // Simular requisição de cadastro (em produção, isso seria uma chamada à API)
    setTimeout(() => {
      // Simular cadastro bem-sucedido
      mostrarSucesso("Cadastro realizado com sucesso! Redirecionando...");
      
      // Salvar dados do usuário (em produção, isso seria no backend)
      const dadosUsuario = {
        nome: nomeCompleto,
        email: email,
        telefone: telefone,
        cpf: cpf
      };
      localStorage.setItem("usuarioCadastrado", JSON.stringify(dadosUsuario));
      
      // Redirecionar após sucesso
      setTimeout(() => {
        window.location.href = "login.html";
      }, 2000);
    }, 1500);
  });
}

// Função para validar e-mail
function validarEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Função para validar CPF
function validarCPF(cpf) {
  cpf = cpf.replace(/\D/g, "");
  if (cpf.length !== 11) return false;
  
  // Verificar se todos os dígitos são iguais
  if (/^(\d)\1{10}$/.test(cpf)) return false;
  
  // Validar dígitos verificadores
  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let digito = 11 - (soma % 11);
  if (digito >= 10) digito = 0;
  if (digito !== parseInt(cpf.charAt(9))) return false;
  
  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }
  digito = 11 - (soma % 11);
  if (digito >= 10) digito = 0;
  if (digito !== parseInt(cpf.charAt(10))) return false;
  
  return true;
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
  
  cadastroForm.insertBefore(erroDiv, cadastroForm.firstChild);
  
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
  
  .senha-requisitos {
    margin-top: 10px;
    padding: 12px;
    background: rgba(139, 92, 246, 0.1);
    border-radius: 8px;
    border: 1px solid rgba(139, 92, 246, 0.3);
  }
  
  .senha-requisitos p {
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.85rem;
    font-weight: 600;
    margin: 0 0 8px 0;
  }
  
  .senha-requisitos ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .senha-requisitos li {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.85rem;
    margin: 5px 0;
    transition: color 0.3s ease;
  }
  
  .cadastro-card {
    max-width: 500px;
  }
  
  .link-termos {
    color: #c4b5fd;
    text-decoration: underline;
    transition: color 0.3s ease;
  }
  
  .link-termos:hover {
    color: #8b5cf6;
  }
`;
document.head.appendChild(style);
