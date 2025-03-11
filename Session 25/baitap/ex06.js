function isPalindrome() {
    let inputString = prompt("Hãy nhập một chuối để kiểm tra đối xứng: ");
    let reversedString = "";
    for (let i = inputString.length - 1; i >= 0; i--) {
        reversedString += inputString[i];
    }
    alert(inputString === reversedString ? "Chuỗi là đối xứng" : "Chuỗi không đối xứng");
}

isPalindrome();