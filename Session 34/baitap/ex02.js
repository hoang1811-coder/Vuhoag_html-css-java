const courses = JSON.parse(localStorage.getItem('courses')) || [
    { id: 1, content: 'Learn Javascript Session 01', dueDate: '2023-04-17', status: 'Pending', assignedTo: 'Anh Bách' },
    { id: 2, content: 'Learn Javascript Session 2', dueDate: '2023-04-17', status: 'Pending', assignedTo: 'Lâm' },
    { id: 3, content: 'Learn CSS Session 1', dueDate: '2023-04-17', status: 'Pending', assignedTo: 'Hiếu Cì ớt ớt' },
];

const contentInput = document.getElementById('content');
const dueDateInput = document.getElementById('dueDate');
const statusSelect = document.getElementById('status');
const assignedToInput = document.getElementById('assignedTo');
const submitButton = document.getElementById('submit');
const courseTableBody = document.querySelector('#courseTable tbody');

let editingId = null; 

function renderCourses() {
    courseTableBody.innerHTML = '';
    courses.forEach(course => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${course.id}</td>
            <td>${course.content}</td>
            <td>${course.dueDate}</td>
            <td>${course.status}</td>
            <td>${course.assignedTo}</td>
            <td>
                <button class="edit" data-id="${course.id}">Sửa</button>
                <button class="delete" data-id="${course.id}">Xóa</button>
            </td>
        `;
        courseTableBody.appendChild(row);
    });
}

submitButton.addEventListener('click', () => {
    const content = contentInput.value;
    const dueDate = dueDateInput.value;
    const status = statusSelect.value;
    const assignedTo = assignedToInput.value;

    if (editingId) {
        const index = courses.findIndex(course => course.id === editingId);
        if (index !== -1) {
            courses[index] = { ...courses[index], content, dueDate, status, assignedTo };
        }
        editingId = null;
        submitButton.textContent = 'Thêm';
    } else {
        const newCourse = {
            id: courses.length + 1,
            content,
            dueDate,
            status,
            assignedTo,
        };
        courses.push(newCourse);
    }

    localStorage.setItem('courses', JSON.stringify(courses));
    renderCourses();
    contentInput.value = ''; dueDateInput.value = ''; assignedToInput.value = '';
});

courseTableBody.addEventListener('click', (event) => {
    const id = parseInt(event.target.dataset.id);
    if (event.target.classList.contains('delete')) {
        courses.splice(courses.findIndex(course => course.id === id), 1);
    } else if (event.target.classList.contains('edit')) {
        const course = courses.find(course => course.id === id);
        if (course) {
            contentInput.value = course.content;
            dueDateInput.value = course.dueDate;
            statusSelect.value = course.status;
            assignedToInput.value = course.assignedTo;
            editingId = id;
            submitButton.textContent = 'Cập nhật';
        }
    }
    localStorage.setItem('courses', JSON.stringify(courses));
    renderCourses();
});

renderCourses();