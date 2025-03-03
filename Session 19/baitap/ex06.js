let a = Number(prompt("Hãy nhập số a: "));
let b = Number(prompt("Hãy nhập số b: "));
let c = Number(prompt("Hãy nhập số c: "));

let denta = (b * b) - (4 * a * c);
if (denta < 0) {
    document.write("Phương trình vô nghiệm");
    
} else if (denta === 0) {
    let result = (-b) / ( 2 * a);
    document.write(`Phương trình có nghiệm kép x1 = ${result} và x2 = ${result}`);
    
} else if (denta > 0) {
    let result1 = (( -b + Math.sqrt(denta)) / (2 * a));
    let result2 = (( -b - Math.sqrt(denta)) / (2 * a));
    document.write(`Phương trình có hai nghiệm phân biệt:<br>`);
    document.write(`x1 = ${result1}<br>`);
    document.write(`x2 = ${result2}`);

}