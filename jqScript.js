var numButtons = $(".numb")
var outputBox = $("#output")
var opbStr = "0"

$(document).ready(function() {
    outputBox.text(opbStr)

    for(let i = 0; i < numButtons.length; i++) {
        $("#" + i + "").click(function () {

            if(opbStr === "0") {
                opbStr = i.toString()
                outputBox.text(opbStr)
            } else {
                opbStr = opbStr + i.toString()
                outputBox.text(opbStr)
            }
        })
    }

    $(document).keypress(function (e) {
        var keyName = e.key;
        var keyCode = e.code;
        var p = ["NumpadAdd", "NumpadSubtract", "NumpadDivide", "NumpadMultiply"]

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
                if(opbStr.slice(-1) !== "+" &&
                    opbStr.slice(-1) !== "-" &&
                    opbStr.slice(-1) !== "*" &&
                    opbStr.slice(-1) !== "/") {
                    opbStr += keyName
                    outputBox.text(opbStr)
                }
            }
        }
    })

    $(document).keyup(function (e) {
        var keyCode = e.code;

        switch (keyCode) {
            case "Backspace":
                $.fn.bckspcInput();
                break;

            case "Delete":
                $.fn.clearInput();
                break;

            case "Enter":
                $.fn.equals();
                break;

            case "NumpadEnter":
                $.fn.equals();
                break;
        }

    })
})

$.fn.bckspcInput = function () {
    opbStr = opbStr.slice(0, -1)
    outputBox.text(opbStr)

    if (opbStr <= 0) {
        opbStr = "0"
        outputBox.text(opbStr)
    }
}

$.fn.clearInput = function() {
    opbStr = "0"
    outputBox.text(opbStr)
}
$.fn.operator = function(x) {
    // var operatorBtn = [ 'plus', 'minus', 'divide', 'times1']
    opbStr = x
    outputBox.text(opbStr)
}

$.fn.equals = function () {
    var op;
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