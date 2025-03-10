let inputString = "";
let menu = `
1. Nhập chuỗi ký tự
2. Hiển thị chuỗi ký tự
3. Tìm tất cả các từ con trùng lặp trong chuỗi và số lần xuất hiện
4. Tìm các từ có độ dài lớn nhất và nhỏ nhất trong chuỗi
5. Tìm số lần xuất hiện nhiều nhất của các ký tự trong chuỗi
6. Chuyển đổi chuỗi ký tự thành dạng snake_case
7. Thoát chương trình
`;

while (true) {
  let choice = prompt(menu);

  if (choice === "1") {
    inputString = prompt("Nhập chuỗi ký tự:");
  } else if (choice === "2") {
    alert("Chuỗi ký tự: " + inputString);
  } else if (choice === "3") {
    let substrings = {};
    for (let i = 0; i < inputString.length; i++) {
      for (let j = i + 1; j <= inputString.length; j++) {
        let sub = inputString.slice(i, j);
        if (sub.length > 1) {
          substrings[sub] = (substrings[sub] || 0) + 1;
        }
      }
    }
    let result = "";
    for (let sub in substrings) {
      if (substrings[sub] > 1) {
        result += `Từ "${sub}" xuất hiện ${substrings[sub]} lần\n`;
      }
    }
    if (result) {
      alert(result);
    } else {
      alert("Không có từ con trùng lặp.");
    }
  } else if (choice === "4") {
    let words = inputString.split(" ");
    let longestWord = "";
    let shortestWord = words[0] || "";
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
      if (words[i].length < shortestWord.length) {
        shortestWord = words[i];
      }
    }
    if (longestWord) {
      alert(`Từ dài nhất: "${longestWord}"\nTừ ngắn nhất: "${shortestWord}"`);
    } else {
      alert("Chuỗi rỗng hoặc không có từ.");
    }
  } else if (choice === "5") {
    let charCounts = {};
    for (let i = 0; i < inputString.length; i++) {
      let char = inputString[i];
      charCounts[char] = (charCounts[char] || 0) + 1;
    }
    let mostFrequentChar = "";
    let maxCount = 0;
    for (let char in charCounts) {
      if (charCounts[char] > maxCount) {
        mostFrequentChar = char;
        maxCount = charCounts[char];
      }
    }
    if (mostFrequentChar) {
      alert(`Ký tự xuất hiện nhiều nhất: "${mostFrequentChar}" (${maxCount} lần)`);
    } else {
      alert("Chuỗi rỗng.");
    }
  } else if (choice === "6") {
    let snakeCase = inputString.replace(/([A-Z])/g, "_$1").toLowerCase();
    if (snakeCase.startsWith("_")) {
      snakeCase = snakeCase.slice(1);
    }
    alert("Chuỗi snake_case: " + snakeCase);
  } else if (choice === "7") {
    break; 
  } else {
    alert("Lựa chọn không hợp lệ.");
  }
}