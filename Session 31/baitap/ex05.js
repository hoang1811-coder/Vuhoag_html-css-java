const employees = [
    { id: 1, name: 'John', age: 18, address: 'New York' },
    { id: 2, name: 'Mike', age: 22, address: 'Canada' },
    { id: 3, name: 'Linda', age: 19, address: 'California' },
    { id: 4, name: 'Peter', age: 25, address: 'London' },
    { id: 5, name: 'Tony', age: 17, address: 'New York' },
];

const tableBody = document.querySelector("#employeeTable tbody");

employees.forEach((employee, index) => {
    const row = tableBody.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    const cell3 = row.insertCell();
    const cell4 = row.insertCell();

    cell1.textContent = index + 1;
    cell2.textContent = employee.name;
    cell3.textContent = employee.age;
    cell4.textContent = employee.address;
});