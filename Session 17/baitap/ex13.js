let giveMoney = Number(prompt("hãy nhập số tiền bạn muốn gửi: "));
let month = Number(prompt("Hãy nhập số tháng bạn muốn gửi tiền: "));
const interestRate = 4.3 / 100;
const monthInterestRate = interestRate / 12; 

let result = giveMoney * monthInterestRate * month;
document.write(`Số tiền lãi sau ${month} tháng là : ${result.toLocaleString} VND`) ;