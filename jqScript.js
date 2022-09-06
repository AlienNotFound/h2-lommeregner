const numButtons = $(".numb")
const outputBox = $("#output")
let opbStr = "0"

outputBox.text(opbStr)

for(let i = 0; i < numButtons.length; i++) {
    $("#" + i + "").on('click', function () {

        if(opbStr === "0") {
            opbStr = i.toString()
            outputBox.text(opbStr)
        } else {
            opbStr = opbStr + i.toString()
            outputBox.text(opbStr)
        }
    })
}

$(document).on('keypress', function (e) {
    const keyName = e.key;
    const keyCode = e.code;
    const p = ["NumpadAdd", "NumpadSubtract", "NumpadDivide", "NumpadMultiply"]

    for(let i = 0; i < 10; i++) {
         if (parseInt(keyName) === i) {
             if (opbStr === "0") {
                 opbStr = i.toString()
                 outputBox.text(opbStr)
             } else {
                 opbStr = opbStr + i.toString()
                 outputBox.text(opbStr)
             }
         }
    }

    for(let i = 0; i < p.length; i++) {
        if (keyCode === p[i]) {
            if(outputBox.text().slice(-1) !== "+" &&
                outputBox.text().slice(-1) !== "-" &&
                outputBox.text().slice(-1) !== "*" &&
                outputBox.text().slice(-1) !== "/") {
                opbStr += keyName
                outputBox.text(opbStr)
            }
        }
    }
})

$(document).on('keyup', function (e) {
    const keyCode = e.code;

    switch (keyCode) {
        case "Backspace":
            backspaceInput();
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

function backspaceInput() {
    opbStr = opbStr.slice(0, -1)
    outputBox.text(opbStr)

    if (opbStr <= 0) {
        opbStr = "0"
        outputBox.text(opbStr)
    }
}

function clearInput() {
    opbStr = "0"
    outputBox.text(opbStr)
}

$(".opId").each(function () {
    $(this).on('click', () => {
        if(outputBox.text().slice(-1) !== "+" &&
            outputBox.text().slice(-1) !== "-" &&
            outputBox.text().slice(-1) !== "*" &&
            outputBox.text().slice(-1) !== "/") {
            opbStr += $(this).text()
            outputBox.text(opbStr)
        }
    })
})

$("#equals").on('click', () => {
    equals()
})

$("#clear").on('click', () => {
    clearInput()
})

function equals() {
    let op;
    if(opbStr.includes("+"))
    {
        op = outputBox.text().split('+')
        opbStr = parseInt(op[0]) + parseInt(op[1])
        outputBox.text(opbStr)
    } else if(opbStr.includes("-"))
    {
        op = outputBox.text().split('-')
        opbStr = parseInt(op[0]) - parseInt(op[1])
        outputBox.text(opbStr)
    } else if(opbStr.includes("*"))
    {
        op = outputBox.text().split('*')
        opbStr = parseInt(op[0]) * parseInt(op[1])
        outputBox.text(opbStr)
    } else if(opbStr.includes("/"))
    {
        op = outputBox.text().split('/')
        opbStr = parseInt(op[0]) / parseInt(op[1])
        outputBox.text(opbStr)
    }
}