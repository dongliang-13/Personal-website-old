const footerIcon = [
    {
        icon: "linkedin",
        link: "https://www.linkedin.com/in/dongliang13/",
    },
    {
        icon: "github",
        link: "https://github.com/sayiongod",
    },
    {
        icon: "mail",
        link: "mailto:sayiongod@gmail.com",
    },
];

const footerDiv = document.querySelector("#footer");

let iconHTML = "";

footerIcon.forEach( (value) => {
    iconHTML += `<span class="icon-click" onclick="window.open('${value.link}','_blank');"><i data-feather="${value.icon}"></i></span>`;
});

let footerHTML = `
    <div class="footer-bottom">
        <div class="footer-bottom-left">
            © 2023 | Coded and designed by Dong Liang
        </div>
        <div class="footer-bottom-right">
            ${iconHTML}
        </div>
    </div>
`;

footerDiv.innerHTML = footerHTML;

feather.replace();