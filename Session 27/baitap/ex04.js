let numbers = [];
let choice;

function getAverage(arr) {
  if (arr.length === 0) {
    return "Danh sách số nguyên trống.";
  }
  let sum = arr.reduce((a, b) => a + b, 0);
  return "Trung bình các số: " + (sum / arr.length);
}

function getMaxEven(arr) {
  let evenNumbers = arr.filter(num => num % 2 === 0);
  if (evenNumbers.length === 0) {
    return "Không có số chẵn trong danh sách.";
  }
  return "Số chẵn lớn nhất: " + Math.max(...evenNumbers);
}

function getMinOdd(arr) {
  let oddNumbers = arr.filter(num => num % 2 !== 0);
  if (oddNumbers.length === 0) {
    return "Không có số lẻ trong danh sách.";
  }
  return "Số lẻ nhỏ nhất: " + Math.min(...oddNumbers);
}

do {
  choice = +prompt(`
1. Nhập danh sách số nguyên.
2. Tính trung bình các số.
3. Tìm số chẵn lớn nhất.
4. Tìm số lẻ nhỏ nhất.
5. Thoát.
`)

  switch (choice) {
    case 1: 
      numbers = prompt("Nhập danh sách số nguyên (cách nhau bởi dấu phẩy):").split(",").map(Number);
      break;
    case 2: 
      alert(getAverage(numbers));
      break;
    case 3: 
      alert(getMaxEven(numbers));
      break;
    case 4: 
      alert(getMinOdd(numbers));
      break;
    case 5: 
      break;
    default:
      alert("Lựa chọn không hợp lệ.");
  }
} while (choice !== 5);