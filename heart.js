// Optional JavaScript: You can add interactivity, like clicking to change the heart color or animate it.
const heart = document.getElementById("heart");

// Example: Toggle heart color on click
heart.addEventListener("click", () => {
    heart.style.backgroundColor = heart.style.backgroundColor === "red" ? "pink" : "red";
    heart.style.animation = heart.style.animation === "pulse 1s infinite" ? "" : "pulse 1s infinite";
});