let number = Number(prompt("Mời bạn nhập số muốn kiểm tra: "));
if (number % 3 === 0 || number % 5 ===0) {
    document.write(`Số ${number} chia hết cho cả 3 và 5`);
    
} else {
    document.write(`Số ${number} không chia hết cho cả 3 và 5`);
    
}