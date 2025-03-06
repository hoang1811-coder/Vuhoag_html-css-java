let number = prompt("Hãy nhập một chuỗi số bất kỳ : ");
let sum1 = 0;
let sum2 = 0;

if (Number.isInteger(+number)) {
    let arr = number.split("");
    for (let i = 0; i < arr.length; i++) {
        let num = Number(arr[i]);
        
        if (num % 2 === 0) {
            sum1 += num; 
        } else {
            sum2 += num; 
        }
    }

    document.write(`Tổng của các số chẵn là ${sum1}<br>`);
    document.write(`Tổng của các số lẻ là ${sum2}`);
}
