const esBtn = document.getElementById("esBtn");
const enBtn = document.getElementById("enBtn");

const title = document.getElementById("title");
const text = document.getElementById("text");

let lang = "es";

esBtn.addEventListener("click", () => {

    lang = "es";

    title.textContent = "Hola, soy Juana";
    text.textContent = "Bienvenida a mi portfolio";
});

enBtn.addEventListener("click", () => {

    lang = "en";

    title.textContent = "Hello, I'm Juana";
    text.textContent = "Welcome to my portfolio";
});
