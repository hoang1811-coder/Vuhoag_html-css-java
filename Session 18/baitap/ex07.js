let a = Number(prompt("Mời bạn nhập số a :"));
let b = Number(prompt("Mồi bạn nhập số b: "));


let operation = prompt("Mời bạn nhấp phép tính (+,-,*,/)");

switch (operation) {
    case "+":
        alert(`kết qua phép toán là : ${a} ${operation} ${b} = ${a + b}`);
        break;
    case '-':
        alert(`kết qua phép toán là : ${a} ${operation} ${b} = ${a - b}`);
        break;

    case '*':
        alert(`kết qua phép toán là : ${a} ${operation} ${b} = ${a * b}`);
        break;

    case `/`:
        alert(`kết qua phép toán là : ${a} ${operation} ${b} = ${a / b}`);
        break;
    default:
        alert("phép toán không có");
}

