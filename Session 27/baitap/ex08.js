function timSoLonNhatTuCacChuSo(num) {
    if (typeof num !== 'number' || isNaN(num)) {
      return "dữ liệu không hợp lệ";
    }
    const chuSo = String(num).split('').map(Number);
    chuSo.sort((a, b) => b - a);

    const soLonNhat = Number(chuSo.join(''));
  
    return soLonNhat;
  }
  
  console.log(timSoLonNhatTuCacChuSo(2941)); 
  console.log(timSoLonNhatTuCacChuSo(3875));
  console.log(timSoLonNhatTuCacChuSo("1h8t"));