var outputBox = document.getElementById("output")
outputBox.innerText = "0"

var numButtons = document.getElementsByClassName("numb")

for (let i = 0; i < numButtons.length; i++) {
    document.getElementById("" + i + "").onclick = function () {
        console.log(i)
        if(outputBox.innerText === "0") {
            outputBox.innerText = "" + i + ""
        } else {
            outputBox.innerText += "" + i + ""
        }
    }
}

document.getElementById("0").onclick = function () {
    if(outputBox.innerText !== "0") {
        outputBox.innerText += 0
    }
}

document.addEventListener('keydown', (event) => {
    var keyName = event.key;
    var keyCode = event.code;
    var p = ["NumpadAdd", "NumpadSubtract", "NumpadDivide", "NumpadMultiply"]

    console.log(keyCode)

    for (let i = 0; i < 10; i++) {
        if (parseInt(keyName) === i) {
            if(outputBox.innerText === "0") {
                outputBox.innerText = keyName
            } else {
                outputBox.innerText += keyName
            }
        }
    }

    for(let i = 0; i < p.length; i++) {
        if (keyCode === p[i]) {
            if(outputBox.innerText !== "0") {
                outputBox.innerText += keyName
            }
        }
    }
        switch (keyCode) {
            case "Backspace":
                bckspcInput();
                console.log("test")
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

    console.log(keyCode)
})

function clearInput() {
    outputBox.innerText = "0"
    document.getElementById("xtra").innerText = ""
}

function bckspcInput() {
    outputBox.innerText = outputBox.innerText.slice(0, -1)
    document.getElementById("xtra").innerText = ""
    if (outputBox.innerText <= 0) {
        outputBox.innerText = "0"
    }
}

function operator(x) {
    outputBox.innerText += x
}

function equals() {
    if(outputBox.innerText.includes("+"))
    {
        word = outputBox.innerText.split('+')
        outputBox.innerText = parseInt(word[0]) + parseInt(word[1])

        console.log(parseInt(word[0]) + parseInt(word[1]))
    } else if(outputBox.innerText.includes("-")){
        word = outputBox.innerText.split('-')
        outputBox.innerText = parseInt(word[0]) - parseInt(word[1])

        console.log(parseInt(word[0]) - parseInt(word[1]))
    } else if(outputBox.innerText.includes("*")){
        word = outputBox.innerText.split('*')
        outputBox.innerText = parseInt(word[0]) * parseInt(word[1])

        console.log(parseInt(word[0]) * parseInt(word[1]))
    } else if(outputBox.innerText.includes("/")){
        word = outputBox.innerText.split('/')
        outputBox.innerText = parseInt(word[0]) / parseInt(word[1])

        console.log(parseInt(word[0]) / parseInt(word[1]))
    }

    if(outputBox.innerText === "69" || outputBox.innerText === "420" || outputBox.innerText === "58008" || outputBox.innerText === "80085") {
        document.getElementById("xtra").innerText = "Nice."
    } else {
        document.getElementById("xtra").innerText = ""
    }
}

