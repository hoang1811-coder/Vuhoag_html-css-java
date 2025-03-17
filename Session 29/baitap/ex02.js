let productList = [];
let userChoice;
let productIdCounter = 1;

function addProduct() {
  let productId = productIdCounter;
  productIdCounter++;
  let productName = prompt("Nhập tên sản phẩm:");
  let productPrice = prompt("Nhập giá sản phẩm:");
  let productCategory = prompt("Nhập danh mục sản phẩm:");
  let productQuantity = prompt("Nhập số lượng sản phẩm:");
  productList.push({
    id: productId,
    name: productName,
    price: productPrice,
    category: productCategory,
    quantity: productQuantity,
  });
}

function displayProducts() {
  if (productList.length >= 1) {
    let message = "Danh sách sản phẩm:\n";
    for (let i = 0; i < productList.length; i++) {
      message += `ID: ${productList[i].id}, Tên: ${productList[i].name}, Giá: ${productList[i].price}, Danh mục: ${productList[i].category}, Số lượng: ${productList[i].quantity}\n`;
    }
    alert(message);
  } else {
    alert("Danh sách trống");
  }
}

function displayProductDetails() {
  if (productList.length >= 1) {
    let inputId = +prompt("Nhập ID sản phẩm để xem chi tiết:");
    let productIndex = -1;
    for (let i = 0; i < productList.length; i++) {
      if (productList[i].id === inputId) {
        productIndex = i;
        break;
      }
    }
    if (productIndex !== -1) {
      alert(
        `Tên: ${productList[productIndex].name}, Giá: ${productList[productIndex].price}, Danh mục: ${productList[productIndex].category}, Số lượng: ${productList[productIndex].quantity}\n`
      );
    } else {
      alert("Không tìm thấy sản phẩm");
    }
  } else {
    alert("Danh sách trống");
  }
}

function updateProduct() {
  if (productList.length >= 1) {
    let inputId = +prompt("Nhập ID sản phẩm cần cập nhật:");
    let productIndex = -1;
    for (let i = 0; i < productList.length; i++) {
      if (productList[i].id === inputId) {
        productIndex = i;
        break;
      }
    }
    if (productIndex !== -1) {
      productList[productIndex].name = prompt("Nhập tên mới:");
      productList[productIndex].price = prompt("Nhập giá mới:");
      productList[productIndex].category = prompt("Nhập danh mục mới:");
      productList[productIndex].quantity = prompt("Nhập số lượng mới:");
      alert("Cập nhật thành công");
    } else {
      alert("Không tìm thấy sản phẩm");
    }
  } else {
    alert("Danh sách trống");
  }
}

function deleteProduct() {
  if (productList.length >= 1) {
    let inputId = +prompt("Nhập ID sản phẩm cần xóa:");
    let productIndex = -1;
    for (let i = 0; i < productList.length; i++) {
      if (productList[i].id === inputId) {
        productIndex = i;
        break;
      }
    }
    if (productIndex !== -1) {
      productList.splice(productIndex, 1);
      alert("Xóa thành công");
    } else {
      alert("Không tìm thấy sản phẩm");
    }
  } else {
    alert("Danh sách trống");
  }
}

function filterProductsByPriceRange() {
  if (productList.length >= 1) {
    alert("Nhập khoảng giá (ví dụ: giá1: 1000 - giá2: 2000). giá1 phải nhỏ hơn hoặc bằng giá2.");
    let price1 = +prompt("giá1:");
    let price2 = +prompt("giá2:");
    if (price1 <= price2) {
      let message = `Các sản phẩm trong khoảng giá ${price1} - ${price2}:\n`;
      for (let i = 0; i < productList.length; i++) {
        if (productList[i].price >= price1 && productList[i].price <= price2) {
          message += `ID: ${productList[i].id}, Tên: ${productList[i].name}, Giá: ${productList[i].price}, Danh mục: ${productList[i].category}, Số lượng: ${productList[i].quantity}\n`;
        }
      }
      alert(message);
    } else {
      alert("Điều kiện không hợp lệ");
    }
  } else {
    alert("Danh sách trống");
  }
}

do {
  userChoice = +prompt(
    "MENU\n1. Thêm sản phẩm vào danh sách sản phẩm.\n2. Hiển thị tất cả sản phẩm.\n3. Hiển thị chi tiết sản phẩm theo ID.\n4. Cập nhật thông tin sản phẩm (tên, giá, danh mục, số lượng) theo ID sản phẩm.\n5. Xóa sản phẩm theo ID.\n6. Lọc sản phẩm theo khoảng giá.\n7. Thoát."
  );
  switch (userChoice) {
    case 1:
      addProduct();
      break;
    case 2:
      displayProducts();
      break;
    case 3:
      displayProductDetails();
      break;
    case 4:
      updateProduct();
      break;
    case 5:
      deleteProduct();
      break;
    case 6:
      filterProductsByPriceRange();
      break;
    case 7:
      alert("Thoát");
      break;
    default:
      alert("Lựa chọn không hợp lệ");
  }
} while (userChoice !== 7);