let contactList = [];
let option;

function addNewContact() {
    let id = +prompt("Nhập ID:");
    let name = prompt("Nhập Tên:");
    let email = prompt("Nhập Email:");
    let phone = prompt("Nhập Số điện thoại:");
    contactList.push({ id, name, email, phone });
}

function displayContacts() {
    if (contactList.length > 0) {
        let message = "Danh sách danh bạ:\n";
        contactList.forEach(contact => {
            message += `ID: ${contact.id} - Name: ${contact.name} - Email: ${contact.email} - Phone: ${contact.phone}\n`;
        });
        alert(message);
    } else {
        alert("Danh bạ trống.");
    }
}

function searchContactByPhone() {
    if (contactList.length > 0) {
        let phoneNumber = prompt("Nhập số điện thoại cần tìm:");
        let foundContact = contactList.find(contact => contact.phone === phoneNumber);
        if (foundContact) {
            alert(`Thông tin liên hệ:\nID: ${foundContact.id} - Name: ${foundContact.name} - Email: ${foundContact.email} - Phone: ${foundContact.phone}`);
        } else {
            alert("Không tìm thấy số điện thoại này.");
        }
    } else {
        alert("Danh bạ trống.");
    }
}

function updateContactByID() {
    if (contactList.length > 0) {
        let id = +prompt("Nhập ID của liên hệ cần cập nhật:");
        let contact = contactList.find(c => c.id === id);
        if (contact) {
            contact.name = prompt("Nhập tên mới:");
            contact.email = prompt("Nhập email mới:");
            contact.phone = prompt("Nhập số điện thoại mới:");
            alert("Cập nhật thành công!");
        } else {
            alert("Không tìm thấy liên hệ với ID này.");
        }
    } else {
        alert("Danh bạ trống.");
    }
}

function deleteContactByID() {
    if (contactList.length > 0) {
        let id = +prompt("Nhập ID của liên hệ cần xóa:");
        let index = contactList.findIndex(c => c.id === id);
        if (index !== -1) {
            contactList.splice(index, 1);
            alert("Xóa thành công!");
        } else {
            alert("Không tìm thấy liên hệ với ID này.");
        }
    } else {
        alert("Danh bạ trống.");
    }
}

do {
    option = +prompt("MENU\n1. Thêm liên hệ\n2. Hiển thị danh sách\n3. Tìm kiếm theo số điện thoại\n4. Cập nhật liên hệ theo ID\n5. Xóa liên hệ\n6. Thoát");
    switch (option) {
        case 1:
            addNewContact();
            break;
        case 2:
            displayContacts();
            break;
        case 3:
            searchContactByPhone();
            break;
        case 4:
            updateContactByID();    
            break;
        case 5:
            deleteContactByID();
            break;
        case 6:
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ!");
    }
} while (option !== 6);
