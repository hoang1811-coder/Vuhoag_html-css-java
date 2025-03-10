let numbers = []; // Mảng số nguyên
let choice;
do {
    choice = parseInt(prompt(
        "Chọn một chức năng:\n" +
        "1. Nhập mảng số nguyên\n" +
        "2. Hiển thị mảng\n" +
        "3. Tìm các phần tử chẵn và lẻ\n" +
        "4. Tính trung bình cộng của mảng\n" +
        "5. Xóa phần tử tại vị trí chỉ định\n" +
        "6. Tìm phần tử lớn thứ hai trong mảng\n" +
        "7. Thoát chương trình"
    ));

    if (choice === 1) {
        numbers = [];
        let size = parseInt(prompt("Nhập số lượng phần tử:"));
        let index = 0;
        while (index < size) {
            numbers[index] = parseInt(prompt("Nhập phần tử thứ " + (index + 1) + ":"));
            index++;
        }
    } else if (choice === 2) {
        let i = 0;
        let result = "Mảng: ";
        while (i < numbers.length) {
            result += numbers[i] + " ";
            i++;
        }
        alert(result);
    } else if (choice === 3) {
        let evenNumbers = "Chẵn: ";
        let oddNumbers = "Lẻ: ";
        let i = 0;
        while (i < numbers.length) {
            if (numbers[i] % 2 === 0) {
                evenNumbers += numbers[i] + " ";
            } else {
                oddNumbers += numbers[i] + " ";
            }
            i++;
        }
        alert(evenNumbers + "\n" + oddNumbers);
    } else if (choice === 4) {
        let sum = 0, i = 0;
        while (i < numbers.length) {
            sum += numbers[i];
            i++;
        }
        alert("Trung bình cộng: " + (sum / numbers.length));
    } else if (choice === 5) {
        let position = parseInt(prompt("Nhập vị trí muốn xóa:"));
        if (position >= 0 && position < numbers.length) {
            let i = position;
            while (i < numbers.length - 1) {
                numbers[i] = numbers[i + 1];
                i++;
            }
            numbers.length--; // Giảm độ dài mảng
            alert("Đã xóa phần tử tại vị trí " + position);
        } else {
            alert("Vị trí không hợp lệ.");
        }
    } else if (choice === 6) {
        if (numbers.length < 2) {
            alert("Mảng cần ít nhất 2 phần tử.");
        } else {
            let max1 = -Infinity, max2 = -Infinity;
            let i = 0;
            while (i < numbers.length) {
                if (numbers[i] > max1) {
                    max2 = max1;
                    max1 = numbers[i];
                } else if (numbers[i] > max2 && numbers[i] !== max1) {
                    max2 = numbers[i];
                }
                i++;
            }
            if (max2 === -Infinity) {
                alert("Không có phần tử lớn thứ hai.");
            } else {
                alert("Phần tử lớn thứ hai: " + max2);
            }
        }
    } else if (choice === 7) {
        alert("Thoát chương trình.");
    } else {
        alert("Lựa chọn không hợp lệ.");
    }
} while (choice !== 7);
