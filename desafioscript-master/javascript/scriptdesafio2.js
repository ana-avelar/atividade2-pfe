function verificarDesconto() {
    const idade = parseInt(document.getElementById('idade').value, 10);
    const estudante = document.getElementById('estudante').checked;
    const mensagem = document.getElementById('mensagem');

    if (isNaN(idade)) {
        mensagem.style.color = 'red';
        mensagem.innerText = "Digite uma idade válida!";
        return false;
    }

    if (idade > 60 || estudante) {
        mensagem.style.color = 'green';
        mensagem.innerText = "Você ganhou desconto!";
    } else {
        mensagem.style.color = 'red';
        mensagem.innerText = "Não tem direito ao desconto.";
    }

    return false; // evita recarregar a página
}