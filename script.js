window.addEventListener("scroll", () => {
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");
let current = "";


sections.forEach((sec) => {
const top = window.scrollY;
const offset = sec.offsetTop - 80;
const height = sec.offsetHeight;
if (top >= offset && top < offset + height) {
current = sec.getAttribute("id");
}
});


navLinks.forEach((a) => {
a.classList.remove("text-blue-600", "font-bold");
if (a.getAttribute("href") === `#${current}`) {
a.classList.add("text-blue-600", "font-bold");
}
});
});