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

const scriptURL = 'https://script.google.com/macros/s/AKfycbzcSKEBgE6YKNuEophwTSDxGPbvNn_CKdz_OVinTuUXPNtwpbZ1XSGH3Ve_CQfDrlFi/exec';
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