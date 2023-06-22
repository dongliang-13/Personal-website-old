let page = 1;

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

var currentClicked = 0;
const textInfo = document.querySelectorAll(".text-info");
const topTextInfo = document.querySelectorAll(".about-top-tag");
topTextInfo[currentClicked].style.setProperty("--about-top-tag","60%");

topTextInfo.forEach( (value,index,lst)=>{
    value.addEventListener("click", ()=>{
        if(index != currentClicked)
        {
            textInfo[currentClicked].classList.remove("active");
            textInfo[index].classList.add("active");
            lst[currentClicked].style.setProperty("--about-top-tag","0%");
            value.style.setProperty("--about-top-tag","60%");
            currentClicked = index;
        }
    });
});