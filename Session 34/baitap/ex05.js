const nameInput = document.getElementById("name");
const positionInput = document.getElementById("position");
const addEmployeeBtn = document.getElementById("addEmployeeBtn");
const employeeTableBody = document.querySelector("#employeeTable tbody");

let employees = JSON.parse(localStorage.getItem("employees")) || [
    { name: "Nguyễn Văn A", position: "Developer" },
    { name: "Trần Thị B", position: "Designer" },
    { name: "Phạm Văn C", position: "Project Manager" },
];

function renderEmployees() {
    employeeTableBody.innerHTML = "";
    employees.forEach((employee, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${employee.name}</td>
            <td>${employee.position}</td>
        `;
        employeeTableBody.appendChild(row);
    });
}

addEmployeeBtn.addEventListener("click", () => {
    const name = nameInput.value;
    const position = positionInput.value;

    if (name && position) {
        employees.push({ name, position });
        localStorage.setItem("employees", JSON.stringify(employees));
        renderEmployees();
        nameInput.value = "";
        positionInput.value = "";
    }
});

renderEmployees();