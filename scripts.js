// window.onscroll = function() {navChange()};

// function navChange() {
//   if (document.documentElement.scrollTop > 100) {
//     document.getElementById("").className = "";
//   } else {
//     document.getElementById("").className = "";
//   }
// }


const mobileNav = document.querySelector(".mobile-nav");
const navToggle = document.querySelector(".mobile-nav-menu-toggle");
const scrollNext = document.querySelector(".scroll-to-next");
const scrollPrev = document.querySelector(".scroll-to-previous")
let vh = window.innerWidth;

navToggle.addEventListener("click", () => {
    const visibility = mobileNav.getAttribute("data-visible");

    if (visibility === "false") {
        mobileNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else if (visibility === "true") {
        mobileNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);

    }
});

scrollNext.addEventListener("click", () => {
    document.getElementById('scroll').scrollBy({
        left: vh,
        behavior: "smooth",
    });
});

scrollPrev.addEventListener("click", () => {
    document.getElementById('scroll').scrollBy({
        left: -vh,
        behavior: "smooth",
    });
});