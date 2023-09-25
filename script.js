const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container"); // Use querySelector to get a single element

open.addEventListener("click", () => container.classList.add("show-nav"));
close.addEventListener("click", () => container.classList.remove("show-nav"));
