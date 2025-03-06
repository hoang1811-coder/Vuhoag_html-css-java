let arr = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];

let uniqueArr = [];
for (let i = 0; i < arr.length; i++) {
    let exists = false;
    for (let j = 0; j < uniqueArr.length; j++) {
        if (arr[i] === uniqueArr[j]) {
            exists = true;
            break;
        }
    }
    if (!exists) {
        uniqueArr[uniqueArr.length] = arr[i]; 
    }
}
for (let i = 0; i < uniqueArr.length - 1; i++) {
    for (let j = i + 1; j < uniqueArr.length; j++) {
        if (uniqueArr[i] > uniqueArr[j]) {
            let temp = uniqueArr[i];
            uniqueArr[i] = uniqueArr[j];
            uniqueArr[j] = temp;
        }
    }
}

document.write(`Mảng sau khi loại bỏ phần tử trùng nhau và sắp xếp tăng dần: [${uniqueArr.join(", ")}]`);
