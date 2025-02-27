let number1 = Number(prompt("Hãy nhập hệ số a của phương trình : "));
let number2 = Number(prompt("Hãy nhập hệ số b của phương trình : "));
let number3 = Number(prompt("Hãy nhập hệ số c của phương trình : "));

let denta = ((number2 * number2) - (4 * number1 * number3));
let result1 = (( -number2 + Math.sqrt(denta)) / (2 * number1));
let result2 = (( -number2 - Math.sqrt(denta)) / (2 * number1));

document.write(`Phương trình có hai nghiệm phân biệt:<br>`);
document.write(`x1 = ${result1}<br>`);
document.write(`x2 = ${result2}`);