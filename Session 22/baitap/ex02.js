let numbers = [2, 5, 7, 4, 1, 8, 6];
let check = Number(prompt("Hãy nhập một số để kiểm tra: "));
let flag = false;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === check) {
        flag = true;
        break;
    }
}
if (flag) {
    console.log("bingo");
} else {
    console.log("Chúc bạn may mắn lần sau");
    
    
}