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