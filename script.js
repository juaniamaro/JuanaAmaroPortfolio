const switchBtn = document.getElementById("themeSwitch");
const langBtn = document.getElementById("langToggle");

const title = document.getElementById("title");
const text = document.getElementById("text");

/* 🌙☀️ THEME SWITCH */
switchBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");

});

/* 🌍 LANGUAGE */
let lang = "es";

langBtn.addEventListener("click", () => {

    if (lang === "es") {

        title.textContent = "Hello, I'm Juana";
        text.textContent = "Welcome to my portfolio";
        langBtn.textContent = "ES";

        lang = "en";

    } else {

        title.textContent = "Hola, soy Juana";
        text.textContent = "Bienvenida a mi portfolio";
        langBtn.textContent = "EN";

        lang = "es";
    }
});
