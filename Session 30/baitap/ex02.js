let books = [
    { id: 1, name: "Harry Potter và Hòn đá Phù thủy", price: 200000, quantity: 10, category: "Fantasy" },
    { id: 2, name: "Đắc nhân tâm", price: 150000, quantity: 5, category: "Self-help" },
    { id: 3, name: "Nhà giả kim", price: 120000, quantity: 8, category: "Fiction" },
    { id: 4, name: "Lập trình JavaScript cho người mới bắt đầu", price: 250000, quantity: 3, category: "Programming" },
];
let card =[];
let bookId = books.length + 1;

function hienThiSachTheoTheLoai() {
    let theloai = prompt("Nhập thể loại sách muốn xem: ");
    let sachTheoTheLoai = books.filter(book => book.category.toLowerCase() === theloai.toLowerCase());
    if (sachTheoTheLoai.length > 0) {
        console.log(`Danh sách sách thể loại "${theloai}":`);
        for (let book of sachTheoTheLoai) {
            console.log(`- ID: ${book.id}, Tên: ${book.name}, Giá: ${book.price}, Số lượng: ${book.quantity}`);
        }
    } else {
        console.log(`Không tìm thấy sách thuộc thể loại "${theloai}".`);
    }
}
function themSachMoi() {
    let tenSach = prompt("Nhập tên sách:");
    let giaSach = +prompt("Nhập giá sách:");
    let soLuongSach = +prompt("Nhập số lượng sách:");
    let theLoaiSach = prompt("Nhập thể loại sách:");

    let newBook = {
        id: bookId++, 
        name: tenSach,
        price: giaSach,
        quantity: soLuongSach,
        category: theLoaiSach,
    };
    books.push(newBook);

    console.log("Đã thêm sách mới thành công:");
    console.log(`ID: ${newBook.id}, Tên: ${newBook.name}, Giá: ${newBook.price}, Số lượng: ${newBook.quantity}, Thể loại: ${newBook.category}`);
}
function timKiemSach() {
    let tuKhoa = prompt("Nhập tên sách hoặc ID sách cần tìm:");
    let ketQua = books.filter(book => book.name.toLowerCase().includes(tuKhoa.toLowerCase()) || book.id === parseInt(tuKhoa));

    if (ketQua.length > 0) {
        console.log("Kết quả tìm kiếm:");
        ketQua.forEach(book => {
            console.log(`- ID: ${book.id}, Tên: ${book.name}, Giá: ${book.price}, Số lượng: ${book.quantity}, Thể loại: ${book.category}`);
        });
    } else {
        console.log(`Không tìm thấy sách với từ khóa "${tuKhoa}".`);
    }    
}
function muasach() {
    let idSach = +prompt("Nhập ID sách muốn mua:");
    let soLuongMua = +prompt("Hãy nhập số lượng muốn mua: ");
    
    let index = books.findIndex(book => book.id === idSach);
    if (index === -1) {
        console.log("Không tìm thấy sách");
        return;
    }

    let sach = books[index];

    if (soLuongMua <= 0 || soLuongMua > sach.quantity) {
        console.log("Số lượng sách mua không đủ hoặc không hợp lệ");
        return;
    }
    sach.quantity -= soLuongMua;
    let sachTrongGioIndex = card.findIndex(book => book.id === idSach);
    if (sachTrongGioIndex !== -1) {
        card[sachTrongGioIndex].quantity += soLuongMua;
    } else {
        let newSach = { 
            id: sach.id, 
            name: sach.name, 
            price: sach.price, 
            quantity: soLuongMua 
        };
        card.push(newSach);
    }
    console.log(`Đã thêm ${soLuongMua} cuốn sách "${sach.name}" vào giỏ hàng.`);
    console.log(card);
}
function sapXepSach(tangDan) {
    books.sort((a, b) => {
        if (tangDan) {
            return a.price - b.price;
        } else {
            return b.price - a.price;
        }
    });

    console.log("Đã sắp xếp sách theo giá.");
}

function tinhTongTien() {
    let tongSoLuong = cart.reduce((tong, book) => tong + book.quantity, 0);
    let tongTien = cart.reduce((tong, book) => tong + book.price * book.quantity, 0);
    console.log(`Tổng số lượng sách đã mua: ${tongSoLuong}`);
    console.log(`Tổng tiền trong giỏ hàng: ${tongTien}`);
}

function hienThiTongSoLuongSach() {
    let tongSoLuongKho = books.reduce((tong, book) => tong + book.quantity, 0);
    console.log(`Tổng số lượng sách trong kho: ${tongSoLuongKho}`);
}



let choice;
do {
    choice = +prompt(`
       1. Hiển thị danh sách sách theo thể loại (Người dùng chọn thể loại để xem sách trong danh mục đó).
       2. Thêm sách mới vào kho
       3. Tìm kiếm sách theo tên hoặc id.
       4. Mua sách (Nhập id sách cần mua và số lượng, cập nhật lại kho).
       5. Sắp xếp sách theo giá:
       6. Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng
       7. Hiển thị tổng số lượng sách trong kho.
       8. Thoát chương trình.`)
       switch (choice) {
        case 1:
            hienThiSachTheoTheLoai();
            break;
        case 2:
            themSachMoi();
            break;
        case 3:
            timKiemSach();
            break;
        case 4:
            muasach();
            break;
        case 5:
            sapXepSach(true);
            break;
        case 6:
            sapXepSach(false);
            break;
        case 7:
            tinhTongTien();
            break;
        case 8:
            hienThiTongSoLuongSach();
            break;
       
        default:
            console.log("Lựa chọn không hợp lệ.");
            
            break;
       }
} while (choice !== 8);