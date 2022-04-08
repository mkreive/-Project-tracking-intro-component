"use strict";

// SELECTORS
const loginButton = document.querySelector(".nav__link--login");
const sheduleButton = document.querySelector(".header__title--shedule");
const loginForm = document.querySelector(".login");
const sheduleForm = document.querySelector(".shedule");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

let openedModal;
const openModal = function (modal) {
    openedModal = modal;
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeModal = function (modal) {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        if (btn.classList.contains("nav__link--login")) {
            openModal(loginForm);
        } else if (btn.classList.contains("header__title--shedule")) {
            openModal(sheduleForm);
        }
    });
});

overlay.addEventListener("click", function (e) {
    closeModal(openedModal);
});
