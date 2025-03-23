let dish = [
    { name: 'Rau sạch', category: 'Đồ ăn' },
    { name: 'Thịt lợn', category: 'Đồ ăn' },
    { name: 'Pepsi không calo', category: 'Nước' },
    { name: 'Cocacola', category: 'Nước' },
    { name: 'Cờ lê', category: 'Dụng cụ' },
    { name: 'Tuy vít', category: 'Dụng cụ' },
];

const categorySelect = document.getElementById("categorySelect");
const filterBtn = document.getElementById("filterBtn");
const productList = document.getElementById("productList");

filterBtn.addEventListener("click", function() {
    const selectedCategory = categorySelect.value;
    if (selectedCategory === "") {
        productList.innerHTML = dish.map(item => `<li>Tên đồ ăn: ${item.name} - Danh mục: ${item.category}</li>`).join("");
    } else {
        const filteredProducts = dish.filter(item => item.category === selectedCategory);
        productList.innerHTML = filteredProducts.map(item => `<li>Tên đồ ăn: ${item.name} - Danh mục: ${item.category}</li>`).join("");
    }
});