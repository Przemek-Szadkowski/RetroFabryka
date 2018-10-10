const bars = document.querySelector(".fa-bars");
const close = document.querySelector(".fa-times");
const menu = document.querySelector("nav");
const menuButtons = document.querySelectorAll("li a");

function showPhotos() {
    const scrollPosition = window.scrollY;
    const photoHeight = document.querySelector(".photo").clientHeight;
    const photoPosition = document.querySelector(".photo").offsetTop;
    const items = document.querySelectorAll(".photo");

    items.forEach(function (item) {
        if (scrollPosition > photoPosition - photoHeight) {
            item.classList.remove("off");
        }
        if ((scrollPosition + 200) < photoPosition - photoHeight) {
            item.classList.add("off");
        }
    })
}

function movePhotos() {
    const scrollPosition = window.scrollY;
    const partsHeight = document.querySelector(".part").clientHeight;
    const partsPosition = document.querySelector(".part").offsetTop;
    const items = document.querySelectorAll(".part");

    items.forEach(function (item) {
        if (scrollPosition + 200 > partsPosition - partsHeight) {
            item.classList.add("active");
        }
        if (scrollPosition + 600 < partsPosition - partsHeight) {
            item.classList.remove("active");
        }
    })
}

bars.addEventListener("click", function () {
    bars.classList.add("off");
    close.classList.remove("off");
    menu.classList.remove("off");
})
close.addEventListener("click", function () {
    close.classList.add("off");
    bars.classList.remove("off");
    menu.classList.add("off");
})

menuButtons.forEach(function (menuButton) {
    menuButton.addEventListener("click", function () {
        close.classList.add("off");
        bars.classList.remove("off");
        menu.classList.add("off");
    })
})

window.addEventListener("scroll", showPhotos);
window.addEventListener("scroll", movePhotos);