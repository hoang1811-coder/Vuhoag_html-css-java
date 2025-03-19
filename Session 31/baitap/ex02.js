const toggleBtn = document.getElementById("toggleBtn");
toggleBtn.addEventListener("click", function() {
    if (document.body.classList.contains("dark-mode")) {
        document.body.classList.remove("dark-mode");
    } else {
        document.body.classList.add("dark-mode");
    }
});