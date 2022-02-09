const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
//console.log(links.classList);
//console.log(links.classList.contains("random"));
//console.log(links.classList.contains("links"));
navToggle.addEventListener("click", function name(params) {
    // linhas de comando toggle alternativo
    //if (links.classList.contains("show-links")) {
    //  links.classList.remove("show-links");
    //} else {
    //  links.classList.add("show-links");
    //}
    links.classList.toggle("show-links");
});