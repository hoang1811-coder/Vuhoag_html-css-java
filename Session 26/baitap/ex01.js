function number(arr) {
    if (Array.isArray(arr)) {
        if (arr.length > 0) {
            let array = [];
            for (let i = 0; i < arr.length; i++){
                if (Number.isInteger(arr[i]) && arr[i] >= 10) {
                    array.push(arr[i]);
                }
            }
            alert(`[${array}]`);
        } else {
            alert("Mảng không có phần tử nào");
        }
    } else {
        alert("Dữ liệu không hợp lệ");
    }
}
number([1, 22, 10, 9, 8, 6, 3, 100, 6, 86]);