     /* Fang template */
     const template = document.querySelector("#productTemplate").content;

fetch("https://kea-alt-del.dk/t7/api/products?limit=10")
    .then(res=>res.json())
    .then(showProducts)

    function showProducts(products) {
        products.forEach(showProduct)
    }

    function showProduct (product) {
        console.log(product);

        /* lav en kopi */

        const copy = template.cloneNode(true);

        /* ændre indhold */

        copy.querySelector("h1").textContent=product.productdisplayname;
        copy.querySelector(".pris").textContent=product.price;
        copy.querySelector(".rabat").textContent=product.discount;
        copy.querySelector(".brand_name").textContent=product.brandname;
        
        
        const imagePath=`https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`
        copy.querySelector("img").src=imagePath;
        
        
        
        if(product.soldout) {
            /* produktet er udsolgt */
            copy.querySelector(".center-wrap").classList.add("soldout");
        }
        
        if (product.discount === null) {
            copy.querySelector(".grid_1-2 .rabat").classList.add("none2");
            copy.querySelector(".grid_1-2 .fuckdig").classList.add("none2");
        }

        if (product.disocunt){
            copy.querySelector(".center-wrap").classList.add("onSale");
            copy.querySelector(".nyPris").textContent= Math.round(product.price - (product.price * product.discount) / 100);
        }

        /* appende til placering i dom */
        document.querySelector(".grid_1-4").appendChild(copy);

        
    
    }