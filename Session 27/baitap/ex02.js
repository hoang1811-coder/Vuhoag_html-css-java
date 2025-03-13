let choice;
let maxN = 1000;
let n;
let arr = [];
function addStudent() {
    let n = +prompt("Hãy nhâp só lượng sinh viên");
    if (n > 0 && n <= maxN) {
        for (let i = 0; i < n; i++) {
            let name = prompt(`Hãy nhập tên sinh viên thứ ${i+1}: `);
            arr.push(name);           
        }
    } else {
        alert("Số lượng sinh viên nhập vào không hợp lệ")
    }
}
function viewStudent() {
    if (arr.length > 0) {
        alert(`Danh sách sinh viên:\n${arr.join("\n ")}`);
    } else {
        alert("Không có sinh viên nào trong danh sách!");
    }
}
function findStudent() {
    let char = prompt("Hãy nhập tên bạn muốn tìm kiếm trong danh sách: ").trim(); 
    let found = false;

    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].toLowerCase() === char.toLowerCase()) { 
                alert(`Tên sinh viên vừa tìm kiếm là: ${arr[i]}`);
                found = true;
                break; 
            }
        }
        if (!found) {
            alert("Danh sách không có tên sinh viên này!!");
        }
    } else {
        alert("Không có sinh viên nào trong danh sách!");
    }
}
function deleteStuden() {
    let nameDelete = prompt("Hãy nhập tên sinh viên bạn muốn xoá: ");
    let found = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === nameDelete) {
            arr.splice(i, 1);
            alert(`Đã xoá sinh viên`);
            found = true;
            break;
        }
    }
    if (!found) {
        alert("Tên sinh viên không có trong danh sách");
    }
}
do {
    choice = +prompt(`1.Nhập số lượng và tên.
        2.Hiển thị.
        3.Tìm theo tên.
        4.Xoá theo tên.
        5.Thoát.`)
    switch (choice) {
        case 1:
            addStudent();
            
            break;
        case 2:
            viewStudent();
            
            break;
        case 3:
            findStudent();
            
            break;
        case 4:
            deleteStuden();
            
            break;
        case 5:
            
            break;
        default:
            alert("KHông hợp lệ");
            break;
    }
} while (choice !== 5);