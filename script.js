let sliderElement     = document.querySelector("#slider");              // Acesso ao elemento slider dentro do HTML
let buttonElement     = document.querySelector("#button");              // Acesso ao elemento button dentro do HTML

let sizePassword      = document.querySelector("#valor");               // Acesso ao elemento valor dentro do HTML
let password          = document.querySelector("#password");            // Acesso ao elemento password dentro do HTML
let containerPassword = document.querySelector("#container-password");  // Acesso ao elemento container-password dentro do HTML

const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&" // Todos os caracteres que podem ser usados ao gerar uma senha
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value; // set the password size equal the actual slider element value

sliderElement.oninput = function(){     // update the password size after move the slider
    sizePassword.innerHTML = this.value;
//console.log(sizePassword.innerHTML)
}

function generatePassword(){           /* add chars of the charset into the var "pass" based on the slideElement value and
                                          the charset length, after this remove the hide class from the container password and make the var "password" equal "pass" */
let pass = ""

for(let i = 0, n= charset.length;i<sliderElement.value;++i ){
   pass += charset.charAt(Math.floor(Math.random()* n))
   
 }
//console.log(pass)
containerPassword.classList.remove("hide");
password.innerHTML = pass;
}
