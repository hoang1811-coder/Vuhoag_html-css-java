let money = Number(prompt(`Mời bạn nhập sô tiền muốn đổi 
    1.VND --> USD
    2.USD --. VND
    `));
switch (money) {
    case 1:
        let VND = Number(prompt("Mời bạn nhập số tiền muốn đối:"));
        let sum = VND / 23000;
        document.write(`${VND} VND =  ${sum} USD`);
        break;
    case 2:
        let USD = Number(prompt("Mời bạn nhập số tiền muốn đối:"));
        let result = USD * 23000;
        document.write(`${USD} USD =  ${result} VND`);
        break;    

    default:
        alert("Sai cú pháp");
        break;
}