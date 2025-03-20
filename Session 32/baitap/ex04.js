function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.(com|vn)$/;
        return regex.test(email);
    }
function checkEmail() {
    const emailInput = document.getElementById('emailInput').value;
    const result = document.getElementById('result');
    if (validateEmail(emailInput)) {
        result.textContent = 'Email hợp lệ';
        result.style.color = 'green';
    } else {
        result.textContent = 'Email không hợp lệ';
        result.style.color = 'red';
    }
};