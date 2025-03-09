let numbers = []
let userChoice;

do {
    userChoice = +prompt(`================== MENU ===================\n\n1. Nhập số phần tử cần nhập và giá trị các phần tử\n2. In ra giá trị các phần tử đang quản lý\n3. In ra giá trị các phần tử chẵn và tính tổng\n4. In ra giá trị lớn nhất và nhỏ nhất trong mảng\n5. In ra các phần tử là số nguyên tố trong mảng và tính tổng\n6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó\n7. Thêm một phần tử vào vị trí chỉ định\n8. Thoát\n\n===========================================\n\nLựa chọn của bạn:`);

    switch (userChoice) {
        case 1:
            let size = +prompt("Nhập số phần tử cần nhập:");
            numbers = [];
            for (let i = 0; i < size; i++) {
                numbers.push(+prompt(`numbers[${i}]:`));
            }
            break;

        case 2:
            console.log(numbers.join(", "));
            break;

        case 3:
            let evenNumbers = [];
            let evenSum = 0;
            for (let i = 0; i < numbers.length; i++) {
                if (numbers[i] % 2 === 0) {
                    evenNumbers.push(numbers[i]);
                    evenSum += numbers[i];
                }
            }
            console.log(`Các số chẵn: ${evenNumbers.join(", ")}\nTổng các số chẵn là: ${evenSum}`);
            break;

        case 4:
            let minValue = numbers[0];
            let maxValue = numbers[0];
            for (let i = 0; i < numbers.length; i++) {
                if (numbers[i] > maxValue) {
                    maxValue = numbers[i];
                }
                if (numbers[i] < minValue) {
                    minValue = numbers[i];
                }
            }
            console.log(`Số lớn nhất là: ${maxValue}\nSố nhỏ nhất là: ${minValue}`);
            break;

        case 5:
            let primeNumbers = [];
            let primeSum = 0;
            for (let i = 0; i < numbers.length; i++) {
                let num = numbers[i];
                if (num > 1) {
                    let isPrime = true;
                    for (let j = 2; j * j <= num; j++) {
                        if (num % j === 0) {
                            isPrime = false;
                            break;
                        }
                    }
                    if (isPrime) {
                        primeNumbers.push(num);
                        primeSum += num;
                    }
                }
            }
            alert(`Các số nguyên tố: ${primeNumbers.join(", ")}\nTổng: ${primeSum}`);
            break;

        case 6:
            let targetNumber = +prompt("Nhập số cần tìm: ");
            let occurrences = 0;
            for (let i = 0; i < numbers.length; i++) {
                if (numbers[i] === targetNumber) {
                    occurrences++;
                }
            }
            alert(`Số lần xuất hiện của ${targetNumber}: ${occurrences}`);
            break;

        case 7:
            let newValue = +prompt("Nhập giá trị cần thêm: ");
            let insertPosition = +prompt("Nhập vị trí cần chèn: ");
            if (insertPosition >= 0 && insertPosition <= numbers.length) {
                let updatedArray = [];
                for (let i = 0; i < numbers.length; i++) {
                    if (i === insertPosition) {
                        updatedArray.push(newValue);
                    }
                    updatedArray.push(numbers[i]);
                }
                if (insertPosition === numbers.length) {
                    updatedArray.push(newValue);
                }
                numbers = updatedArray;
            } else {
                alert("Sai vị trí");
            }
            break;

        case 8:
            alert("Thoát chương trình");
            break;

        default:
            alert("Lựa chọn không hợp lệ, vui lòng nhập lại!");
            break;
    }
} while (userChoice !== 8);
