const topScroll = document.querySelector("#topScroll");

topScroll.innerHTML = `<i class="fa-solid fa-arrow-up" id = "arrow-up"></i>`;

var isMouseOverDiv = false;

topScroll.addEventListener('mouseover', function() {
    isMouseOverDiv = true;
  });
  
topScroll.addEventListener('mouseout', function() {
    isMouseOverDiv = false;
    scrollNow();
});

let interval = [];

function scrollNow(){
    if(interval[0]){
        clearInterval(interval[0]);
    }
    if (window.scrollY === 0 && !isMouseOverDiv){
        topScroll.style.setProperty("--topScrollOpacity","0");
        interval[0] = setTimeout(function()
        {
            topScroll.style.setProperty("--topScrollVisibility","hidden");
        } ,"200");
    }
    else if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !isMouseOverDiv) {
        topScroll.style.setProperty("--topScrollOpacity","1");
        topScroll.style.setProperty("--topScrollVisibility","visible");
    }
    else if (!isMouseOverDiv)
    {
        topScroll.style.setProperty("--topScrollOpacity","0.3");
        topScroll.style.setProperty("--topScrollVisibility","visible");
    }
}

window.addEventListener('scroll', function() {
    scrollNow();
});

topScroll.addEventListener("click",function(){
    topScroll.style.setProperty("--topScrollVisibility","hidden");
    setTimeout(function(){ 
            window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    },"200");
});

function lightModeTopScroll(){
    topScroll.style.setProperty("--topScrollColor", "black");
}

function darkModeTopScroll(){
    topScroll.style.setProperty("--topScrollColor", "white");
}

window.addEventListener("load", () => {
    if(window.getComputedStyle(document.body).color == "rgb(0, 0, 0)"){
        lightModeTopScroll();
    }
    else{
        darkModeTopScroll();
    }
});