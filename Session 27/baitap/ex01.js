function sum(a,b) {
    return a + b;
}
// arrow function
let menus = (a,b) => a - b
let multi = (a,b) => {return a * b}
let divide = function(a,b) {
    return a / b;
}
let choice;
let num1;
let num2;
do {
    choice = +prompt(`1.Cộng hai số.
2.Trừ hai số.
3.Nhân hai số.
4.Chia hai số.
5.Thoát.`)
switch (choice) {
    case 1:
        num1 = +prompt("Mời bạn nhâp số thứ nhất: ");
        num2 = +prompt("Mời bạn nhâp số thứ hai: ");
        alert(sum(num1,num2));      
        break;
    case 2:
        num1 = +prompt("Mời bạn nhâp số thứ nhất: ");
        num2 = +prompt("Mời bạn nhâp số thứ hai: ");
        alert(menus(num1,num2));     
        break;
    case 3:
        num1 = +prompt("Mời bạn nhâp số thứ nhất: ");
        num2 = +prompt("Mời bạn nhâp số thứ hai: ");
        alert(multi(num1,num2));       
        break;
    case 4:
        num1 = +prompt("Mời bạn nhâp số thứ nhất: ");
        num2 = +prompt("Mời bạn nhâp số thứ hai: ");
        alert(divide(num1,num2));    
        break;
    case 5:
        
        break;

    default:
        alert("Không hợp lệ");
        break;
}

    
} while (choice !== 5);