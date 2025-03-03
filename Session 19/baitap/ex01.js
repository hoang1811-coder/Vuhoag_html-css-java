let month = Number(prompt("Mời bạn nhập số tháng: "));

if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
    document.write(`Tháng ${month} có 31 ngày.`);
} else if ([4, 6, 9, 11].includes(month)) {
    document.write(`Tháng ${month} có 30 ngày.`);
} else if (month === 2) {
    document.write(`Tháng 2 có 28 hoặc 29 ngày (năm nhuận).`);
} else {
    document.write("Vui lòng nhập số tháng hợp lệ (1-12).");
}
