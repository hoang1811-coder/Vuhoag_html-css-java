let r = Number(prompt("Hãy nhập bán kính của hình trụ: "));
let h = Number(prompt("Hãy nhập chiều cao của hình trụ: "));
let sxq = 2 * Math.PI * r * h;
let stp = (2 * Math.PI * r * h) + ( 2 * Math.PI * r * r);
let V = Math.PI * r * r *h ;
let cvi = 2 * Math.PI * r *r;
document.write(`Diện tích xung quanh của hình trụ có bán kính ${r} và chiều cao ${h} là : ${sxq} <br>`);
document.write(`Diện tích toàn phần của hình trụ có bán kính ${r} và chiều cao ${h} là : ${stp} <br>`);
document.write(`Thể tích của hình trụ có bán kính ${r} và chiều cao ${h} là : ${V} <br>`);
document.write(`Thể tích của hình trụ có bán kính ${r} và chiều cao ${h} là : ${cvi}`);

