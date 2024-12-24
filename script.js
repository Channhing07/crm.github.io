const snowflakes = document.querySelectorAll(".snowflake");
const lightsButton = document.getElementById("lightsButton");

function animateSnowflakes() {
    snowflakes.forEach((snowflake) => {
        snowflake.style.left = Math.random() * 100 + "vw";
        snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
    });
}

animateSnowflakes();

lightsButton.addEventListener("click", () => {
    document.body.classList.toggle("lights");
});