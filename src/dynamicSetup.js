var boxSize = 100;

for (let i = 0; i < 9; i++) {
    var newDiv = document.createElement("div")
    newDiv.className = "test"
    newDiv.style.margin = "2px"
    newDiv.style.lineHeight = boxSize + "px"
    newDiv.style.boxSizing = "border-box"
    newDiv.style.width = boxSize + "px"
    newDiv.style.height = boxSize + "px"
    newDiv.style.border = "1px solid #000"
    newDiv.style.display = "inline-block"
    newDiv.style.textAlign = "center"
    newDiv.style.verticalAlign = "center"
    newDiv.innerText = i + 1;
    newDiv.setAttribute("id", i + 1)

    document.getElementById("main").append(newDiv)}

    document.getElementById(i + 1).onmouseenter = function () {
        document.getElementById(i + 1).style.backgroundColor = "gray"
    }

    document.getElementById(i + 1).onmouseleave = function () {
        document.getElementById(i + 1).style.backgroundColor = "white"
    }
// document.getElementById("title").style.color = "black"