let numbers = prompt("Hãy nhập một dãy số bất kỳ: ");
if (!/^\d+$/.test(numbers)) {
    document.write("Dãy số không hợp lệ.");
} else {
    let result = "";
    
    for (let i = numbers.length - 1; i >= 0; i--) {
        result += numbers[i];
    }
    document.write(`Chuỗi ${numbers} sau khi đảo là ${result}`);
}
