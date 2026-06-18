const themeBtn = document.getElementById("themeToggle");
const langBtn = document.getElementById("langToggle");

const title = document.getElementById("title");
const text = document.getElementById("text");

/* 🌙 DARK MODE */
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    themeBtn.textContent =
        document.body.classList.contains("light") ? "☀️" : "🌙";
});

/* 🌍 IDIOMA */
let lang = "es";

langBtn.addEventListener("click", () => {

    if (lang === "es") {

        title.textContent = "Hello, I'm Juana";
        text.textContent = "Welcome to my portfolio";

        langBtn.textContent = "EN";
        lang = "en";

    } else {

        title.textContent = "Hola, soy Juana";
        text.textContent = "Bienvenida a mi portfolio";

        langBtn.textContent = "ES";
        lang = "es";
    }
});
