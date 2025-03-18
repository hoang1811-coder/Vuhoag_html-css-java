let products=[
    {
       id:1,
       name: "mèn mén",
       price:20000,
       quantity: 20,
       category: "món ăn dân tộc Mông",
   },

    {
       id:2,
       name: "mứt",
       price: 80000,
       quantity: 21,
       category: "món ăn dân tộc Kinh",
   }, 

    {  id:3,
       name: "com lam",
       price: 40000,
       quantity: 15,
       category: "món ăn dân tộc Mông",
   },

    {  id:4,
       name: "bánh đậu xanh",
       price: 60000,
       quantity: 30,
       category: "món ăn dân tộc Kinh",
    }
]    
let card = [];
function hienThiTenSanPham() {
    let danhmuc = prompt("Bạn hãy nhập danh mục muốn hiện thị:");
    let sanPhamTheoDanhMuc = products.filter(sp => sp.category.toLowerCase() === danhmuc.toLowerCase());
    if (sanPhamTheoDanhMuc.length > 0) {
        let message = `Các sản phẩm theo danh mục "${danhmuc}":\n`;
        sanPhamTheoDanhMuc.forEach(sp => {
            message += `ID: ${sp.id}, Tên: ${sp.name}, Giá: ${sp.price}\n`;
          });
          console.log(message);
    } else {
        console.log(`Không tìm thấy sản phẩm nào theo tên danh mục ${danhmuc}`);
    }    
}
function chonSanPhamMua() {
    let id = +prompt("Nhập ID sản phẩm muốn mua:");
    let sanPhamIndex = products.findIndex(sp => sp.id === id);
    if (sanPhamIndex === -1) {
        console.log("Sản phẩm không tồn tại.");
        return;
    }
    let sanPham = products[sanPhamIndex];
    let soLuongMua = +prompt(`Nhập số lượng sản phẩm "${sanPham.name}" muốn mua (tối đa ${sanPham.quantity}):`);
    if (soLuongMua <= 0 || soLuongMua > sanPham.quantity) {
        console.log("Số lượng không hợp lệ hoặc không đủ.");
        return;
    }
    sanPham.quantity -= soLuongMua;
    let sanPhamTrongGioIndex = card.findIndex(sp => sp.id === id);
    if (sanPhamTrongGioIndex !== -1) {
        card[sanPhamTrongGioIndex].quantity += soLuongMua;
    } else {
        card.push({ ...sanPham, quantity: soLuongMua });
    }
    console.log(`Đã thêm ${soLuongMua} sản phẩm "${sanPham.name}" vào giỏ hàng.`);
    console.log(card);
}
function sapXepSanPham() {
    products.sort((a,b) =>{
        if (sapxeptangdan) {
            return a.price - b.price;
        } else {
            return b.price - a.price; 
        }
    }
);
console.log("Đã sắp xếp sản phẩm theo giá.");   
}
function tinhTienThanhToan() {
    let tongTien = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    console.log(`Tổng tiền thanh toán: ${tongTien} VND.`);
  }
let choice;
do {
    choice = +prompt(`
       1. Hiển thị các sản phẩm theo tên danh mục.
       2. Chọn sản phẩm để mua bằng cách nhập id sản phẩm.
       3. Sắp xếp các sản phẩm trong cửa hàng theo giá tăng dần.
       4. Sắp xếp các sản phẩm trong cửa hàng theo giá giảm dần.
       5.Tính số tiền thanh toán trong giỏ hàng.
       6.Thoát.`)
       switch (choice) {
        case 1:
            hienThiTenSanPham();
            break;
        case 2:
            chonSanPhamMua();
            break;
        case 3:
            sapXepSanPham(true);
            break;
        case 4:
            sapXepSanPham(false);
            break;
        case 5:
            tinhTienThanhToan();
            break;
        case 6:
            
            break;
       
        default:
            console.log("Lựa chọn khôg hợp lệ.");
            
            
            break;
       }
}while(choice !==6);     