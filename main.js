// Add the divs
const container = document.querySelector(".container")
const containerWidth = container.offsetWidth;
let divPerSide = 50;
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