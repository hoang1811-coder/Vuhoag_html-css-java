let char = prompt("Hãy nhập một chuỗi bất kỳ: ");
if (char.includes(" ")) {
    document.write(`Chuỗi ${char} có chứa dấu cách`);
    
} else {
    document.write(`Chuỗi ${char} không chứa dấu cách`);
    
}