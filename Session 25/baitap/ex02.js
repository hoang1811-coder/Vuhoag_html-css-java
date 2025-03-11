function sum(a,b){
    if(Number.isInteger(a)&&Number.isInteger(b)){
        return a+b;
    }
        console.log("Du lieu khong hop le")
}
console.log(`ket qua:`,sum(1,5));
console.log(`ket qua:`,sum(-7,7));
console.log(`ket qua:`,sum(1,"text"));
console.log(`ket qua:`,sum(1,5.3));


