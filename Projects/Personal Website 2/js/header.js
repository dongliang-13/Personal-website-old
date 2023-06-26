//all pages linking to this js page must have ID "header" for the next line to work
document.querySelector("#header").innerHTML = `
    <div id="top-container">
        <div id="menu-icon"><i data-feather="menu"></i></div>
        <div id="light-tone-container">
            <i data-feather="sun" id="light"></i>
            <i data-feather="moon" id="dark"></i>
        </div>
    </div>
    <ul id="tab-container">
        <li id = "home" class = "tab"><a class = "headerLink" href="index.html">Home</a></li>
        <li id = "about" class = "tab"><a class = "headerLink" href="about.html">About</a></li>
        <li id = "contact" class = "tab"><a class = "headerLink" href="contact.html">Contact</a></li>
        <li id = "feedback" class = "tab"><a class = "headerLink" href="feedback.html">Feedback</a></li>
    </ul>`;

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
    tab.push(document.querySelector("#about"));
    tab.push(document.querySelector("#contact"));
    tab.push(document.querySelector("#feedback"));
    tab.forEach( (value,index) => {
        if(tabNumber==index)
        {
            tab[index].classList.add("underline");
        }
        else
        {
            tab[index].classList.remove("underline");
        }
    });
}

tab(page);

let menuClicked = false;
document.querySelector("#menu-icon").addEventListener( "click", () => {
    const tabContainer = document.getElementById("tab-container");
    menuClicked = !menuClicked;
    let temp;
    let canSee;
    menuClicked?temp="176px":temp="0px"; 
    //176 = 24 (height of letter) * 4 (row) + 20 (desired gap length) * 3 (spaces between 4 div) + 5 (padding-bottom) * 4 (words)
    tabContainer.style.setProperty("--tab-container-height",temp);
});

//screen size change
function handleScreenSizeSmall() {
    const menuIcon = document.getElementById('menu-icon');
    menuIcon.style.setProperty("--menu-icon-visibility","visible");
    const tabContainer = document.getElementById("tab-container");
    tabContainer.style.setProperty("--tab-container-height","0");
}
  
function handleScreenSizeBig() {
    const menuIcon = document.getElementById('menu-icon');
    menuIcon.style.setProperty("--menu-icon-visibility","hidden");
    const tabContainer = document.getElementById("tab-container");
    tabContainer.style.setProperty("--tab-container-height","auto");
}

function handleResize() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 760) {
        handleScreenSizeSmall();
    } else {
        handleScreenSizeBig();
    }
}
  
window.addEventListener('resize', handleResize);

handleResize();