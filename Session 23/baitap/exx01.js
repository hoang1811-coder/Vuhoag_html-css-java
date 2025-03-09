let input = prompt("Hãy nhập một chuỗi dãy số (cách nhau bởi dấu phẩy): ");
let arr = input.split(","); 
let array = [];
let count = 0;

for (let i = 0; i < arr.length; i++) {
    let num = Number(arr[i]); 
    if (num > 10) {
        array.push(num);
        count++;
    }
}

if (count === 0) {
    console.log("Không có phần tử nào lớn hơn 10.");
} else {
    console.log(`Các phần tử lớn hơn 10 là: ${array.join(", ")}`);
}
