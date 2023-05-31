const circle = document.querySelectorAll(".circle");
console.log(circle);
let activeLight = 0;

setInterval(() => {
    changeLight();
}, 3000);

function changeLight() {
    circle[activeLight].className = "circle";
    activeLight++;
    if (activeLight > 2) {
        activeLight = 0
    }

    const currentLight = circle[activeLight];
    currentLight.classList.add(currentLight.getAttribute("color"))
}