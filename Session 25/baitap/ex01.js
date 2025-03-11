function findMin(arr) {
    if (!Array.isArray(arr)) {
        console.log("Giá trị không hợp lệ.");
        return;
    }
    if (arr.length === 0) {
        console.log("Mảng không chứa phần tử.");
        return;
    }

    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    console.log(min);
    return min;
}

// Test
findMin([1, 2, 3, 4, 5]);  // Kết quả mong đợi: 1
findMin([-10, 0, 2, -5, 8]);  // Kết quả mong đợi: -10
findMin("hello");  // Kết quả mong đợi: Giá trị không hợp lệ.
findMin([]);  // Kết quả mong đợi: Mảng không chứa phần tử.
