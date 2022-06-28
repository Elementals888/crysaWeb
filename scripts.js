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