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
function setLanguage(lang){

    if(lang === "es"){

        title.textContent = "Hola, soy Juana";
        text.textContent = "Bienvenida a mi portfolio";

        esBtn.classList.add("active");
        enBtn.classList.remove("active");

    }else{

        title.textContent = "Hello, I'm Juana";
        text.textContent = "Welcome to my portfolio";

        enBtn.classList.add("active");
        esBtn.classList.remove("active");
    }
}

esBtn.addEventListener("click", () => setLanguage("es"));
enBtn.addEventListener("click", () => setLanguage("en"));

// init
setLanguage("es");
