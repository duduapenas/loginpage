var btnLogin = document.querySelector("#login");
var btnRegistrar = document.querySelector("#registrar");

var body = document.querySelector("body");

btnLogin.addEventListener("click", function() {
    body.className = "login-js";
});

btnRegistrar.addEventListener("click", function() {
    body.className = "registrar-js";
});
