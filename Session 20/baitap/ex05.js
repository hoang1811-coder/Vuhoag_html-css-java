let num1 = Number(prompt("hãy nhập số thứ nhất: "));
let num2 = Number(prompt("hãy nhập số thứ hai:"));
if(isNaN(num1) || isNaN(num2) || num1 > 0 || !Number.isInteger(num1)|| !Number.isInteger(num2)){
    document.write("Không hợp lệ.")
} else {
    let result = 1;
    if (num2 >=0) {
        for (let i = 0; i < num2; i++) {
            result *= num1;      
        }
    } else {
        for (let i = 0; i < -num2; i++) {
            result *= num1;
        }
        result = 1 / result;
    }
    document.write(`Kết quả: ${result}`);
}