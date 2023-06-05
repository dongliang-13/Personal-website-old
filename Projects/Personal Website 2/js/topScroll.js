const topScroll = document.querySelector("#topScroll");

topScroll.innerHTML = `<i class="fa-solid fa-arrow-up" id = "arrow-up"></i>`;

var isMouseOverDiv = false;

topScroll.addEventListener('mouseover', function() {
    isMouseOverDiv = true;
  });
  
topScroll.addEventListener('mouseout', function() {
    isMouseOverDiv = false;
});

let interval = [];
window.addEventListener('scroll', function() {
    if(interval[0]){
        clearInterval(interval[0]);
    }
    if (window.pageYOffset === 0 && !isMouseOverDiv){
        topScroll.style.setProperty("--topScrollOpacity","0");
        interval[0] = setTimeout(function()
        {
            topScroll.style.visibility = "hidden";
        } ,"1000");
    }
    else if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight && !isMouseOverDiv) {
        topScroll.style.setProperty("--topScrollOpacity","1");
        topScroll.style.visibility = "visible";
    }
    else if (!isMouseOverDiv)
    {
        topScroll.style.setProperty("--topScrollOpacity","0.3");
        topScroll.style.visibility = "visible";
    }
});

topScroll.addEventListener("click",function(){
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
    topScroll.style.setProperty("--topScrollOpacity","0");
    if(interval[0]){
        clearInterval(interval[0]);
    }
    interval[0] = setTimeout(function()
    {
        topScroll.style.visibility = "hidden";
    } ,"1000");
});