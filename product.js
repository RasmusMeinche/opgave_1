/* const url = `https://kea-alt-del.dk/t7/api/products/${id}`
 */
fetch("https://kea-alt-del.dk/t7/api/products/1525")
    .then((response)=>response.json())
    .then((data)=>showProduct(data));

    function showProduct (product) {
        console.log(product);
        document.querySelector(".grid_2 .navn").textContent = product.productdisplayname;
        document.querySelector(".grid_2 p").textContent = product.brandname;
        document.querySelector(".grid_2 .nummer").textContent = product.id;
        document.querySelector("").href = `product.html?id=?${produkt.id}`;
        document.querySelector(".shoe-container img").src = `https://kea-alt-del.dk/t7/images/wepb/640/${product.id}.webp`;
    }