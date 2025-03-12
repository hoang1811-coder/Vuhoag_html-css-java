function filter(arr) {
    if (Array.isArray(arr)) {
        if (arr.length > 0) {
            let arr2 = [];
            for (let i = 0; i < arr.length; i++){
                if (arr[i].length > 5) {
                    arr2.push(`"${arr[i]}"`);
                }
            }
            if (arr2 != []) {
                alert(`[${arr2}]`);
            }
        } else {
            alert("Mảng không có phần tử nào");
        }
    } else {
        alert("Dữ liệu không hợp lệ");
    }
}

filter(["apple", "banana", "cat", "elephant", "dog"]);