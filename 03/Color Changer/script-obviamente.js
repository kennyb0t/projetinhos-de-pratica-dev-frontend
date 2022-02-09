const colors = ["green", "red", "rgba(133,122,200)", "#f15025", ];
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click", function() {
    // Ele puxa um número aleatório entre 0 - 3 pela função 'getRandomNumber'. :D
    const randomNumber = getRandomNumer();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumer() {
    return Math.floor(Math.random() * colors.length);
}