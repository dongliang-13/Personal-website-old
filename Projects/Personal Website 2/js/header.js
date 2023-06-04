//all pages linking to this js page must have ID "header" for the next line to work
document.querySelector("#header").innerHTML = `
    <div id="light-tone-container">
    <i data-feather="sun" id="light"></i>
    <i data-feather="moon" id="dark"></i>
    </div>
    <div id="tab-container">
    <div id = "home" class = "tab">Home</div>
    <div id = "project" class = "tab">Project</div>
    <div id = "about" class = "tab">About</div>
    <div id = "resume" class = "tab">Resume</div>
    </div>`;

feather.replace();

let brightMode = Number(localStorage.getItem("brightMode"));

const toneContainer = document.querySelector("#light-tone-container");
const lightButton = document.querySelector("#light");
const darkButton = document.querySelector("#dark");

function headerLightMode(){
    brightMode = 1;
    localStorage.setItem("brightMode","1");
    lightButton.style.backgroundColor = "white";
    lightButton.style.color = "black";
    darkButton.style.backgroundColor = "#E8E8E8";
    darkButton.style.color = "white";
    toneContainer.style.backgroundColor = "#E8E8E8";
    lightMode();
}

function headerDarkMode(){
    brightMode = 0;
    localStorage.setItem("brightMode","0");
    lightButton.style.backgroundColor = "white";
    lightButton.style.color = "#E8E8E8";
    darkButton.style.backgroundColor = "#E8E8E8";
    darkButton.style.color = "black";
    toneContainer.style.backgroundColor = "white";
    darkMode();
}

if(!brightMode){
    headerDarkMode();
}

lightButton.addEventListener( "click", () => {
    if(!brightMode)
    {
        headerLightMode();
    }
});


darkButton.addEventListener( "click", () => {
    if(brightMode)
    {
        headerDarkMode();
    }
});

function tab(tabNumber){
    let tab = [];
    tab.push(document.querySelector("#home"));
    tab.push(document.querySelector("#project"));
    tab.push(document.querySelector("#about"));
    tab.push(document.querySelector("#resume"));
    tab.forEach( (value,index) => {
        tabNumber==index?tab[index].classList.add("underline"):tab[index].classList.remove("underline");
    });
}

tab(page);

document.querySelectorAll(".tab").forEach( (value,index) => {
    value.addEventListener("click", () => {
        tab(index);
    } );
});