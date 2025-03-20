let count = 0;
    document.getElementsByClassName("buttonn")[0].addEventListener("click", () => {
    count++;
    document.getElementById("number").innerHTML = "Số lần bấm: " + count;
    });