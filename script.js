document.addEventListener("DOMContentLoaded", () => {

    const switchBtn = document.getElementById("themeSwitch");
    const icon = document.querySelector(".icon");

    const esBtn = document.getElementById("esBtn");
    const enBtn = document.getElementById("enBtn");

    const title = document.getElementById("title");
    const text = document.getElementById("text");

    /* =========================
       🌙☀️ THEME SWITCH
    ========================= */

    switchBtn.addEventListener("click", () => {

        document.body.classList.toggle("light");
        document.body.classList.toggle("dark");

        const isLight = document.body.classList.contains("light");
        icon.textContent = isLight ? "☀️" : "🌙";
    });

    /* =========================
       🌍 LANGUAGE SYSTEM
    ========================= */

    function setLanguage(lang){

        const menu = {
            es: {
                home: "Inicio",
                about: "Sobre mí",
                projects: "Proyectos",
                blog: "Divulgación",
                contact: "Contacto"
            },
            en: {
                home: "Home",
                about: "About me",
                projects: "Projects",
                blog: "Divulgation",
                contact: "Contact"
            }
        };

        const data = menu[lang];

        title.textContent = data.title;
        text.textContent = data.text;

        document.getElementById("m-home").textContent = data.home;
        document.getElementById("m-about").textContent = data.about;
        document.getElementById("m-projects").textContent = data.projects;
        document.getElementById("m-blog").textContent = data.blog;
        document.getElementById("m-contact").textContent = data.contact;
    }

    esBtn.addEventListener("click", () => setLanguage("es"));
    enBtn.addEventListener("click", () => setLanguage("en"));

    /* INIT LANGUAGE */
    setLanguage("es");

    /* =========================
       ✍️ TYPING EFFECT
    ========================= */

    const textTyped = "JUANA AMARO";
    const typed = document.getElementById("typed");

    let i = 0;

    function typeEffect(){

        if(i < textTyped.length){
            typed.textContent += textTyped.charAt(i);
            i++;
            setTimeout(typeEffect, 120);
        }
    }

    typeEffect();
});
const liquid = document.getElementById("liquid");

document.addEventListener("mousemove", (e) => {

    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    liquid.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
});
