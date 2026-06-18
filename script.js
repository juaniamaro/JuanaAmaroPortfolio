
window.onload = () => {

    const dot = document.querySelector(".light-dot");
    const text = document.querySelector(".text");

    setTimeout(() => {
        text.style.filter = "drop-shadow(0 0 10px white)";
    }, 2500);

};
