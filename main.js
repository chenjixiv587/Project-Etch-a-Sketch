// Add the divs
const container = document.querySelector(".container")
const containerWidth = container.offsetWidth;
const askNumber = document.querySelector("button");
let divPerSide = 16;
const generateRandomColor = () => {
    let red = Math.floor(Math.random() * 255 + 1);
    let green = Math.floor(Math.random() * 255 + 1);
    let blue = Math.floor(Math.random() * 255 + 1);
    return `rgb(${red}, ${green}, ${blue})`;
}
const generateRandomColorLittle = () => {
    let red = Math.floor(Math.random() * 255 + 1);
    let green = Math.floor(Math.random() * 255 + 1);
    let blue = Math.floor(Math.random() * 255 + 1);
    let randomNum = Math.random() * 0.5;
    return `rgba(${red}, ${green}, ${blue}, ${randomNum})`;
}
const generateNewDiv = (perSideDivs) => {
    let divWidth = containerWidth / perSideDivs;
    let divHeight = containerWidth / perSideDivs;
    for (let i = 0; i < perSideDivs * perSideDivs; i++) {
        const div = document.createElement("div");
        div.setAttribute("style", `width: ${divWidth}px; height: ${divHeight}px; border: 1px solid #ccc;`);
        container.appendChild(div);
    }
}
generateNewDiv(16);


//When only container exists, the backgroundColor is #eee;
container.addEventListener("mouseover", (e) => {
    if (e.target === e.currentTarget) {
        e.target.style.backgroundColor = "#fff";
    }
    else {
        e.target.style.backgroundColor = generateRandomColor();
    }
})

container.addEventListener("mouseout", (e) => {
    e.target.style.backgroundColor = "#fff";
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
    Array.from(e.target.parentNode.nextElementSibling.children).forEach(div => div.remove());
    generateNewDiv(perSide);

})