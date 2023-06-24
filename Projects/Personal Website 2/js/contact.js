let page = 2;

function lightMode(){
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.querySelectorAll("input").forEach((value)=>{
        value.style.setProperty("--form-bg","#f2f2f2");
        value.style.setProperty("--form-color","black");
    });
    document.querySelector("textarea").style.setProperty("--form-bg","#f2f2f2");
    document.querySelector("textarea").style.setProperty("--form-color","black");
    lightModeTopScroll();
}

function darkMode(){
    document.body.style.backgroundColor = "#1b1b1c";
    document.body.style.color = "white";
    document.querySelectorAll("input").forEach((value)=>{
        value.style.setProperty("--form-bg","#262626");
        value.style.setProperty("--form-color","white");
    });
    document.querySelector("textarea").style.setProperty("--form-bg","#262626");
    document.querySelector("textarea").style.setProperty("--form-color","white");
    darkModeTopScroll();
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzlLWXLQA5Xlf1iTf-4oSw22mXYLOfy7iXqvUTysgmcJ1gKscsL-zPonvrVSvW7qKyA/exec';
const form = document.forms['submit-to-google-sheet'];
const submitMsg = document.querySelector("#msg");

form.addEventListener('submit', e => {
e.preventDefault();
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        submitMsg.innerHTML = "Message Sent Successfully";
        setTimeout( ()=>{
            submitMsg.innerHTML = "";
        }, 5000);
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
});

function submitClicked(){
    var nameInput = document.forms["submit-to-google-sheet"]["Name"];
    var emailInput = document.forms["submit-to-google-sheet"]["Email"];
    var messageInput = document.forms["submit-to-google-sheet"]["Message"];

    if(nameInput==='' || messageInput==='')
    {
        return;
    }
    var emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailFormat.test(emailInput.value)) {
        return;
    }
    submitMsg.innerHTML = `<i class="fa-solid fa-spinner fa-spin-pulse" style="font-size:50px"></i>`;
    console.log("clicked");
}