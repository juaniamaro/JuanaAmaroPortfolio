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
.liquid-circle{
    width:180px;
    height:180px;
    border-radius:50%;
    position:relative;
    overflow:hidden;

    background: radial-gradient(circle at 30% 30%, #a855f7, #22d3ee);

    filter: blur(0.2px);
    box-shadow: 0 0 25px rgba(168,85,247,0.5);

    transition: transform 0.2s ease;
}

/* “líquido interno” */
.liquid-circle::before{
    content:"";
    position:absolute;
    width:250px;
    height:250px;
    top:50%;
    left:50%;

    background: radial-gradient(circle at 30% 30%, #c084fc, #0ea5e9);
    border-radius:40% 60% 60% 40% / 40% 40% 60% 60%;

    transform:translate(-50%, -50%);
    animation:blob 6s infinite linear;
    opacity:0.9;
}

/* animación base del líquido */
@keyframes blob{
    0%{
        border-radius:40% 60% 60% 40% / 40% 40% 60% 60%;
        transform:translate(-50%, -50%) rotate(0deg);
    }
    50%{
        border-radius:60% 40% 40% 60% / 60% 60% 40% 40%;
        transform:translate(-50%, -50%) rotate(180deg);
    }
    100%{
        border-radius:40% 60% 60% 40% / 40% 40% 60% 60%;
        transform:translate(-50%, -50%) rotate(360deg);
    }
}
