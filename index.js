/**variables */
var headerClickArr = ["Today is", getDays() ,getMonths()+" "+ getDates()];
var headerClickCount = 0;
var noteBarOut = false;

/**onload */
function onload()
{
    /**Will see */
}

/**changes header color when scrolled */
window.addEventListener("scroll", function() {
    const div = this.document.getElementById("header");
    const div1 = this.document.getElementById("right-header");
    if (window.scrollY!=0)
    {
        div.style.backgroundColor="#1A2238";
        div1.style.border = "2px solid white";
        div.style.color="white";
        div1.style.color="white";
    }
    else
    {
        div.style.backgroundColor="white";
        div.style.color="black";
        div1.style.border = "2px solid black";
        div1.style.color="black";
    }
  }
);

/**returns the day of week */
function getDays()
{
    const date = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = date.getDay();
    return days[day];
}

/**returns the current month */
function getMonths()
{
    const date = new Date(); 
    var months = ["January","February","March","April","May","June","July", "August","September","October","November","December"];
    const month = date.getMonth();
    return months[month];
}

/**returns the current date */
function getDates()
{
    const date = new Date();
    const day = date.getDate();
    return day;
}

/**adjusts the text when rightHeader is clicked */
async function rightHeaderClick()
{
    const div = document.getElementById("right-header");
    div.style.transition = "all 0.3s ease-in-out";
    if (window.scrollY==0)
    {
        div.style.color = "rgba(0,0,0,0)";
        await new Promise(resolve => setTimeout(resolve, 300));
        div.innerHTML = ""+headerClickArr[headerClickCount%3];
        div.style.color = "rgba(0,0,0,100)";
    }
    else
    {
        div.style.color = "rgba(255,255,255,0)";
        await new Promise(resolve => setTimeout(resolve, 300));
        div.innerHTML = ""+headerClickArr[headerClickCount%headerClickArr.length];
        div.style.color = "rgba(255,255,255,100)";
    }
    div.style.transition = "all 1s ease-in=-out";
    headerClickCount++;
}

function notebar()
{
    const div = document.getElementsByClassName("note")[0];
    const div1 = document.getElementsByClassName("note-container")[0];
    const div2 = document.getElementsByClassName("note-bar")[0];
    if(!noteBarOut)
    {
        div2.innerHTML = "<";
        div1.style.animation="note-in 1s linear";
        div1.style.animationFillMode = 'forwards';
    }
    else
    {
        div2.innerHTML = ">";
        div1.style.animation="note-out 1s linear";
        div1.style.animationFillMode = 'forwards';
    }
    noteBarOut=!noteBarOut;
}

function hoverInfo(number, isOn)
{
    const name = "award-" + number + "-info";
    const div = document.getElementsByClassName(name)[0];
    isOn ? div.style.opacity = "1" : div.style.opacity = "0";
}

function scrollToSection(sectionId) {
    $("html, body").animate({
      scrollTop: $("#" + sectionId).offset().top
    }, 300);
}

function aboutMe() {
    document.getElementById("page2").style.display = "none";
    document.getElementById("page1").style.display = "block";
    $("html, body").animate({scrollTop: 0 }, 100);
}

function project()
{
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "block";
    $("html, body").animate({scrollTop: 0 }, 100);
}