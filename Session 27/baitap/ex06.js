function kiemTraCapSoCong(arr) {
    if (!Array.isArray(arr) || arr.length < 2) {
      return "dữ liệu không hợp lệ";
    }
    const congSai = arr[1] - arr[0];

    for (let i = 2; i < arr.length; i++) {
      if (arr[i] - arr[i - 1] !== congSai) {
        return false;
      }
    }
  
    return true;
  }

  console.log(kiemTraCapSoCong([2, 4, 6, 8]));
  console.log(kiemTraCapSoCong([3, 6, 9, 12, 14]));
  console.log(kiemTraCapSoCong("abc")); 
