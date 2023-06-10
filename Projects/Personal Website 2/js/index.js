let page = 0;
const scrollingContainer = document.querySelector(".scrolling-container");

let timeoutIndex = [];
function lightMode(){
    scrollingContainer.style.setProperty('--opacity',0);
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    scrollingContainer.style.setProperty('--color','white');
    timeoutIndex[0] ? clearInterval(timeoutIndex[0]) : {};
    timeoutIndex[0] = setTimeout(()=>{scrollingContainer.style.setProperty('--opacity',1);},"1000");
    lightModeTopScroll();
}

function darkMode(){
    scrollingContainer.style.setProperty('--opacity',0);
    document.body.style.backgroundColor = "#1b1b1c";
    document.body.style.color = "white";
    scrollingContainer.style.setProperty('--color','#1b1b1c');
    scrollingContainer.style.setProperty("--opacityTransition","opacity");
    timeoutIndex[0] ? clearInterval(timeoutIndex[0]) : {};
    timeoutIndex[0] = setTimeout(()=>{scrollingContainer.style.setProperty('--opacity',1);},"1000");
    darkModeTopScroll();
}

const scrolling = document.querySelector(".scrolling-slide");

let htmlForScroll = "";
iconForScroll.forEach( (value) => {
    htmlForScroll += `
    <img src="${value}" width="150px"></i>
    `
});

scrolling.innerHTML = htmlForScroll;
scrollingContainer.innerHTML += scrollingContainer.innerHTML;

let htmlForProject = "";
let alternate = true;
highlightProjects.forEach( (value) => {
    let htmlForTag="";
    value.tags.forEach( (value) => {
        htmlForTag += `<span class = "projectEachTag">${value}</span>`;
    });
    if(alternate || window.innerWidth <= 768){
        htmlForProject += `
        <div class = "project-inner-container">
            <div class="project-inner-left">
                <img src="images/test.jpeg">
            </div>
            <div class="project-inner-right">
                <div class = "project-inner-right-name">${value.name}</div>
                <div class = "project-inner-right-tags">${htmlForTag}</div>
                <div class = "project-inner-right-description">${value.description}</div>
                <div class = "project-inner-right-availableText">${value.availableText}</div>
            </div>
        </div>
    `;
    alternate = !alternate;
    }
    else
    {
        htmlForProject += `
        <div class = "project-inner-container">
            <div class="project-inner-right">
                <div class = "project-inner-right-name">${value.name}</div>
                <div class = "project-inner-right-tags">${htmlForTag}</div>
                <div class = "project-inner-right-description">${value.description}</div>
                <div class = "project-inner-right-availableText">${value.availableText}</div>
            </div>
            <div class="project-inner-left">
                <img src="images/test.jpeg">
            </div>
        </div>
    `;
    alternate = !alternate;
    }
});
document.querySelector(".projects-container").innerHTML = htmlForProject;
