let n = parseInt(prompt("Nhập số lượng số nguyên tố cần hiển thị:"));
if (!isNaN(n) && n > 0) {
    let count = 0, num = 2;
    let result = "";

    while (count < n) {
        let check = true;

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                check = false;
                break;
            }
        }

        if (check) {
            result += num + " ";
            count++;
        }
        num++;
    }

    console.log(result);
} else {
    console.log("Không hợp lệ");
}
