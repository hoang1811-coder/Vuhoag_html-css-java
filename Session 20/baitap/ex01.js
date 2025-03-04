let num = Number(prompt("Hãy nhập một số bất kì: "));
let sum = 0;
if (!Number.isInteger(num) || num < 0 || isNaN(num)){  
    document.write(`Dữ liệu nhập không hợp lệ`);
}else if (num > 0){
    for (let i = 0; i <= num; i++) {
        sum += i;
    }  
    document.write(sum);
    
}

