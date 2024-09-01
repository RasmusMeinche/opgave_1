fetch("https://kea-alt-del.dk/t7/api/products/1525")
    .then((response)=>response.json())
    .then((data)=>showProduct(data));

    function showProduct (product) {
        console.log(product);
        document.querySelector("#productname").textContent = product.productdisplayname;
        document.querySelector("div img").src = `https://kea-alt-del.dk/t7/images/wepb/640/${product.id}.webp`;
    }