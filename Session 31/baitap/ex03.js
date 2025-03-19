const colorBoxes = document.querySelectorAll(".color-box");
colorBoxes.forEach(box => {
    box.addEventListener("click", function() {
        const color = this.dataset.color;
        document.body.style.backgroundColor = color;
    });
});