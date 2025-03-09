let arraySize = +prompt("Nhập số lượng phần tử:");

if (arraySize && arraySize > 0) {
    let values = [];
    for (let i = 0; i < arraySize; i++) {
        let value = +prompt(`Nhập giá trị values[${i}]:`);
        values.push(value);
    }
    
    let negativeCount = 0;
    for (let i = 0; i < values.length; i++) {
        if (values[i] < 0) {
            negativeCount++;
        }
    }
    if (values.length === 0 || negativeCount === 0) {
        alert("Mảng không có số âm");
    } else {
        alert(`Số lượng số âm: ${negativeCount}`);
    }
} else {
    alert("Số lượng phần tử không hợp lệ");
}
