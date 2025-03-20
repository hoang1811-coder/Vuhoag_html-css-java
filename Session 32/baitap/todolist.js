let jobs = [
    {
        id: 1,
        name:"Dũng",
    },
    {
        id: 2,
        name:"Tiến",

    },
];
function renderJob() {
    let str=""
    for (let i = 0; i < job.length; i++){
        str +=
            `<li>${job[i].name}
            <button>Sửa</button>
            <button onclick=deleteJobs${jobs[i].id}>Xóa</button></li>`
    }
    document.getElementsByClassName("jobs").value;

}

function deteleJobs(id) {
    let index = jobs.findIndex(item => item.id == id);
    jobs.splice(index, 1);
    renderJob();
}