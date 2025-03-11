function checkNumber(arr) {
    let arrayNew = [];
    if (!Array.isArray(arr)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arrayNew.push(arr[i]); 
        }
    }
    if (arrayNew.length > 0) {
        console.log(arrayNew.join(", "));
    } else {
        console.log("Mảng không chứa số chẵn");
    }
}

checkNumber([11, 4, 65, 6, ]);
checkNumber([1, 3, 5, 7]); 
checkNumber("text"); 