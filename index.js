const hamburger = document.querySelector(".hamburger");
const izbornik = document.querySelector(".izbornik");
const gumbi = document.querySelectorAll("li");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    izbornik.classList.toggle("active");
})

for (var i=0; i<gumbi.length; i++) {
    gumbi[i].addEventListener("click", () => {
        hamburger.classList.toggle("active");
        izbornik.classList.toggle("active"); 
    });
}

