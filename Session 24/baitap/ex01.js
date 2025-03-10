let arr = [];
let choice;
do {
    choice = parseInt(prompt(
        "Chọn một chức năng:\n" +
        "1. Nhập mảng\n" +
        "2. Hiển thị mảng\n" +
        "3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng\n" +
        "4. Tính tổng các phần tử trong mảng\n" +
        "5. Tìm số lần xuất hiện của một phần tử trong mảng\n" +
        "6. Sắp xếp mảng tăng dần\n" +
        "7. Thoát chương trình"
    ));

    if (choice === 1) {
        arr = [];
        let n = parseInt(prompt("Nhập số lượng phần tử của mảng:"));
        let i = 0;
        while (i < n) {
            arr[i] = parseInt(prompt("Nhập phần tử thứ " + (i + 1) + ":"));
            i++;
        }
    } else if (choice === 2) {
        let i = 0;
        let result = "Mảng hiện tại: ";
        while (i < arr.length) {
            result += arr[i] + " ";
            i++;
        }
        alert(result);
    } else if (choice === 3) {
        if (arr.length === 0) {
            alert("Mảng rỗng! Vui lòng nhập mảng trước.");
        } else {
            let max = arr[0], min = arr[0];
            let i = 1;
            while (i < arr.length) {
                if (arr[i] > max) max = arr[i];
                if (arr[i] < min) min = arr[i];
                i++;
            }
            alert("Phần tử lớn nhất: " + max + "\nPhần tử nhỏ nhất: " + min);
        }
    } else if (choice === 4) {
        let sum = 0;
        let i = 0;
        while (i < arr.length) {
            sum += arr[i];
            i++;
        }
        alert("Tổng các phần tử trong mảng: " + sum);
    } else if (choice === 5) {
        let x = parseInt(prompt("Nhập phần tử cần tìm số lần xuất hiện:"));
        let count = 0;
        let i = 0;
        while (i < arr.length) {
            if (arr[i] === x) count++;
            i++;
        }
        alert("Phần tử " + x + " xuất hiện " + count + " lần.");
    } else if (choice === 6) {
        let i = 0;
        while (i < arr.length - 1) {
            let j = i + 1;
            while (j < arr.length) {
                if (arr[i] > arr[j]) {
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
                j++;
            }
            i++;
        }
        alert("Mảng sau khi sắp xếp: " + arr.join(" "));
    } else if (choice === 7) {
        alert("Thoát chương trình.");
    } else {
        alert("Lựa chọn không hợp lệ! Vui lòng chọn lại.");
    }
} while (choice !== 7);
