let num = Number(prompt("Hãy nhập một số để kiểm tra : "));

if (isNaN(num) || num < 0 || !Number.isInteger(num)) {
    document.write(`Dữ liệu nhập vào không hợp lệ.`);
} else {
    document.write(`Các số chia hết cho 5 từ 1 đến ${num} là: `);
    for (let i = 1; i <= num; i++) {
        if (i % 5 == 0) {
            document.write(i + " ");
        }
    }
}
