import products from './productsData.js';

window.addEventListener("DOMContentLoaded", function addProductsInSlider(e) {
    const slider = document.querySelector(".slider-run")
    if (slider) {
        products.map(product => {
            if (product.showInSlider === true) {
                const slideHTML = `
               <a href="./sneakerinfo.html" data-id=${product.id} class="slide">
                 <img src="${product.img}" alt="">
                  <p class="sneakers-name">
                  ${product.name}
                 </p>
                 <p class="price">kr${product.price}</p>
             </a>`
                slider.insertAdjacentHTML("beforeend", slideHTML)
            }
        })
    }

})





window.addEventListener("DOMContentLoaded", function (e) {
    const productsList = this.document.querySelector(".products-list")
    products.map(product => {
        const productHTML = `<div id="product" data-id=${product.id} class="product">
                <div class="head">
                    <img src=" ${product.img} " alt="">
                </div>
                <div class="body">
                    <p class="name"> ${product.name} </p>
                    <p class="price">kr${product.price}</p>
                    <button id="add-in-basket" class="btn-cart">
                        <i class="icon-opencart"></i>
                    </button>
                </div>
            </div>`


        if (product.brand === "air-jordan" && window.location.pathname.includes("/airjordan")) {
            productsList.insertAdjacentHTML("beforeend", productHTML)
        }
        if (product.brand === "dunk" && window.location.pathname.includes("/dunks")) {
            productsList.insertAdjacentHTML("beforeend", productHTML)
        }
        if (product.brand === "blazer" && window.location.pathname.includes("/blazer")) {
            productsList.insertAdjacentHTML("beforeend", productHTML)
        }
        if (product.brand === "nike" && window.location.pathname.includes("/other")) {
            productsList.insertAdjacentHTML("beforeend", productHTML)
        }
    })
})