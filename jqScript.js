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
})