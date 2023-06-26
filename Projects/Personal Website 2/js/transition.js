window.onload = () => {
    const transitionDiv = document.querySelector(".transition");
    const anchor = document.querySelectorAll(".headerLink");
    setTimeout( () => {
        transitionDiv.classList.remove('is-active');
    }, 500);
    
    anchor.forEach((value)=> {
        value.addEventListener('click', e => {
            e.preventDefault();
            let target = e.target.href;

            transitionDiv.classList.add('is-active');

            setTimeout( () => {
                window.location.href = target;
            }, 500);
        });
    });
};