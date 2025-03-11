function checkNumber(arr) {
    if (!Array.isArray(arr)) {
        console.log("Mảng không hợp lệ");
        return;
    }else {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (Number.isInteger(arr[i]) && arr[i] > 0) {
                count ++;
            }      
        }
        if (count > 0) {
            console.log(`Mảng có ${count} số nguyên dương`);    
        } else {
            console.log("Không có số nguyên dương nào trong mảng");
            
            
        }
    }
    
}

checkNumber([4, 5.4, 6, -2]);
checkNumber([1, 2, 5, 7, -8, 6]);
checkNumber([1.2, -3, -6]);
