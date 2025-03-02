let admin = prompt("tên nhập vào là ADMIN");

if (admin == "ADMIN") {
    let themaster = prompt(" mật khẩu là");
    if (themaster == "TheMaster") {
        alert("Welcome");
    } else if (themaster == "") {
        alert("Cancelled");
    }
} else if (admin == "") {
    alert("Cancelled");
} else {
    alert("I Don't know you");
}