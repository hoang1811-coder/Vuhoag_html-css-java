function date(arr) {
    if (Array.isArray(arr)) {
        if (arr.length > 0) {
            let result = [];
            for (let i = 0; i < arr.length; i++) {
                let parts = arr[i].split("-");
                console.log(parts);
                if (parts.length === 3) {
                    let [year, month, day] = parts;
                    result.push(`${day}/${month}/${year}`);
                } else {
                    result.push("Dữ liệu không hợp lệ");
                }
            }
            alert(result);
        } else {
            alert("Mảng không có phần tử nào");
        }
    }else{
        alert("Dữ liệu không hợp lệ");
    }
}

date(["2025-03-10", "2024-12-25", "2023-07-01"]);