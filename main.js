// Login e senha corretos
var loginCerto = "crfdanyel";
var senhaCerto = "12345";

// Chaves LocalStorage
var loginKey = "login";
var senhaKey = "senha";

// VERIFICAÇÂO DE LOCAL STORAGE
verificarLocalStorage();

function verificarLocalStorage() {
    // verificando login no localStorage
    if (localStorage.getItem(loginKey) == loginCerto) {
        console.log("LoginStorage => Certo");

        // verificando senha no localStorage
        if (localStorage.getItem(senhaKey) == senhaCerto) {
            console.log("SenhaStorage => Certo");

            //tudo Ok! Logar!! 
            logar();
            return true;

        } else {
            return false;
        }

    } else {
        return false;
    }
}
// FINAL DA VERIFICAÇÂO DE LOCAL STORAGE


// VERIFICAÇÂO DE FORMULARIO
// Pegando inputs
var username = document.querySelector("#username");
var senha = document.querySelector("#senha");

// pegando botão para verificar
var btt = document.querySelector("#btn-login");

btt.addEventListener("click", function() {
    // Verificar usuario
    if (username.value == loginCerto) {

        // Verificar senha
        if (senha.value == senhaCerto) {
            alert("Boa, Passou, Finalmente fogos");
            localStorage.setItem(loginKey, username.value);
            localStorage.setItem(senhaKey, senha.value);
            logar()
        } else {
            alert("acertou o login, mas a senha não seu safado, porque burgues não é, só safado msm");
        }

        // Usuario errado
    } else {
        alert("Seu burro, login errado, tente novamente");
    };

});

// FINAL DA VERIFICAÇÂO DE FORMULARIO


// função de logar
function logar() {
    // Entrar pra home;
    alert("logado, entrando pra home");
    console.log(window.location.href);

    window.location.href = window.location.href + "/pages/home.html"; //instagram.com/pages/home.html
}