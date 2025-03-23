const inputText = document.getElementById("inputText");
const charCount = document.getElementById("charCount");
const checkBtn = document.getElementById("checkBtn");

checkBtn.addEventListener("click", function() {
    const text = inputText.value;
    const length = text.length;
    charCount.textContent = length + " ký tự";
});