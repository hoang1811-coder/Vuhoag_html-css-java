let arraySize = +prompt("Nhập số lượng phần tử:");
let numbers = [];

if (arraySize < 0) {
    console.log("Số lượng phần tử không được nhỏ hơn 0");
} else if (arraySize === 0) {
    console.log("Mảng không có phần tử nào");
} else {
    for (let i = 0; i < arraySize; i++) {
        let value = +prompt(`Nhập numbers[${i}]:`);
        numbers.push(value);
    }

    let largest = 0, secondLargest = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            secondLargest = largest;
            largest = numbers[i];
        }
    }

    alert("Số lớn thứ hai là: " + secondLargest);
}
