let arr = []
let choice
do {
    choice = +prompt("1. Nhập mảng số nguyên\n2. Hiển thị mảng\n3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó\n4. Tính tổng và trung bình cộng của các số dương trong mảng\n5. Đảo ngược mảng\n6. Kiểm tra mảng có đối xứng không\n7. Thoát chương trình")
    switch (choice) {
        case 1:
            let n = Number(prompt("Nhập phần tử vào mảng"))
            arr = []
            if (n <= 0 || isNaN(n)) {
                alert("Nhập mảng số nguyên")
            } else {
                for (let i = 0; i < n; i++) {
                    let num = prompt(`Phần tử số ${i}`)
                    arr.push(num)
                }
            }
            console.log(arr);

            break;

        case 2:
            console.log(arr.join(" "));
            break;

        case 3:
            let max = arr[0]
            let maxIndex = 0
            for (i = 0; i < arr.length; i++){
                if (arr[i] > max) {
                    max = arr[i]
                    maxIndex = i
                }
            }
            console.log(`Phần tử lớn nhất trong mảng là ${max}, nằm ở vị trí ${maxIndex}`);
        case 4:
            let sumPositive = 0
            let countPositive = 0
            for (i = 0; i < arr.length; i++){
                if (arr[i] > 0) {
                    sumPositive += arr[i]
                    countPositive++
                }
            }
            let averagePositive = sumPositive / countPositive;
            console.log(`Tổng các số dương: ${sumPositive}`);
            console.log(`Trung bình cộng các số dương: ${averagePositive.toFixed(2)}`)
            break

        case 5:
            for (i = 0; i < Math.floor(arr.length / 2); i++){
                let temp = arr[i]
                arr[i] = arr[arr.length - 1 - i]
                arr[arr.length - 1 - i] = temp
            }
            console.log("Mảng sau khi đảo ngược:", arr);
            break;

        case 6:
            let arrSymmetrical = true
            for (let i = 0; i < Math.floor(arr.length / 2); i++) {
                if (arr[i] !== arr[arr.length - 1 - i]) {
                    arrSymmetrical = false
                    break;
                }
            }
            if (arrSymmetrical) {
                console.log("Mảng đối xứng.");
            } else {
                console.log("Mảng không đối xứng.");
            }
            break

        case 7:
            alert("Thoát")
        default:
            break;
    }

} while (choice !== 7);
