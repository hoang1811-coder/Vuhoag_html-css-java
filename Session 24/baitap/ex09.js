let inputString = "";
let menu = `
1. Nhập chuỗi ký tự
2. Hiển thị chuỗi ký tự
3. Đếm số lượng các ký tự là chuỗi và số trong chuỗi ký tự nhập vào
4. Chuyển đổi các ký tự viết hoa → viết thường, viết thường → viết hoa trong chuỗi.
5. Trộn lẫn các ký tự của chuỗi gốc với chuỗi thứ 2 người dùng nhập vào.
6. Tách chuỗi thành các từ, sắp xếp chúng theo độ dài của từ, từ ngắn nhất đến dài nhất.
7. Thoát chương trình
`;

while (true) {
  let choice = prompt(menu);

  switch (choice) {
    case "1":
      inputString = prompt("Nhập chuỗi ký tự:");
      break;
    case "2":
      alert("Chuỗi ký tự: " + inputString);
      break;
    case "3":
      let charCount = 0;
      let digitCount = 0;
      for (let char of inputString) {
        if (isNaN(parseInt(char))) {
          charCount++;
        } else {
          digitCount++;
        }
      }
      alert(`Số ký tự là chữ: ${charCount}\nSố ký tự là số: ${digitCount}`);
      break;
    case "4":
      let convertedString = "";
      for (let char of inputString) {
        if (char === char.toUpperCase()) {
          convertedString += char.toLowerCase();
        } else {
          convertedString += char.toUpperCase();
        }
      }
      alert("Chuỗi sau khi chuyển đổi: " + convertedString);
      break;
    case "5":
      let secondString = prompt("Nhập chuỗi thứ hai:");
      let mixedString = "";
      let maxLength = Math.max(inputString.length, secondString.length);
      for (let i = 0; i < maxLength; i++) {
        if (i < inputString.length) {
          mixedString += inputString[i];
        }
        if (i < secondString.length) {
          mixedString += secondString[i];
        }
      }
      alert("Chuỗi sau khi trộn: " + mixedString);
      break;
    case "6":
      let words = inputString.split(" ");
      words.sort((a, b) => a.length - b.length);
      alert("Chuỗi sau khi sắp xếp: " + words.join(" "));
      break;
    case "7":
      break;
    default:
      alert("Lựa chọn không hợp lệ.");
  }

  if (choice === "7") {
    break;
  }
}