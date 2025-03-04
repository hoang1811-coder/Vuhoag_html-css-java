let str = prompt("Hãy nhập một chuỗi : ");
let char = prompt("Hãy nhập một ký tự để tìm kiếm: ");
let len = str.length;
let check =  false;
for (let i = 0; i < len; i++) {
    if(str[i] === char ){
        check = true;
        break;
    }
    
}
if(check){
    document.write(`Ký tự ${char} tồn tại trong chuỗi "${str}".`);

}else{
    document.write(`Ký tự ${char} không tồn tại trong chuỗi "${str}".`);

}