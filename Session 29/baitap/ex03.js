let menu = {};

function themMonAn() {
  let danhMuc = prompt("Nhập tên danh mục:");
  let tenMonAn = prompt("Nhập tên món ăn:");
  let gia = prompt("Nhập giá món ăn:");
  let moTa = prompt("Nhập mô tả món ăn:");

  if (!menu[danhMuc]) {
    menu[danhMuc] = [];
  }

  menu[danhMuc].push({
    ten: tenMonAn,
    gia: gia,
    moTa: moTa,
  });

  alert("Đã thêm món ăn thành công!");
}

function xoaMonAn() {
  let danhMuc = prompt("Nhập tên danh mục:");
  let tenMonAn = prompt("Nhập tên món ăn cần xóa:");

  if (!menu[danhMuc]) {
    alert("Danh mục không tồn tại.");
    return;
  }

  let index = menu[danhMuc].findIndex(mon => mon.ten === tenMonAn);

  if (index !== -1) {
    menu[danhMuc].splice(index, 1);
    alert("Đã xóa món ăn thành công!");
  } else {
    alert("Không tìm thấy món ăn trong danh mục.");
  }
}

function capNhatMonAn() {
  let danhMuc = prompt("Nhập tên danh mục:");
  let tenMonAn = prompt("Nhập tên món ăn cần cập nhật:");

  if (!menu[danhMuc]) {
    alert("Danh mục không tồn tại.");
    return;
  }

  let monAn = menu[danhMuc].find(mon => mon.ten === tenMonAn);

  if (monAn) {
    monAn.ten = prompt("Nhập tên mới:");
    monAn.gia = prompt("Nhập giá mới:");
    monAn.moTa = prompt("Nhập mô tả mới:");
    alert("Đã cập nhật món ăn thành công!");
  } else {
    alert("Không tìm thấy món ăn trong danh mục.");
  }
}

function hienThiMenu() {
  let message = "MENU NHÀ HÀNG\n";

  for (let danhMuc in menu) {
    message += `\n${danhMuc}:\n`;
    menu[danhMuc].forEach(mon => {
      message += `- ${mon.ten}: ${mon.gia} (${mon.moTa})\n`;
    });
  }

  alert(message);
}

function timKiemMonAn() {
  let tenMonAn = prompt("Nhập tên món ăn cần tìm:");
  let ketQua = [];

  for (let danhMuc in menu) {
    let monAn = menu[danhMuc].find(mon => mon.ten === tenMonAn);
    if (monAn) {
      ketQua.push({ danhMuc: danhMuc, monAn: monAn });
    }
  }

  if (ketQua.length > 0) {
    let message = "KẾT QUẢ TÌM KIẾM:\n";
    ketQua.forEach(item => {
      message += `- ${item.monAn.ten} (${item.danhMuc}): ${item.monAn.gia} (${item.monAn.moTa})\n`;
    });
    alert(message);
  } else {
    alert("Không tìm thấy món ăn.");
  }
}

let choice;
do {
  choice = +prompt(`
1. Thêm món ăn vào danh mục.
2. Xóa món ăn theo tên khỏi danh mục.
3. Cập nhật thông tin theo tên của món ăn (tên, giá, mô tả).
4. Hiển thị toàn bộ menu gồm từng danh mục và từng món ăn.
5. Tìm kiếm món ăn theo tên trong toàn bộ menu.
6. Thoát.
`);

  switch (choice) {
    case 1:
      themMonAn();
      break;
    case 2:
      xoaMonAn();
      break;
    case 3:
      capNhatMonAn();
      break;
    case 4:
      hienThiMenu();
      break;
    case 5:
      timKiemMonAn();
      break;
    case 6:
      alert("Tạm biệt!");
      break;
    default:
      alert("Lựa chọn không hợp lệ.");
  }
} while (choice !== 6);