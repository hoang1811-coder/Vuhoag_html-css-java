let num = Number(prompt("Nhập một số để kiểm tra số đối xứng:"));

if (isNaN(num) || !Number.isInteger(num)) {
    document.write("Dữ liệu nhập vào không hợp lệ.");
} else {
    let stringnum = num.toString();
    let len = stringnum.length;
    let check = true;

    for (let i = 0; i < len / 2; i++) {
        if (stringnum[i] !== stringnum[len - 1 - i]) {
            check = false;
            break;
        }
    }

    if(check){
        document.write(`Số ${num} là số đối xứng.`)
    } else {
        document.write(`Số ${num} không phải là số đối xứng`);
    }



}

