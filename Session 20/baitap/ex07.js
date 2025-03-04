let n = parseInt(prompt("Nhập số lượng số Fibonacci cần hiển thị:"));
if (!isNaN(n) && n > 0) {
    let num1 = 1, num2 = 1; // Hai số Fibonacci đầu tiên
    let result = "";

    if (n >= 1) result += num1 + " ";
    if (n >= 2) result += num2 + " ";

    for (let i = 3; i <= n; i++) {
        let sum = num1 + num2;
        result += sum + " ";
        num1 = num2;
        num2 = sum;
    }

    console.log(result);
} else {
    console.log("Vui lòng nhập một số nguyên dương.");
}
