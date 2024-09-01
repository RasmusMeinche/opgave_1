fetch("https://kea-alt-del.dk/t7/api/products/1525")
    .then((response)=>response.json())
    .then((data)=>showProduct(data));

    function showProduct () {
        console.log(product);
        document.querySelector(".productname").textContent = product.productdisplayname;
    }