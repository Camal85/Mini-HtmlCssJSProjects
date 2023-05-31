const tabs = document.querySelector(".tabs");
const btns = document.querySelectorAll(".button");
const articles = document.querySelectorAll(".content")

tabs.addEventListener("click", (event) => {
    const id = event.target.dataset.id;
    if (id) {
        btns.forEach((btn) => {
            btn.classList.remove("live")
        });
        event.target.classList.add("live")
        articles.forEach((article) => { article.classList.remove("live") });
        const element = document.getElementById(id);
        element.classList.add("live")
    }
})

let a = (1,5 - 1);
let b = (1.5 - 1);

console.log(a);
console.log(b)

