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

window.addEventListener("scroll", showPhotos);