var outputBox = document.getElementById("output");
outputBox.innerHTML = "0";
var numButtons = document.getElementsByClassName("numb");
var _loop_1 = function (i) {
    var numBtn = document.getElementById("" + i + "");
    numBtn.onclick = function () {
        if (outputBox.innerText === "0") {
            outputBox.innerText = "" + i + "";
        }
        else {
            outputBox.innerText += "" + i + "";
        }
    };
};
for (var i = 0; i < numButtons.length; i++) {
    _loop_1(i);
}
document.addEventListener('keydown', function (event) {
    var keyName = event.key;
    var keyCode = event.code;
    var p = ["NumpadAdd", "NumpadSubtract", "NumpadDivide", "NumpadMultiply"];
    for (var i = 0; i < 10; i++) {
        if (keyName === i.toString()) {
            if (outputBox.innerText === "0") {
                outputBox.innerText = "" + i + "";
            }
            else {
                outputBox.innerText += "" + i + "";
            }
        }
    }
    for (var i = 0; i < p.length; i++) {
        if (keyCode === p[i]) {
            if (outputBox.innerText.slice(-1) !== "+" &&
                outputBox.innerText.slice(-1) !== "-" &&
                outputBox.innerText.slice(-1) !== "*" &&
                outputBox.innerText.slice(-1) !== "/") {
                outputBox.innerText += keyName;
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
});
function clearInput() {
    outputBox.innerText = "0";
}
function bckspcInput() {
    outputBox.innerText = outputBox.innerText.slice(0, -1);
    if (outputBox.innerText <= "0") {
        outputBox.innerText = "0";
    }
}
function operator(x) {
    if (outputBox.innerText.slice(-1) !== "+" &&
        outputBox.innerText.slice(-1) !== "-" &&
        outputBox.innerText.slice(-1) !== "*" &&
        outputBox.innerText.slice(-1) !== "/") {
        outputBox.innerText += x;
    }
}
function equals() {
    var word;
    if (outputBox.innerText.includes("+")) {
        word = outputBox.innerText.split('+');
        outputBox.innerText = (parseFloat(word[0]) + parseFloat(word[1])).toString();
        console.log(parseFloat(word[0]) + parseFloat(word[1]));
    }
    else if (outputBox.innerText.includes("-")) {
        word = outputBox.innerText.split('-');
        outputBox.innerText = (parseFloat(word[0]) - parseFloat(word[1])).toString();
        console.log(parseFloat(word[0]) - parseFloat(word[1]));
    }
    else if (outputBox.innerText.includes("*")) {
        word = outputBox.innerText.split('*');
        outputBox.innerText = (parseFloat(word[0]) * parseFloat(word[1])).toString();
        console.log(parseFloat(word[0]) * parseFloat(word[1]));
    }
    else if (outputBox.innerText.includes("/")) {
        word = outputBox.innerText.split('/');
        outputBox.innerText = (parseFloat(word[0]) / parseFloat(word[1])).toString();
        console.log(parseFloat(word[0]) / parseFloat(word[1]));
    }
}
