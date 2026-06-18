document.addEventListener("DOMContentLoaded", () => {

    const switchBtn = document.getElementById("themeSwitch");
    const icon = document.querySelector(".icon");

    const esBtn = document.getElementById("esBtn");
    const enBtn = document.getElementById("enBtn");

    const title = document.getElementById("title");
    const text = document.getElementById("text");

    /* 🌙☀️ THEME */
    switchBtn.addEventListener("click", () => {

        document.body.classList.toggle("light");
        document.body.classList.toggle("dark");

        const isLight = document.body.classList.contains("light");
        icon.textContent = isLight ? "☀️" : "🌙";
    });

    /* 🌍 LANGUAGE */
    function setLanguage(lang){

        if(lang === "es"){
            title.textContent = "Hola, soy Juana";
            text.textContent = "Bienvenida a mi portfolio";

        } else {
            title.textContent = "Hello, I'm Juana";
            text.textContent = "Welcome to my portfolio";
        }
    }

    esBtn.addEventListener("click", () => setLanguage("es"));
    enBtn.addEventListener("click", () => setLanguage("en"));

    /* INIT */
    setLanguage("es");

});

const text = "JUANA AMARO";
const typed = document.getElementById("typed");

let i = 0;

function typeEffect(){

    if(i < text.length){
        typed.textContent += text.charAt(i);
        i++;
        setTimeout(typeEffect, 120);
    }
}

typeEffect();
