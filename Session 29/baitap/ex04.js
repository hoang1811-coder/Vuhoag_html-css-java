let danhSachCongViec = [];
let idCount = 1;

function themCongViec() {
  let id = idCount++;
  let tenCongViec = prompt("Nhập tên công việc:");
  let moTa = prompt("Nhập mô tả công việc:");
  let thoiGianBatDau = prompt("Nhập thời gian bắt đầu:");
  let trangThai = "Chưa hoàn thành"; 

  danhSachCongViec.push({
    id: id,
    ten: tenCongViec,
    moTa: moTa,
    thoiGianBatDau: thoiGianBatDau,
    trangThai: trangThai,
  });

  alert("Đã thêm công việc thành công!");
}

function hienThiCongViec() {
  if (danhSachCongViec.length === 0) {
    alert("Danh sách công việc trống.");
    return;
  }

  let message = "DANH SÁCH CÔNG VIỆC:\n";
  danhSachCongViec.forEach(congViec => {
    message += `ID: ${congViec.id}, Tên: ${congViec.ten}, Mô tả: ${congViec.moTa}, Thời gian bắt đầu: ${congViec.thoiGianBatDau}, Trạng thái: ${congViec.trangThai}\n`;
  });

  alert(message);
}

function capNhatTrangThai() {
  let id = +prompt("Nhập ID công việc cần cập nhật trạng thái:");
  let congViec = danhSachCongViec.find(cv => cv.id === id);

  if (congViec) {
    congViec.trangThai = prompt("Nhập trạng thái mới (Hoàn thành/Chưa hoàn thành):");
    alert("Đã cập nhật trạng thái thành công!");
  } else {
    alert("Không tìm thấy công việc với ID đã nhập.");
  }
}

function locCongViecTheoTrangThai() {
  let trangThai = prompt("Nhập trạng thái cần lọc (Hoàn thành/Chưa hoàn thành):");
  let ketQua = danhSachCongViec.filter(cv => cv.trangThai.toLowerCase() === trangThai.toLowerCase());

  if (ketQua.length > 0) {
    let message = `CÁC CÔNG VIỆC TRẠNG THÁI "${trangThai}":\n`;
    ketQua.forEach(congViec => {
      message += `ID: ${congViec.id}, Tên: ${congViec.ten}, Mô tả: ${congViec.moTa}, Thời gian bắt đầu: ${congViec.thoiGianBatDau}, Trạng thái: ${congViec.trangThai}\n`;
    });
    alert(message);
  } else {
    alert(`Không tìm thấy công việc nào có trạng thái "${trangThai}".`);
  }
}

function sapXepCongViecTheoTrangThai() {
  danhSachCongViec.sort((a, b) => a.trangThai.localeCompare(b.trangThai));
  alert("Đã sắp xếp công việc theo trạng thái.");
}

let choice;
do {
  choice = +prompt(`
1. Thêm công việc mới.
2. Hiển thị tất cả các công việc.
3. Cập nhật trạng thái công việc theo ID.
4. Lọc các công việc theo trạng thái hoàn thành, chưa hoàn thành.
5. Sắp xếp các công việc theo trạng thái công việc.
6. Thoát.
`);

  switch (choice) {
    case 1:
      themCongViec();
      break;
    case 2:
      hienThiCongViec();
      break;
    case 3:
      capNhatTrangThai();
      break;
    case 4:
      locCongViecTheoTrangThai();
      break;
    case 5:
      sapXepCongViecTheoTrangThai();
      break;
    case 6:
      alert("Tạm biệt!");
      break;
    default:
      alert("Lựa chọn không hợp lệ.");
  }
} while (choice !== 6);