function findMaxNumber(arr) {
    if (!Array.isArray(arr)) {
        alert("Dữ liệu không hợp lệ");
        return;
    }

    if (arr.length === 0) {
        alert("Mảng không có dữ liệu");
        return;
    }

    let maxNumber = Math.max(...arr);
    let position = arr.indexOf(maxNumber); 

    alert(`max = ${maxNumber}\nposition: ${position}`);
}
findMaxNumber([10, 9, 5, 11, 24, 5]);
findMaxNumber([]); 
findMaxNumber("abc"); 
