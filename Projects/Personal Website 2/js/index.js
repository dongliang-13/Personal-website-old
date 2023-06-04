let page = 0;
const scrollingContainer = document.querySelector(".scrolling-container");

function lightMode(){
    scrollingContainer.style.setProperty('--opacity',0);
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    scrollingContainer.style.setProperty('--color','white');
    setTimeout(()=>{scrollingContainer.style.setProperty('--opacity',1);},"1000");
}

function darkMode(){
    scrollingContainer.style.setProperty('--opacity',0);
    document.body.style.backgroundColor = "#1b1b1c";
    document.body.style.color = "white";
    scrollingContainer.style.setProperty('--color','#1b1b1c');
    scrollingContainer.style.setProperty("--opacityTransition","opacity");
    setTimeout(()=>{scrollingContainer.style.setProperty('--opacity',1);},"1000");
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
highlightProjects.forEach( (value) => {
    let htmlForTag="";
    value.tags.forEach( (value) => {
        htmlForTag += `<span class = "projectEachTag">${value}</span>`;
    });
    htmlForProject += `
    <span class = "highlight-projects" style = "background-image: url('${value.image}')">
        <div class = "project-name">${value.name}</div>
        <div class = "project-description">${value.description}</div>
        <div class = "project-tags">${htmlForTag}</div>
    </span>
    `;
});

document.querySelector(".projects-container").innerHTML = htmlForProject;