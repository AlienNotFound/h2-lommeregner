var outputBox = document.getElementById("output")
outputBox.value = "0"

var numButtons = document.getElementsByClassName("numb")

for (let i = 1; i < numButtons.length + 1; i++) {
    document.getElementById(i).onclick = function () {
        if(outputBox.value === "0") {
            outputBox.value = "" + i + ""
        } else {
            outputBox.value += "" + i + ""
        }
    }
}

document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    if (name === 0) {
        console.log(name)
    }
})

document.getElementById("0").onclick = function () {
    if(outputBox.value !== "0") {
        outputBox.value += 0
    }
}

function plus() {
    outputBox.value += "+"
}

function minus() {
    outputBox.value += "-"
}

function times() {
    outputBox.value += "*"
}
function divide() {
    outputBox.value += "/"
}

function equals() {
    if(outputBox.value.includes("+"))
    {
        word = outputBox.value.split('+')
        outputBox.value = parseInt(word[0]) + parseInt(word[1])

        console.log(parseInt(word[0]) + parseInt(word[1]))
    } else if(outputBox.value.includes("-")){
        word = outputBox.value.split('-')
        outputBox.value = parseInt(word[0]) - parseInt(word[1])

        console.log(parseInt(word[0]) - parseInt(word[1]))
    } else if(outputBox.value.includes("*")){
        word = outputBox.value.split('*')
        outputBox.value = parseInt(word[0]) * parseInt(word[1])

        console.log(parseInt(word[0]) * parseInt(word[1]))
    } else if(outputBox.value.includes("/")){
        word = outputBox.value.split('/')
        outputBox.value = parseInt(word[0]) / parseInt(word[1])

        console.log(parseInt(word[0]) / parseInt(word[1]))
    }
}