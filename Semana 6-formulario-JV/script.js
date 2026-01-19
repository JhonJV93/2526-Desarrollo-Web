const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const edad = document.getElementById("edad");
const btnEnviar = document.getElementById("btnEnviar");

function validarNombre() {
    if (nombre.value.length >= 3) {
        nombre.className = "valid";
        errorNombre.textContent = "";
        return true;
    } else {
        nombre.className = "invalid";
        errorNombre.textContent = "Mínimo 3 caracteres";
        return false;
    }
}

function validarEmail() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email.value)) {
        email.className = "valid";
        errorEmail.textContent = "";
        return true;
    } else {
        email.className = "invalid";
        errorEmail.textContent = "Correo inválido";
        return false;
    }
}

function validarPassword() {
    const regex = /^(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/;
    if (regex.test(password.value)) {
        password.className = "valid";
        errorPassword.textContent = "";
        return true;
    } else {
        password.className = "invalid";
        errorPassword.textContent = "Mínimo 8 caracteres, un número y un símbolo";
        return false;
    }
}

function validarConfirmPassword() {
    if (confirmPassword.value === password.value && confirmPassword.value !== "") {
        confirmPassword.className = "valid";
        errorConfirmPassword.textContent = "";
        return true;
    } else {
        confirmPassword.className = "invalid";
        errorConfirmPassword.textContent = "Las contraseñas no coinciden";
        return false;
    }
}

function validarEdad() {
    if (edad.value >= 18) {
        edad.className = "valid";
        errorEdad.textContent = "";
        return true;
    } else {
        edad.className = "invalid";
        errorEdad.textContent = "Debes ser mayor de 18 años";
        return false;
    }
}

function validarFormulario() {
    if (
        validarNombre() &&
        validarEmail() &&
        validarPassword() &&
        validarConfirmPassword() &&
        validarEdad()
    ) {
        btnEnviar.disabled = false;
    } else {
        btnEnviar.disabled = true;
    }
}

nombre.addEventListener("input", validarFormulario);
email.addEventListener("input", validarFormulario);
password.addEventListener("input", validarFormulario);
confirmPassword.addEventListener("input", validarFormulario);
edad.addEventListener("input", validarFormulario);

document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Formulario validado correctamente ✔️");
});
