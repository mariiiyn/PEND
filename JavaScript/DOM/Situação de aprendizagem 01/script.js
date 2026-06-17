/*variaveis*/
let nome = document.getElementById("nome");
let email = document.getElementById("email");
let senha = document.getElementById("senha");
let confirmar = document.getElementById("confirmar");
let mensagem = document.getElementById("mensagem");
let botao = document.getElementById("cadastrar");
let ADDtelefone = document.getElementById("ADDtelefone");
let mensagemSenha = document.getElementById("mensagem-senha");
let botao_senha = document.getElementById("botaoSenha");
let botao_confirmar = document.getElementById("botaoConfirmar");
let confirmarSenha = document.getElementById("confirmar");
let mascaraEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
let telefone = document.getElementById("telefone");
/*eventos*/
botao.addEventListener("click", function() {

    if (nome.value.trim().length < 3) {
        mensagem.textContent = " Seu nome precisa ter pelo menos 3 letras";
        mensagem.style.color = "red";
        return;
    } else if (!mascaraEmail.test(email.value)) {
        mensagem.textContent = "Email inválido";
        mensagem.style.color = "red";
        return;
    } else if (senha.value.length < 6) {
        mensagem.textContent = "Senha precisa ter no mínimo 6 caracteres";
        mensagem.style.color = "red";
        return;
    } else if (senha.value != confirmar.value) {
        mensagem.textContent = "As senhas não coincidem";
        mensagem.style.color = "red";
        return;
    } else if (!/^\d{10,11}$/.test(telefone.value)) {
        mensagem.textContent = "Telefone deve conter apenas números e ter 10 ou 11 dígitos";
        mensagem.style.color = "red";
        return;
    } else {
    mensagem.innerText = "Cadastro realizado com sucesso!";
    mensagem.style.color = "lightgreen";
    }

});
/*mostrar senha*/
senha.addEventListener("keyup", function() {
    if (senha.value.length < 6) {
        senha.style.borderColor = "red";
        mensagemSenha.textContent = "Senha fraca";
        mensagemSenha.style.color = "red";
        
    } else if (senha.value.length >= 6 && senha.value.length < 10) {
        senha.style.borderColor = " orange";
        mensagemSenha.textContent = "Senha aceitavel";
         mensagemSenha.style.color = "orange";
    } else {
        senha.style.borderColor = "green";
        mensagemSenha.textContent = "Senha forte";
        mensagemSenha.style.color = "green";
    }
}
);
/*adicionar telefone*/ /*remover telefone*/
ADDtelefone.addEventListener("click", function() {
    let novoTelefone = document.createElement("input");
    let botaoRemover = document.createElement("button");
    botaoRemover.textContent = "➖";
    botaoRemover.type = "button";
    novoTelefone.type = "text";
    novoTelefone.placeholder = "Digite seu telefone";
    novoTelefone.classList.add("telefone");
    ADDtelefone.insertAdjacentElement("beforebegin", novoTelefone);
    ADDtelefone.insertAdjacentElement("beforebegin", botaoRemover);
    botaoRemover.addEventListener("click", function() {
        novoTelefone.remove();
        botaoRemover.remove();
    });
});
/*mostrar senha*/
let input = document.querySelector("#senha");
let botaosenha= document.querySelector("#botaoSenha");
/*mostrar senha confirmar*/
botao_senha.addEventListener("click", function(){
    if(input.type === "password"){
        input.setAttribute("type", "text");
        botao_senha.classList.replace('bi-eye-fill','bi-eye-slash-fill');
    } else {
        input.setAttribute("type", "password");
        botao_senha.classList.replace('bi-eye-slash-fill','bi-eye-fill');
    }
});
/*mostrar senha confirmar*/
botao_confirmar.addEventListener("click", function(){
    if(confirmarSenha.type === "password"){
        confirmarSenha.setAttribute("type", "text");
        botao_confirmar.classList.replace('bi-eye-fill','bi-eye-slash-fill');
    } else {
        confirmarSenha.setAttribute("type", "password");
        botao_confirmar.classList.replace('bi-eye-slash-fill','bi-eye-fill');
    }
});





