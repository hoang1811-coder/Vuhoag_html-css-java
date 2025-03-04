let num = Number(prompt("Hãy nhập một số bất kì để kiểm tra xem số đó có phải là số nguyên tố không: "));
if(isNaN(num) || num < 1 || !Number.isInteger(num)){
    document.write("Dữ liệu không hợp lệ.");

} else{
    let check = true;
    if(num < 2){
        check = false;
    } else {
        for (let i = 2; i < Math.sqrt(num); i++) {
            if (num % i == 0){
                check = false;
                break;
            }
            
        }
    }

    if (check){
        document.write(`Số ${num} là số nguyên tố.`);
    } else {
        document.write(`Số ${num} không phải số nguyên tố.`);

    }
}