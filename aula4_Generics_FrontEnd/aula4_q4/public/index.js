"use strict";
const modal = document.getElementById("modal");
const closeButton = document.querySelector(".close");
function openModal() {
    modal.style.display = "flex";
}
function closeModal() {
    modal.style.display = "none";
}
closeButton.addEventListener("click", closeModal);
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});
let bottomModalTimeout;
function showBottomModal(message, duration = 5000) {
    const bottomModal = document.getElementById("bottom-modal");
    const text = document.getElementById("bottom-modal-text");
    if (!bottomModal || !text)
        return;
    if (bottomModalTimeout) {
        clearTimeout(bottomModalTimeout);
    }
    text.textContent = message;
    bottomModal.classList.remove("hidden");
    bottomModal.classList.add("show");
    bottomModalTimeout = window.setTimeout(() => {
        bottomModal.classList.remove("show");
        bottomModalTimeout = window.setTimeout(() => {
            bottomModal.classList.add("hidden");
        }, 300);
    }, duration);
}
function verifyName(name) {
    const regex = /[^a-zA-Z\s]/;
    if (regex.test(name)) {
        showBottomModal("O nome deve conter apenas letras e espaços!");
        return false;
    }
    const noSpace = name.replace(/\s+/g, "");
    if (noSpace.length < 4) {
        showBottomModal("O nome deve ter pelo menos 4 letras!");
        return false;
    }
    return true;
}
function verifyEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(email)) {
        showBottomModal("O e-mail deve ser válido!");
        return false;
    }
    return true;
}
function verifyPassword(password) {
    if (password.length < 8) {
        showBottomModal("A senha deve ter pelo menos 8 caracteres!");
        return false;
    }
    const regex = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
    if (!regex.test(password)) {
        showBottomModal("A senha deve conter pelo menos um caractere e um número!");
        return false;
    }
    return true;
}
const signupForm = document.getElementById("signupForm");
signupForm.addEventListener("submit", event => {
    event.preventDefault();
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    if (!name || !email || !password) {
        showBottomModal("Todos os campos devem ser preenchidos!");
        return;
    }
    if (!verifyName(name))
        return;
    if (!verifyEmail(email))
        return;
    if (!verifyPassword(password))
        return;
    openModal();
});
