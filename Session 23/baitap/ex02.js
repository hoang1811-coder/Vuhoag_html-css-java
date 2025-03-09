let numbers = [1, 5, 3, 7, 8, 4, 2, 6, 8, 3];
let lengthOfNumbers = numbers.length;
let maxNumber = numbers[0];
let maxIndex = 0;

for (let i = 0; i < lengthOfNumbers; i++) {
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
        maxIndex = i;
    }
}

alert(`
Số lớn nhất: ${maxNumber}
Vị trí: ${maxIndex}
`);
