const mobileNav = document.querySelector(".mobile-nav");
const navToggle = document.querySelector(".mobile-nav-menu-toggle");



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

// carousel 

const btnNext = document.querySelector(".scroll-to-next");
const btnPrev = document.querySelector(".scroll-to-previous");
const scrolls = document.querySelectorAll("scroll-children");
const scroller = document.getElementById("side-scroller");

const track = document.querySelector(".side-scroller");
const slides = Array.from(track.children);
const navDots = document.querySelector(".scroll-nav");
const dots = Array.from(navDots.children);

const slideWidth = slides[0].getBoundingClientRect().width;




// carousel__scroll-buttons

//carousel__scroll-button--right
btnNext.addEventListener("click", () => {
    scroller.scrollBy({
        left: vh,
        behavior: "smooth",
    });
});



//carousel__scroll-button--left
btnPrev.addEventListener("click", () => {
    scroller.scrollBy({
        left: -vh,
        behavior: "smooth",
    });
});


