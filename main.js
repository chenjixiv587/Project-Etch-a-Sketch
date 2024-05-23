// Add the divs
const container = document.querySelector(".container")
const containerWidth = container.offsetWidth;
const askNumber = document.querySelector("button");
let divPerSide = 16;
let divWidth = containerWidth / divPerSide;
let divHeight = containerWidth / divPerSide;
for (let i = 0; i < divPerSide * divPerSide; i++) {
    const div = document.createElement("div");
    div.setAttribute("style", `width: ${divWidth}px; height: ${divHeight}px; border: 1px solid #ccc`);
    container.appendChild(div);
}
const generateRandomColor = () => {
    let red = Math.floor(Math.random() * 255 + 1);
    let green = Math.floor(Math.random() * 255 + 1);
    let blue = Math.floor(Math.random() * 255 + 1);
    return `rgb(${red}, ${green}, ${blue})`;
}
container.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = generateRandomColor();
})

askNumber.addEventListener("click", (e) => {
    const askUserInput = document.createElement("confirm");
    let numberOfPerSide = prompt("What is the number of squares per side");
    while ((Number.isNaN(+numberOfPerSide) || +numberOfPerSide > 100 || +numberOfPerSide < 0) && numberOfPerSide !== null) {
        alert("The number is not we need, try again!");
        numberOfPerSide = prompt("What is the number of squares per side");
    }
    let perSide = +numberOfPerSide;
    if (perSide === 0) {
        perSide++;
    }
    // Clear the origin divs
    

})