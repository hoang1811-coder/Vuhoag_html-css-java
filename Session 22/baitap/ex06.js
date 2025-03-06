let numbers = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];
let count = 0;
let check = Number(prompt("Hãy nhập một số bất kỳ để kiểm tra: "));

if (Number.isInteger(check)) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === check) {
            count++;
        }
    }

    if (count === 0) {
        document.write(`Số ${check} không tồn tại trong mảng.`);
    } else {
        document.write(`Số ${check} xuất hiện ${count} lần.`);
    }
} else {
    document.write("Vui lòng nhập một số nguyên hợp lệ.");
}
