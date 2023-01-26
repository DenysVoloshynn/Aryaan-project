import products from './productsData.js';



window.addEventListener("DOMContentLoaded", function (e) {
    const productsHTML = document.querySelectorAll(".product")
    const productsHTMLArray = Array.from(productsHTML)
    productsHTMLArray.forEach(p => {
        p.addEventListener("click", function (e) {
            let currProduct

            products.map(product => {
                if (product.id == p.dataset.id) {
                    currProduct = product
                }
            })

            if(!e.target.closest(".btn-cart")) {
                window.location.pathname = './sneakerinfo.html'
            }

            if (localStorage.getItem("sbeakerPageInfo")) {
                return
            } else {
                localStorage.setItem("sneakerPageInfo", {})
            }

            localStorage.setItem("sneakerPageInfo", JSON.stringify(currProduct))

        })
    })
})








window.addEventListener("load", function () {
    if (window.location.pathname.includes("sneakerinfo")) {
        
            const productInfo = JSON.parse(this.localStorage.getItem("sneakerPageInfo"))
    
            const productInfoHTML = `<main id="product" data-id="${productInfo.id}">
                             <div class="product-info">
                                <div class="gallery">
                                    <img src="${productInfo.img}" alt="">
                                    <img src="${productInfo.imgPairAbove}" alt="">
                                    <img src="${productInfo.imgSole}" alt="">
                                    <img src="${productInfo.imgPairSide}" alt="">
                                 </div>
                                 <div class="info">
                                    <p class="name">${productInfo.name}</p>
                                    <p class="desc">
                                         ${productInfo.desc}
                                    </p>
                                    <p class="price">kr${productInfo.price}</p>
                                    <button id="add-in-basket" class="btn-add-in-cart"><i class="icon-opencart"></i></button>
                                 </div>
                              </div>
                        </main>`
    
            const main = document.querySelector("main")
            main.insertAdjacentHTML("beforeend", productInfoHTML)

    }
})