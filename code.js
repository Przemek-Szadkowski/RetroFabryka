// $(document).on("scroll", function () {
//     const scrollPosition = $(document).scrollTop();
//     const weHeight = $(".we").outerHeight();
//     const photoPosition = $(".photo").offset().top;
//     const windowHeight = $(window).height();
//     if (scrollPosition > photoPosition - weHeight) {
//         $(".photo").removeClass("off");
//     }
//     if (scrollPosition < photoPosition - weHeight) {
//         $(".photo").addClass("off");
//     }
// });

// napisać to w czystym JSie



// DZIAŁA :)))))
function showPhotos() {
    const scrollPosition = window.scrollY;
    const photoHeight = document.querySelector(".photo").clientHeight;
    const photoPosition = document.querySelector(".photo").offsetTop;

    const items = document.querySelectorAll(".photo");

    items.forEach(function (item) {
        if (scrollPosition > photoPosition - photoHeight) {
            item.classList.remove("off");
        }
        if (scrollPosition < photoPosition - photoHeight) {
            item.classList.add("off");
        }
    }) 
}

window.addEventListener("scroll", showPhotos);