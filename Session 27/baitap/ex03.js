function tinhDienTichHinhTron(r) {
    return Math.PI * r * r;
}

function tinhChuViHinhTron(r) {
    return 2 * Math.PI * r;
}

function tinhDienTichHinhChuNhat(dai, rong) {
    return dai * rong;
}

function tinhChuViHinhChuNhat(dai, rong) {
    return 2 * (dai + rong);
}
    let choice;
    do {
        choice = parseInt(prompt(
            "Chọn chức năng:\n" +
            "1. Tính diện tích hình tròn\n" +
            "2. Tính chu vi hình tròn\n" +
            "3. Tính diện tích hình chữ nhật\n" +
            "4. Tính chu vi hình chữ nhật\n" +
            "5. Thoát"
        ));

        switch (choice) {
            case 1:
                let r1 = parseFloat(prompt("Nhập bán kính hình tròn:"));
                alert("Diện tích hình tròn: " + tinhDienTichHinhTron(r1));
                break;
            case 2:
                let r2 = parseFloat(prompt("Nhập bán kính hình tròn:"));
                alert("Chu vi hình tròn: " + tinhChuViHinhTron(r2));
                break;
            case 3:
                let dai1 = parseFloat(prompt("Nhập chiều dài hình chữ nhật:"));
                let rong1 = parseFloat(prompt("Nhập chiều rộng hình chữ nhật:"));
                alert("Diện tích hình chữ nhật: " + tinhDienTichHinhChuNhat(dai1, rong1));
                break;
            case 4:
                let dai2 = parseFloat(prompt("Nhập chiều dài hình chữ nhật:"));
                let rong2 = parseFloat(prompt("Nhập chiều rộng hình chữ nhật:"));
                alert("Chu vi hình chữ nhật: " + tinhChuViHinhChuNhat(dai2, rong2));
                break;
            case 5:
                alert("Thoát chương trình.");
                break;
            default:
                alert("Lựa chọn không hợp lệ! Vui lòng chọn lại.");
        }
    } while (choice !== 5);

