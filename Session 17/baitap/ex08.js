let date1 = prompt("Nhập ngày thứ nhất (YYYY-MM-DD):");
let date2 = prompt("Nhập ngày thứ hai (YYYY-MM-DD):");
let d1 = new Date(date1);
let d2 = new Date(date2);

let minigiay = Math.abs(d2 - d1);
let day = Math.ceil(minigiay / (1000 * 60 * 60 * 24));
document.write(`Độ lệch là ${day} ngày`);
console.log(`Độ lệch là ${day} ngày`);