"use strict";

// SELECTORS
const loginButton = document.querySelector(".nav__link--login");
const sheduleButton = document.querySelector(".header__title--shedule");
// const loginForm = document.querySelector(".login");
// const sheduleForm = document.querySelector(".shedule");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

// CODE
const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));
overlay.addEventListener("click", closeModal);

// overlay.addEventListener("click", function () {
//     overlay.classList.toggle("hidden");
//     sheduleForm.classList.toggle("hidden");
//     loginForm.classList.toggle("hidden");
// });

// loginButton.addEventListener("click", function (e) {
//     loginForm.classList.toggle("hidden");
//     overlay.classList.toggle("hidden");
// });

// sheduleButton.addEventListener("click", function (e) {
//     sheduleForm.classList.toggle("hidden");
//     overlay.classList.toggle("hidden");
// });
