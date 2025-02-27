let n = Number(prompt("Nhập một số:"));
let sqrtN = Math.sqrt(n);

let result = (Number.isInteger(sqrtN))
    ? `${n} là số chính phương` 
    : `${n} không phải số chính phương`
document.write(result);
