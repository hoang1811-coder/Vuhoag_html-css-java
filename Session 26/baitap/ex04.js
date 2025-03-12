function getPrimes(numbers) {
    if (Array.isArray(numbers)) {
        if (numbers.length > 0) {
            let primes = [];
            for (let i = 0; i < numbers.length; i++) {
                if (numbers[i] > 1 && Number.isInteger(numbers[i])) {
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
            if (primes.length > 0) {
                alert(`[${primes}]`);
            }
        } else {
            alert("Mảng không có phần tử nào");
        }
    } else {
        alert("Dữ liệu không hợp lệ");
    }
}

getPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
