window.onload = () => {

    const star = document.querySelector(".shooting-star");

    // reinicio animación para asegurar timing
    setTimeout(() => {
        star.style.animation = "shoot 3s linear forwards";
    }, 500);

};
