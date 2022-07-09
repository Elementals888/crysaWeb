const mobileNav = document.querySelector(".mobile-nav");
const navToggle = document.querySelector(".mobile-nav-menu-toggle");
const scrollNext = document.querySelector(".scroll-to-next");
const scrollPrev = document.querySelector(".scroll-to-previous");
const scroller = document.getElementById('side-scroller');
const scrolls = document.querySelectorAll('scroll-children');


let vh = window.innerWidth;


// menu toggle function
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
0

// scroll buttons
scrollNext.addEventListener("click", () => {
    scroller.scrollBy({
        left: vh,
        behavior: "smooth",
    });
});

scrollPrev.addEventListener("click", () => {
    scroller.scrollBy({
        left: -vh,
        behavior: "smooth",
    });
});
