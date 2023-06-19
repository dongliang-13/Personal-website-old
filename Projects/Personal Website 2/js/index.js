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
highlightProjects.forEach( (value,index) => {
    let htmlForTag="";
    value.tags.forEach( (value) => {
        htmlForTag += `<span class = "projectEachTag">${value}</span>`;
    });
    let indexs,left,right;
    if(index%2==1)
    {
        indexs=1;
        left="fade-left";
        right="fade-right";
    }
    else
    {
        indexs=0;
        left="fade-right";
        right="fade-left";
    }
    htmlForProject += `
    <div class = "project-inner-container">
        <div class="project-inner-left left-${indexs}" data-aos="${left}" data-aos-easing="ease-in">
            <img src="images/test.jpeg">
        </div>
        <div class="project-inner-right right-${indexs}" data-aos="${right}" data-aos-easing="ease-in">
            <div class = "project-inner-right-name">${value.name}</div>
            <div class = "project-inner-right-tags">${htmlForTag}</div>
            <div class = "project-inner-right-description">${value.description}</div>
            <div class = "project-inner-right-availableText">${value.availableText}</div>
        </div>
    </div>
`;  
});
document.querySelector(".projects-container").innerHTML = htmlForProject;