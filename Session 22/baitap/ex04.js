let number = prompt("Hãy nhập một dãy số bất kì");
let max;
if (Number.isInteger(+number)) {
    let arr = number.split("");
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    document.write(`Số lớn nhất trong chuỗi là ${max}`);
} else {
    document.write("Dãy số không hợp lệ")
}