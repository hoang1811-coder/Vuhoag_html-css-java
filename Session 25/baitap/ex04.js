function checkNumber(a) {
    if (!Number.isInteger(a)) {
        console.log("Dữ Liệu không hợp lệ.");
        return;
    } else {
        let count = 0;
        for (let i = 1; i < a; i++){
            if (a % i === 0) {
                count ++;
            }
        }
        if (count = 1) {
            console.log(`Số ${a} là số nguyên tố`);
        } else {
            console.log(`Số ${a} không phải là số nguyên tố`);
        }
    }
}
checkNumber(17);
checkNumber(6);
checkNumber("text");