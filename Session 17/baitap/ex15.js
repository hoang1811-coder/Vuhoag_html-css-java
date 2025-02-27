let r = Number(prompt("Hãy nhập bán kính của hình cầu: "));
let S = 4 * Math.PI * Math.pow(r, 2);
let V = (4 / 3) * Math.PI * Math.pow(r, 3);
let cvi = 2 * Math.PI * r;

document.write(`Diện tích mặt cầu có bán kính ${r} là: ${S} <br>`);
document.write(`Thể tích của hình cầu có bán kính ${r} là: ${V}<br>`);
document.write(`Chu vi lớn nhất (chu vi đường tròn lớn) của hình cầu có bán kính ${r} là: ${cvi}`);
