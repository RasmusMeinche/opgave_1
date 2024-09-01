fetch("https://kea-alt-del.dk/t7/api/products?limit=10")
    .then(res=>res.json())
    .then(showProducts)

    function showProducts(products) {
        products.forEach(showProduct)
    }

    function showProduct (product) {
        console.log(product);

        /* Fang template */

        const template = document.querySelector("#productTemplate").content;

        /* lav en kopi */

        const copy = template.cloneNode(true);

        /* ændre indhold */

        copy.querySelector("h1").textContent=product.productdisplayname

        /* appende til placering i dom */
        document.querySelector("main").appendChild(copy);
    }