function findOddPrimes(numbers) {
    if (Array.isArray(numbers)) {
        if (numbers.length > 0) {
            let primes = [];
            for (let i = 0; i < numbers.length; i++) {
                if ((numbers[i] % 2 !== 0) && (numbers[i] > 1) && (Number.isInteger(numbers[i]))) {
                    let isPrime = true;
                    for (let j = 2; j < numbers[i]; j++) {
                        if (numbers[i] % j === 0) {
                            isPrime = false;
                            break;
                        }
                    }
                    if (isPrime) {
                        primes.push(numbers[i]);
                    }
                }
            }
            alert(`[${primes.join(", ")}]`);
        } else {
            alert("Mảng không có dữ liệu");
        }
    } else {
        alert("Dữ liệu không hợp lệ");
    }
}

let values = [];
let count = +prompt("Nhập số phần tử (10 -> 20):");

if (count && count >= 10 && count <= 20) {
    for (let i = 0; i < count; i++) {
        let number = +prompt(`Nhập số thứ ${i + 1}:`);
        if (number) {
            values.push(number);
        }
    }
    findOddPrimes(values);
}
