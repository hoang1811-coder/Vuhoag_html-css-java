let month = Number(prompt("Hãy nhập số tháng bạn muốn nhập : "));

if ([1, 2, 3].includes(month)) {
    document.write(`Tháng ${month} là mùa xuân.`);
} else if ([4, 5, 6].includes(month)) {
    document.write(`Tháng ${month} là mùa hạ.`);
} else if ([7, 8, 9].includes(month)) {
    document.write(`Tháng ${month} là mùa thu.`);
} else if ([10, 11, 12].includes(month)) {
    document.write(`Tháng ${month} là mùa đông.`); 
} else {
    document.write("Vui lòng nhập số tháng hợp lệ (1-12).");

}