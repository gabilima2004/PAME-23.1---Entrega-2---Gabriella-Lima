var form = document.getElementById("contact-form")

form.addEventListener("submit", function(event) {
    event.preventDefault();
    var google = document.getElementById("googlebotao").ariaChecke;
    var facebook = document.getElementById("facebookbotao").ariaChecke;
    var apple = document.getElementById("applebotao").ariaChecke;
    var telefone = document.getElementById("telefonebotao").ariaChecke;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var lembrar = document.getElementById("lembrar").ariaChecke;
    var esquecersenha = document.getElementById("esqueceusenha").ariaChecke;
    var cadastrar = document.getElementById("inscreverbotao").ariaChecke;

    //Exibir aviso para preencher todos os campos
    if (email === "" || senha === "" || google ==false || facebook ==false || apple ==false || telefone ==false || lembrar ==false|| esquecersenha ==false || cadastrar ==false){
        var errorMessage = document.createElement("p");
        errorMessage.textContent = "Por favor, escolha alguma opção e preencha todos os campos.";
        errorMessage.classList.add("error-message");
        form.appendChild(errorMessage);
    } else{
        var successMessage = document.createElement("p");
        successMessage.classList.add("success-message");
        form.appendChild(successMessage);

        //Exibir alerta
        var userInfo = "Email: " + email + "\nSenha: " + senha + "\nLembrar de mim: " + (lembrar ? "Sim" : "Não");
        alert(userInfo);
    }
});
