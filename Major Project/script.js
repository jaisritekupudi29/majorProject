function viewProduct(name,price,vendor){

    localStorage.setItem("name",name);
    localStorage.setItem("price",price);
    localStorage.setItem("vendor",vendor);

    window.location.href="product.html";
}

if(document.getElementById("name")){

    document.getElementById("name").innerText =
    localStorage.getItem("name");

    document.getElementById("price").innerText =
    "₹" + localStorage.getItem("price");

    document.getElementById("vendor").innerText =
    "Vendor: " + localStorage.getItem("vendor");
}

function addToCart(){

    alert("Product Added To Cart");
}