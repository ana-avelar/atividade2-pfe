function validarSenhas() {
    var senha1 = document.getElementById("senha1").value;
    var senha2 = document.getElementById("senha2").value;
    var mensagem = document.getElementById("mensagem");
    
      mensagem.style.color = "red"; // garante que erro fique vermelho

    if (senha1.length < 8) {
        mensagem.innerText = "A senha deve ter pelo menos 8 caracteres.";
        return false;
    }

    if (senha1 !== senha2) {
        mensagem.innerText = "As senhas não coincidem.";
        return false;
    }

    mensagem.style.color = "green";
    mensagem.innerText = "Inscrição válida!";
      return true;
}