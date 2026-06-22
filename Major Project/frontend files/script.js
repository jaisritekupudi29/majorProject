async function loadProducts(){

    const response = await fetch(
        "http://localhost:5000/products"
    );

    const products = await response.json();

    const div =
        document.getElementById("products");

    if(!div) return;

    div.innerHTML = "";

    products.forEach(product => {

        div.innerHTML += `
            <div class="product">
                <h3>${product.name}</h3>
                <p>Price: ₹${product.price}</p>
                <p>Vendor: ${product.vendor}</p>
            </div>
        `;
    });
}

async function addProduct(){

    const name =
        document.getElementById("name").value;

    const price =
        document.getElementById("price").value;

    const vendor =
        document.getElementById("vendor").value;

    await fetch(
        "http://localhost:5000/products",
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                price,
                vendor
            })
        }
    );

    alert("Product Added");
}