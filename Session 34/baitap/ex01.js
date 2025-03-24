const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const registerBtn = document.getElementById("registerBtn");

let users = JSON.parse(localStorage.getItem("users")) || [];

registerBtn.addEventListener("click", function() {
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (!email) {
        console.log("Email không được bỏ trống.");
        return;
    }

    if (!password) {
        console.log("Mật khẩu không được bỏ trống.");
        return;
    }

    if (password !== confirmPassword) {
        console.log("Xác nhận mật khẩu không trùng khớp.");
        return;
    }

    if (users.some(user => user.email === email)) {
        console.log("Email đã tồn tại.");
        return;
    }

    const newUser = {
        email: email,
        password: password
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    console.log("Đăng ký thành công!");
});