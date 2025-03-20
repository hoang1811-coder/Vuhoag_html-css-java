const subjectNameInput = document.getElementById("subjectName");
const addSubjectBtn = document.getElementById("addSubjectBtn");
const subjectList = document.getElementById("subjectList");

addSubjectBtn.addEventListener("click", function() {
    const subjectName = subjectNameInput.value.trim();
    if (subjectName === "") {
        alert("tên môn học không được để trống!");
    } else {
        const newListItem = document.createElement("li");
        newListItem.textContent = subjectList.children.length + 1 + ". " + subjectName;
        subjectList.appendChild(newListItem);
        subjectNameInput.value = ""; 
    }
});