const hamburger = document.querySelector(".hamburger");
const izbornik = document.querySelector(".izbornik");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    izbornik.classList.toggle("active");
})