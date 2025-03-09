let arraySize = +prompt("Nhập số lượng phần tử:");
let elements = [];

if (arraySize < 0 || isNaN(arraySize)) {
    alert("Số lượng phần tử không được âm");
} else if (arraySize === 0) {
    alert("Mảng không có phần tử");
} else {
    for (let i = 0; i < arraySize; i++) {
        let inputValue = prompt(`Nhập giá trị elements[${i}]:`);
        elements.push(inputValue);
    }

    let totalSum = 0;
    let containsNumber = false;

    for (let i = 0; i < elements.length; i++) {
        if (!isNaN(elements[i])) {
            totalSum += parseInt(elements[i]);
            containsNumber = true;
        }
    }

    if (containsNumber) {
        alert(`Tổng các số: ${totalSum}`);
    } else {
        alert("Không có phần tử nào là số");
    }
}
