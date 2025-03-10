let matrix = []; // Mảng 2 chiều
let choice;

do {
    choice = parseInt(prompt(
        "Chọn một chức năng:\n" +
        "1. Nhập mảng 2 chiều\n" +
        "2. Hiển thị mảng 2 chiều\n" +
        "3. Tính tổng các phần tử trong mảng\n" +
        "4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó\n" +
        "5. Tính trung bình cộng các phần tử của một hàng cụ thể\n" +
        "6. Đảo ngược các hàng trong mảng\n" +
        "7. Thoát chương trình"
    ));

    if (choice === 1) {
        matrix = [];
        let rows = parseInt(prompt("Nhập số hàng:"));
        let cols = parseInt(prompt("Nhập số cột:"));
        let i = 0;
        while (i < rows) {
            matrix[i] = [];
            let j = 0;
            while (j < cols) {
                matrix[i][j] = parseInt(prompt("Nhập phần tử [" + i + "][" + j + "]:"));
                j++;
            }
            i++;
        }
    } else if (choice === 2) {
        let i = 0, result = "Mảng:\n";
        while (i < matrix.length) {
            let j = 0;
            while (j < matrix[i].length) {
                result += matrix[i][j] + " ";
                j++;
            }
            result += "\n";
            i++;
        }
        alert(result);
    } else if (choice === 3) {
        let sum = 0;
        let i = 0;
        while (i < matrix.length) {
            let j = 0;
            while (j < matrix[i].length) {
                sum += matrix[i][j];
                j++;
            }
            i++;
        }
        alert("Tổng các phần tử trong mảng: " + sum);
    } else if (choice === 4) {
        let maxVal = -Infinity, maxRow = -1, maxCol = -1;
        let i = 0;
        while (i < matrix.length) {
            let j = 0;
            while (j < matrix[i].length) {
                if (matrix[i][j] > maxVal) {
                    maxVal = matrix[i][j];
                    maxRow = i;
                    maxCol = j;
                }
                j++;
            }
            i++;
        }
        alert("Phần tử lớn nhất: " + maxVal + " tại vị trí [" + maxRow + "][" + maxCol + "]");
    } else if (choice === 5) {
        let rowIndex = parseInt(prompt("Nhập số hàng cần tính trung bình:"));
        if (rowIndex >= 0 && rowIndex < matrix.length) {
            let sum = 0, count = matrix[rowIndex].length, j = 0;
            while (j < count) {
                sum += matrix[rowIndex][j];
                j++;
            }
            alert("Trung bình cộng của hàng " + rowIndex + ": " + (sum / count));
        } else {
            alert("Hàng không hợp lệ.");
        }
    } else if (choice === 6) {
        let i = 0, mid = Math.floor(matrix.length / 2);
        while (i < mid) {
            let temp = matrix[i];
            matrix[i] = matrix[matrix.length - 1 - i];
            matrix[matrix.length - 1 - i] = temp;
            i++;
        }
        alert("Đã đảo ngược các hàng trong mảng.");
    } else if (choice === 7) {
        alert("Thoát chương trình.");
    } else {
        alert("Lựa chọn không hợp lệ.");
    }
} while (choice !== 7);
