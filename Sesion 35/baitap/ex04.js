const nameInput = document.getElementById("name");
const positionInput = document.getElementById("position");
const addEmployeeBtn = document.getElementById("addEmployeeBtn");
const employeeTableBody = document.querySelector("#employeeTable tbody");
const pagination = document.getElementById("pagination");
const pageNumbers = document.getElementById("pageNumbers");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let employees = JSON.parse(localStorage.getItem("employees")) || [
    { name: "Nguyễn Văn A", position: "Developer" },
    { name: "Trần Thị B", position: "Designer" },
    { name: "Phạm Văn C", position: "Project Manager" },
    { name: "Lê Thị D", position: "QA Engineer" },
    { name: "Vũ Văn E", position: "DevOps" },
    { name: "Hoàng Thị F", position: "HR Manager" },
];

let currentPage = 1;
const employeesPerPage = 3;

function renderEmployees() {
    const startIndex = (currentPage - 1) * employeesPerPage;
    const endIndex = startIndex + employeesPerPage;
    const currentEmployees = employees.slice(startIndex, endIndex);

    employeeTableBody.innerHTML = "";
    currentEmployees.forEach((employee, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${startIndex + index + 1}</td>
            <td>${employee.name}</td>
            <td>${employee.position}</td>
        `;
        employeeTableBody.appendChild(row);
    });
}

function renderPagination() {
    const pageCount = Math.ceil(employees.length / employeesPerPage);
    pageNumbers.innerHTML = "";
    for (let i = 1; i <= pageCount; i++) {
        const pageNumber = document.createElement("span");
        pageNumber.textContent = i;
        pageNumber.className = "page-number";
        if (i === currentPage) {
            pageNumber.classList.add("active");
        }
        pageNumber.addEventListener("click", () => {
            currentPage = i;
            renderEmployees();
            renderPagination();
        });
        pageNumbers.appendChild(pageNumber);
    }
}

function updatePaginationButtons() {
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === Math.ceil(employees.length / employeesPerPage);
}

renderEmployees();
renderPagination();
updatePaginationButtons();

addEmployeeBtn.addEventListener("click", () => {
    const name = nameInput.value;
    const position = positionInput.value;

    if (name && position) {
        employees.push({ name, position });
        localStorage.setItem("employees", JSON.stringify(employees));
        renderEmployees();
        renderPagination();
        updatePaginationButtons();
        nameInput.value = "";
        positionInput.value = "";
    }
});

prevBtn.addEventListener("click", () => {
    currentPage--;
    renderEmployees();
    renderPagination();
    updatePaginationButtons();
});

nextBtn.addEventListener("click", () => {
    currentPage++;
    renderEmployees();
    renderPagination();
    updatePaginationButtons();
});