import products from './productsData.js';


if (localStorage.getItem("firstVisit") == null) {
    localStorage.setItem("cart", "[]")
}

localStorage.setItem("firstVisit", "")





const productsList = document.querySelector(".products-list")
const totalPrice = document.querySelector("#total-price")





function showEmptyBlock(e) {
    const emptyBlock = document.querySelector(".empty-block")
    if (emptyBlock) {
        if (productsList.children.length == 0) {
            emptyBlock.classList.remove("hide")
        }
        if (productsList.children.length > 0) {
            emptyBlock.classList.add("hide")
        }
    }

}





if (window.location.pathname.includes("cart")) {
    window.addEventListener("load", function renderLS(e) {
        const cart = JSON.parse(localStorage.getItem("cart"));

        cart.forEach(p => {

            const pHTML = `<a href="./sneakerinfo.html"  class="product" data-id="${p.id}">
                             <div class="col-left">
                                 <img src="${p.img}" alt="">
                                 <div class="text-wrapper">
                                    <p class="name">${p.name}</p>
                                    <p class="shoes">Shoes</p>
                                    <button id="delete" class="btn-delete"><i class="icon-trash-empty"></i></button>
                                </div>
                             </div>
                             <div class="col-right">
                                <p class="price">kr <span id="price">${p.price}</span> </p>
                             </div>
                           </a>`

            productsList.insertAdjacentHTML("beforeend", pHTML)
            totalPrice.innerText = +totalPrice.innerText + p.price

        });

        showEmptyBlock(e)
        addListener()
    })
}





function addListener() {

    const productsLinks = document.querySelectorAll(".product")
    const productsLinksArray = Array.from(productsLinks)
    let currProduct = {}

    productsLinksArray.map(p => {
        p.addEventListener("click", function (e) {

            products.map(prod => {
               if( p.dataset.id == prod.id) {
                    currProduct = prod
                }
            })

            localStorage.setItem("sneakerPageInfo", JSON.stringify(currProduct))
            
        })
    })
}






document.addEventListener("click", function addProductInCart(e) {

    let product = e.target.closest("#product")
    let count
    let btnAddInBasket


    if (product) {
        btnAddInBasket = product.querySelector("#add-in-basket")
    }

    if (e.target.closest("#add-in-basket")) {
        let productData
        products.map(p => {
            if (p.id == product.dataset.id) {
                productData = p
            }
        })


        const cart = JSON.parse(localStorage.getItem("cart"));
        localStorage.setItem("cart", JSON.stringify([...cart, productData]))


    }

    showEmptyBlock(e)
})











if (productsList) {
    productsList.addEventListener("click", function deleteProductFromCart(e) {
        if (e.target.closest("#delete")) {

            const product = e.target.closest(".product")
            product.remove()

            const cart = JSON.parse(localStorage.getItem("cart"));

            cart.map(p => {
                if (p.id == product.dataset.id) {
                    const index = cart.indexOf(p)
                    cart.splice(index, 1)
                    localStorage.setItem("cart", JSON.stringify(cart))
                }
            })

            const price = product.querySelector("#price")
            totalPrice.innerText = +totalPrice.innerText - +price.innerText

            showEmptyBlock(e)
        }

    })
}
