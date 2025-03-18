let phones = [
    { id: 1, name: "iPhone 13", price: 20000000, quantity: 10, company: "Apple" },
    { id: 2, name: "Samsung Galaxy S22", price: 18000000, quantity: 8, company: "Samsung" },
    { id: 3, name: "Xiaomi Redmi Note 11", price: 6000000, quantity: 15, company: "Xiaomi" },
    { id: 4, name: "Oppo Reno 7", price: 8000000, quantity: 12, company: "Oppo" },
    { id: 5, name: "iPhone 12", price: 15000000, quantity: 5, company: "Apple" },
    { id: 6, name: "Samsung Galaxy A53", price: 9000000, quantity: 7, company: "Samsung" },
    { id: 7, name: "Xiaomi 12 Pro", price: 16000000, quantity: 3, company: "Xiaomi" },
    { id: 8, name: "Oppo Find X5 Pro", price: 22000000, quantity: 2, company: "Oppo" },
];

let cart = [];
let phoneIdCounter = phones.length + 1;

function displayPhonesByBrand() {
    let brand = prompt("Nhập hãng điện thoại muốn xem:");
    let phonesByBrand = phones.filter(phone => phone.company.toLowerCase() === brand.toLowerCase());

    if (phonesByBrand.length > 0) {
        console.log(`Danh sách điện thoại hãng "${brand}":`);
        phonesByBrand.forEach(phone => {
            console.log(`- ID: ${phone.id}, Tên: ${phone.name}, Giá: ${phone.price}, Số lượng: ${phone.quantity}`);
        });
    } else {
        console.log(`Không tìm thấy điện thoại hãng "${brand}".`);
    }
}

function addPhone() {
    let phoneName = prompt("Nhập tên điện thoại:");
    let phonePrice = +prompt("Nhập giá điện thoại:");
    let phoneQuantity = +prompt("Nhập số lượng điện thoại:");
    let phoneBrand = prompt("Nhập hãng điện thoại:");

    let newPhone = {
        id: phoneIdCounter++,
        name: phoneName,
        price: phonePrice,
        quantity: phoneQuantity,
        company: phoneBrand,
    };
    phones.push(newPhone);

    console.log("Đã thêm điện thoại mới thành công:");
    console.log(`ID: ${newPhone.id}, Tên: ${newPhone.name}, Giá: ${newPhone.price}, Số lượng: ${newPhone.quantity}, Hãng: ${newPhone.company}`);
}

function searchPhone() {
    let keyword = prompt("Nhập tên điện thoại hoặc ID điện thoại cần tìm:");
    let searchResults = phones.filter(phone => phone.name.toLowerCase().includes(keyword.toLowerCase()) || phone.id === parseInt(keyword));

    if (searchResults.length > 0) {
        console.log("Kết quả tìm kiếm:");
        searchResults.forEach(phone => {
            console.log(`- ID: ${phone.id}, Tên: ${phone.name}, Giá: ${phone.price}, Số lượng: ${phone.quantity}, Hãng: ${phone.company}`);
        });
    } else {
        console.log(`Không tìm thấy điện thoại với từ khóa "${keyword}".`);
    }
}

function buyPhone() {
    let phoneId = +prompt("Nhập ID điện thoại muốn mua:");
    let buyQuantity = +prompt("Nhập số lượng điện thoại muốn mua:");
    let phoneIndex = phones.findIndex(phone => phone.id === phoneId);

    if (phoneIndex === -1) {
        console.log("Không tìm thấy điện thoại với ID đã nhập.");
        return;
    }

    let phone = phones[phoneIndex];

    if (buyQuantity <= 0 || buyQuantity > phone.quantity) {
        console.log("Số lượng mua không hợp lệ hoặc không đủ.");
        return;
    }

    phone.quantity -= buyQuantity;
    let phoneInCartIndex = cart.findIndex(phone => phone.id === phoneId);

    if (phoneInCartIndex !== -1) {
        cart[phoneInCartIndex].quantity += buyQuantity;
    } else {
        cart.push({ ...phone, quantity: buyQuantity });
    }

    console.log(`Đã thêm ${buyQuantity} điện thoại "${phone.name}" vào giỏ hàng.`);
}

function checkoutCart() {
    if (cart.length === 0) {
        console.log("Giỏ hàng trống.");
        return;
    }

    let totalPrice = cart.reduce((total, phone) => total + phone.price * phone.quantity, 0);
    console.log(`Thanh toán thành công. Tổng tiền: ${totalPrice}`);
    cart = [];
}

function sortPhonesByPrice(ascending) {
    phones.sort((a, b) => {
        if (ascending) {
            return a.price - b.price;
        } else {
            return b.price - a.price;
        }
    });

    console.log("Đã sắp xếp điện thoại theo giá.");
    console.log("Danh sách điện thoại sau khi sắp xếp:");
    phones.forEach(phone => {
        console.log(`- ID: ${phone.id}, Tên: ${phone.name}, Giá: ${phone.price}, Số lượng: ${phone.quantity}, Hãng: ${phone.company}`);
    });
}

function calculateTotalValueOfPhonesInStock() {
    let totalStockValue = phones.reduce((total, phone) => total + phone.price * phone.quantity, 0);
    console.log(`Tổng tiền của các điện thoại trong kho: ${totalStockValue}`);
}

function displayTotalQuantityOfPhonesByBrand() {
    let brandStats = {};
    phones.forEach(phone => {
        if (brandStats[phone.company]) {
            brandStats[phone.company] += phone.quantity;
        } else {
            brandStats[phone.company] = phone.quantity;
        }
    });

    console.log("Tổng số lượng điện thoại theo từng hãng:");
    for (let brand in brandStats) {
        console.log(`- ${brand}: ${brandStats[brand]}`);
    }
}

let choice;
do {
    choice = +prompt(`
        1. Hiển thị danh sách điện thoại theo hãng.
        2. Thêm điện thoại mới vào cửa hàng.
        3. Tìm kiếm điện thoại theo tên hoặc id.
        4. Mua điện thoại.
        5. Thanh toán tất cả điện thoại trong giỏ hàng.
        6. Sắp xếp điện thoại theo giá.
        7. Hiển thị tổng số tiền của các điện thoại trong kho.
        8. Hiển thị tổng số lượng điện thoại theo từng hãng.
        9. Thoát chương trình.`);

    switch (choice) {
        case 1:
            displayPhonesByBrand();
            break;
        case 2:
            addPhone();
            break;
        case 3:
            searchPhone();
            break;
        case 4:
            buyPhone();
            break;
        case 5:
            checkoutCart();
            break;
        case 6:
            let ascending = confirm("Bạn muốn sắp xếp tăng dần?");
            sortPhonesByPrice(ascending);
            break;
        case 7:
            calculateTotalValueOfPhonesInStock();
            break;
        case 8:
            displayTotalQuantityOfPhonesByBrand();
            break;
        case 9:
            console.log("Tạm biệt!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ.");
            break;
    }
} while (choice !== 9);