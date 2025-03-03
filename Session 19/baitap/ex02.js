let input = prompt("Nhập một ký tự hoặc chuỗi:");
if (input.indexOf("0") !== -1 || input.indexOf("1") !== -1 || input.indexOf("2") !== -1 || 
    input.indexOf("3") !== -1 || input.indexOf("4") !== -1 || input.indexOf("5") !== -1 || 
    input.indexOf("6") !== -1 || input.indexOf("7") !== -1 || input.indexOf("8") !== -1 || 
    input.indexOf("9") !== -1) {
    document.write(`Chuỗi "${input}" không phải là chữ cái`);
} else {
    document.write(`Chuỗi "${input}" là chữ cái`);
}
