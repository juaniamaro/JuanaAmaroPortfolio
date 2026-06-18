const switchBtn = document.getElementById("themeSwitch");
const icon = document.querySelector(".icon");

const esBtn = document.getElementById("esBtn");
const enBtn = document.getElementById("enBtn");

const title = document.getElementById("title");
const text = document.getElementById("text");

let lang = "es";

/* =========================
   🌙☀️ THEME SYSTEM
========================= */

function updateThemeIcon() {
    const isLight = document.body.classList.contains("light");
    icon.textContent = isLight ? "☀️" : "🌙";
}

switchBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");

    updateThemeIcon();
});

/* =========================
   🌍 LANGUAGE SYSTEM
========================= */
document.addEventListener("DOMContentLoaded", () => {

    const esBtn = document.getElementById("esBtn");
    const enBtn = document.getElementById("enBtn");

    const title = document.getElementById("title");
    const text = document.getElementById("text");

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

    setLanguage("es");
});
