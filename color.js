const colors = ["green", "#5f13a7", "rgba(133,122,200)", "#f15025", "red", "blue", "#f15075", "#e10076"]

const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber()
    console.log(randomNumber)

    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})

function getRandomNumber (){
    return Math.floor(Math.random() * colors.length)
}

