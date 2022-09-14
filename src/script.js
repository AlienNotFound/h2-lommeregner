const outputBox = document.getElementById("output")
outputBox.innerText = "0"

const numButtons = document.getElementsByClassName("numb")

for (let i = 0; i < numButtons.length; i++) {
    document.getElementById("" + i + "").onclick = function () {
        if (outputBox.innerText === "0") {
            outputBox.innerText = "" + i + ""
        } else {
            outputBox.innerText += "" + i + ""
        }
    }
}

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    const keyCode = event.code;
    const p = ["NumpadAdd", "NumpadSubtract", "NumpadDivide", "NumpadMultiply"]

    for (let i = 0; i < numButtons.length; i++) {
        document.getElementById("" + i + "").onclick = function () {
            if(outputBox.innerText === "0") {
                outputBox.innerText = "" + i + ""
            } else {
                outputBox.innerText += "" + i + ""
            }
        }

        if (parseFloat(keyName) === i) {
            if(outputBox.innerText === "0") {
                outputBox.innerText = keyName
            } else {
                outputBox.innerText += keyName
            }
        }
    }

    for(let i = 0; i < p.length; i++) {
        if (keyCode === p[i]) {
            if(outputBox.innerText.slice(-1) !== "+" &&
                outputBox.innerText.slice(-1) !== "-" &&
                outputBox.innerText.slice(-1) !== "*" &&
                outputBox.innerText.slice(-1) !== "/") {
                outputBox.innerText += keyName
            }
        }
    }

    switch (keyCode) {
            case "Backspace":
                bckspcInput();
                break;

            case "Delete":
                clearInput();
                break;

            case "Enter":
                equals();
                break;

            case "NumpadEnter":
                equals();
                break;
        }
})

function clearInput() {
    outputBox.innerText = "0"
}

function bckspcInput() {
    outputBox.innerText = outputBox.innerText.slice(0, -1)
    if (outputBox.innerText <= 0) {
        outputBox.innerText = "0"
    }
}

function operator(x) {
    if(outputBox.innerText.slice(-1) !== "+" &&
        outputBox.innerText.slice(-1) !== "-" &&
        outputBox.innerText.slice(-1) !== "*" &&
        outputBox.innerText.slice(-1) !== "/") {
        outputBox.innerText += x
    }
}

function equals() {
    let word;
    if(outputBox.innerText.includes("+"))
    {
        word = outputBox.innerText.split('+')
        outputBox.innerText = (parseFloat(word[0]) + parseFloat(word[1])).toString()

        console.log(parseFloat(word[0]) + parseFloat(word[1]))
    } else if(outputBox.innerText.includes("-")){
        word = outputBox.innerText.split('-')
        outputBox.innerText = (parseFloat(word[0]) - parseFloat(word[1])).toString()

        console.log(parseFloat(word[0]) - parseFloat(word[1]))
    } else if(outputBox.innerText.includes("*")){
        word = outputBox.innerText.split('*')
        outputBox.innerText = (parseFloat(word[0]) * parseFloat(word[1])).toString()

        console.log(parseFloat(word[0]) * parseFloat(word[1]))
    } else if(outputBox.innerText.includes("/")){
        word = outputBox.innerText.split('/')
        outputBox.innerText = (parseFloat(word[0]) / parseFloat(word[1])).toString()

        console.log(parseFloat(word[0]) / parseFloat(word[1]))
    }
}