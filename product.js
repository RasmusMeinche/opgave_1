    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    const url = `https://kea-alt-del.dk/t7/api/products/${id}`;

function getProduct(){
    fetch(url).then((res)=> res.json())
    .then(visProduct);
}

function visProduct(product){
    document.querySelector(".grid_2 .navn").textContent=product.productdisplayname;
    document.querySelector(".grid_2 p").textContent=product.brandname;
    document.querySelector(".grid_2 .nummer").textContent = product.id;
    document.querySelector(".shoe-container img").src= `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;
    document.querySelector(".shoe-container img").alt= product.productdisplayname;
    
}

getProduct();