let iconForScroll = [
    "images/html.png",
    "images/js.png",
    "images/css.png",
    "images/python.png",
    "images/java.png",
    "images/c.png",
    "images/ocaml.png",
    "images/asm.png"
];

const scrolling = document.querySelector(".scrolling-slide");
const scrollingContainer = document.querySelector(".scrolling-container");

let htmlForScroll = "";
iconForScroll.forEach( (value) => {
    htmlForScroll += `
    <img src="${value}" width="150px"></i>
    `
});

scrolling.innerHTML = htmlForScroll;
scrollingContainer.innerHTML += scrollingContainer.innerHTML;
