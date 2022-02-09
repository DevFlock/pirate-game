let inputBox = document.getElementById("nextInput")
let count = 0

function toggleName(name) {
    let nameDiv = document.getElementsByClassName("upNext")[0]
    nameElement = document.createElement("p")
    nameElement.classList.add("names")
    nameElement.innerHTML = name

    nameElement.addEventListener("click", (event) => {
        element = event.target || event.srcElement
        element.remove()
        count--
    })

    nameDiv.appendChild(nameElement)
}

inputBox.addEventListener("keydown", (event) => {
    if (event.keyCode === 13 && inputBox.value != "" && count <= 7) {
        event.preventDefault()
        toggleName(inputBox.value)
        inputBox.value = ""
        console.log(count)
        count++
    }
})