let math = prompt("Moi ban nhap diem Toan :");
let Literature = prompt("Moi ban nhap diem Van :")
let English = prompt("Moi ban nhap diem Anh :");

let sum_TB = ((+point + +Literature + +English) / 3);

if (sum_TB >= 8.0) {
    alert("Giỏi");
} else if (sum_TB == 6.5 - 7.9) {
    alert("Khá");
} else if (sum_TB == 5.0 - 6.4) {
    alert("Trung bình ");
} else if (sum_TB < 5.0) {
    alert("Yếu");
}