let sliderElement     = document.querySelector("#slider");              // Acesso ao elemento slider dentro do HTML
let buttonElement     = document.querySelector("#button");              // Acesso ao elemento button dentro do HTML

let sizePassword      = document.querySelector("#valor");               // Acesso ao elemento valor dentro do HTML
let password          = document.querySelector("#password");            // Acesso ao elemento password dentro do HTML
let containerPassword = document.querySelector("#container-password");  // Acesso ao elemento container-password dentro do HTML

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&" // Todos os caracteres que podem ser usados ao gerar uma senha
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;
sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value;
}

    