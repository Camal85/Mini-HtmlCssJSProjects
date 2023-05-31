const button = document.querySelector(".btn");
button.addEventListener("click", hideText);

function hideText() {
    const text = document.querySelector(".text");
    text.hidden = true;

    const button = document.querySelector(".btn");
    button.removeEventListener("click", hideText);
    button.addEventListener("click", showText);
}

function showText() {
    const text = document.querySelector(".text");
    text.hidden = false;

    const button = document.querySelector(".btn");
    button.removeEventListener("click", showText);
    button.addEventListener("click", hideText);
}