let page = 3;

let timeoutIndex = [];
function lightMode(){
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    lightModeTopScroll();
}

function darkMode(){
    document.body.style.backgroundColor = "#1b1b1c";
    document.body.style.color = "white";
    darkModeTopScroll();
}