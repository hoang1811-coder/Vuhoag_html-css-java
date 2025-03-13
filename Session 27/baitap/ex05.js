function chiaMang(arr, n) {
    if (!Array.isArray(arr)) {
      return "dữ liệu không hợp lệ";
    }
  
    if (n <= 0 || !Number.isInteger(n)) {
      return "Kích thước mảng con không hợp lệ";
    }
    const ketQua = [];
    for (let i = 0; i < arr.length; i += n) {
      const mangCon = arr.slice(i, i + n);
      ketQua.push(mangCon);
    }
  
    return ketQua;
  }

  console.log(chiaMang([1, 2, 3, 4, 5, 6, 7, 8], 3));
  console.log(chiaMang([1, 2, 3, 4, 5, 6, 7, 8], 2));
  console.log(chiaMang("abc", 3)); 