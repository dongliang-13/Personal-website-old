//all pages linking to this js page must have ID "header" for the next line to work
document.querySelector("#header").innerHTML = `
    <div id="top-container">
        <div id="menu-icon" data-aos="fade-down" data-aos-duration="1000"><i data-feather="menu" id="menu-icon"></i></div>
        <div id="light-tone-container" data-aos="fade-down" data-aos-duration="1000">
            <i data-feather="sun" id="light"></i>
            <i data-feather="moon" id="dark"></i>
        </div>
    </div>
    <div id="tab-container">
        <div id = "home" class = "tab" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">Home</div>
        <div id = "project" class = "tab" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Project</div>
        <div id = "about" class = "tab" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">About</div>
        <div id = "resume" class = "tab" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Resume</div>
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

let menuClicked = false;
document.querySelector("#menu-icon").addEventListener( "click", () => {
    const tabContainer = document.getElementById("tab-container");
    menuClicked = !menuClicked;
    let temp;
    let canSee;
    menuClicked?temp="174px":temp="0px"; 
    //174 = 24 (height of letter) * 4 (row) + 20 (desired gap length) * 3 (spaces between 4 div) + 5 (padding-bottom) * 4 (words)
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