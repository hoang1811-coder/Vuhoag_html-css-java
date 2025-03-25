const websiteNameInput = document.getElementById("websiteName");
const websiteUrlInput = document.getElementById("websiteUrl");
const saveBookmarkBtn = document.getElementById("saveBookmarkBtn");
const bookmarksList = document.getElementById("bookmarksList");

let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

function renderBookmarks() {
    bookmarksList.innerHTML = "";
    bookmarks.forEach((bookmark, index) => {
        const bookmarkItem = document.createElement("div");
        bookmarkItem.className = "bookmark-item";
        bookmarkItem.innerHTML = `
            <span>${bookmark.name} - <a href="${bookmark.url}" target="_blank">${bookmark.url}</a></span>
            <button class="delete-bookmark-btn" data-index="${index}">X</button>
        `;
        bookmarksList.appendChild(bookmarkItem);
    });
}

saveBookmarkBtn.addEventListener("click", () => {
    const name = websiteNameInput.value;
    const url = websiteUrlInput.value;

    if (name && url) {
        bookmarks.push({ name, url });
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
        renderBookmarks();
        websiteNameInput.value = "";
        websiteUrlInput.value = "";
    }
});

bookmarksList.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-bookmark-btn")) {
        const index = parseInt(event.target.dataset.index);
        bookmarks.splice(index, 1);
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
        renderBookmarks();
    }
});

renderBookmarks();