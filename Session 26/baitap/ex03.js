function filterEmails(emailList) {
    if (Array.isArray(emailList)) {
        if (emailList.length > 0) {
            let validEmails = [];
            for (let i = 0; i < emailList.length; i++) {
                let containsAtSymbol = false;
                let containsSpace = false;
                for (let j = 0; j < emailList[i].length; j++) {
                    if (emailList[i][j] == "@") {
                        containsAtSymbol = true;
                    }
                    if (emailList[i][j] == " ") {
                        containsSpace = true;
                    }
                }
                if (containsAtSymbol && !containsSpace) {
                    validEmails.push(`"${emailList[i]}"`);
                }
            }
            if (validEmails.length > 0) {
                alert(`[${validEmails}]`);
            }
        } else {
            alert("Mảng không có phần tử nào");
        }
    } else {
        alert("Dữ liệu không hợp lệ");
    }
}

filterEmails(["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com"]);
