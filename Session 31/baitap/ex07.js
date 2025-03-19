let todoList = [
    { id: 1, task: 'Hit the gym', completed: false },
    { id: 2, task: 'Pay bills', completed: true },
    { id: 3, task: 'Meet george', completed: false },
    { id: 4, task: 'Buy eggs', completed: false },
    { id: 5, task: 'Read a book', completed: false },
    { id: 6, task: 'Organize office', completed: false },
];

const list = document.getElementById("myUL");
const input = document.getElementById("myInput");
const addBtn = document.querySelector(".addBtn");

function renderTodoList() {
    list.innerHTML = "";
    todoList.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.task;
        if (item.completed) {
            li.classList.add("checked");
        }
        const span = document.createElement("SPAN");
        const txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);

        list.appendChild(li);
    });
}

function addTodo() {
    const task = input.value.trim();
    if (task !== "") {
        todoList.push({
            id: todoList.length + 1,
            task: task,
            completed: false,
        });
        input.value = "";
        renderTodoList();
    }
}

list.addEventListener("click", function(ev) {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
        const taskIndex = todoList.findIndex(item => item.task === ev.target.textContent);
        if (taskIndex !== -1) {
            todoList[taskIndex].completed = !todoList[taskIndex].completed;
        }
    } else if (ev.target.className === "close") {
        const li = ev.target.parentElement;
        const taskIndex = todoList.findIndex(item => item.task === li.textContent.slice(0, -1));
        if (taskIndex !== -1) {
            todoList.splice(taskIndex, 1);
            renderTodoList();
        }
    }
}, false);
addBtn.addEventListener("click", addTodo);
renderTodoList();