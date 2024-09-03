const categoryList = document.querySelector(".wrapper a");
const params  = new URLSearchParams(document.location.search);
const category = params.get("category");
let url = undefined;


fetch("https://kea-alt-del.dk/t7/api/categories")
    .then((response) => response.json())
    .then((categories) => {
        categories.forEach((category) => {
            categoryList.innerHTML += `<div><a href=*index.html?category=${category.category}*>${category.category}</a></div>`;
        });
    });

if (params.has("category")){

    url = "https://kea-alt-del.dk/t7/api/categories" + category;

}