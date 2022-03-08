// Implementar solución aquí

const hexa = "0123456789abcdef";

function randomColor() {
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += hexa.charAt(Math.floor(Math.random() * hexa.length));
    }

    return color;
}

document.querySelector("#btn").addEventListener("click", function () {
    let color = randomColor();

    document.querySelector("#hex-value").textContent = color;
    document.body.style.backgroundColor = color;
});