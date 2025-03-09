let n = prompt("Nhập số phần tử trong mảng")
let arr = []

if (n < 0 || isNaN(n)) {
    alert("Số lượng phần tử không được âm")
} else if (n === 0) {
    alert("Mảng không có phần tử")
} else {
    for (i = 0; i < n; i++) {
        let num = prompt(`Phần tử số ${i}`)
        arr.push(num)
    }
    let isFibonacci = true
    for (i = 2; i < arr.length; i++){
        if (arr[i] !== arr[i - 1] + arr[i - 2]) {
            isFibonacci = false;
            break;
        }
    }
    if (isFibonacci) {
        alert("Dây là 1 dãy Fibonacci")
    } else {
        alert("Đây khômg phải là 1 dãy Fibonacci")
    }
}