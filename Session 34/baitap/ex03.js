const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const errorMessage = document.getElementById("errorMessage");

loginBtn.addEventListener("click", function() {
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (!email) {
        errorMessage.textContent = "Email không được bỏ trống.";
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        errorMessage.textContent = "";
        window.location = "./home.html";
    } else {
        errorMessage.textContent = "Email hoặc mật khẩu không đúng.";
    }
});