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
        if(cart) {
            cart.forEach(p => {

                const pHTML = `<div  class="product" data-id="${p.id}">
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
                               </div>`
    
                productsList.insertAdjacentHTML("beforeend", pHTML)
                totalPrice.innerText = +totalPrice.innerText + p.price
    
            });
        }

        showEmptyBlock(e)
    })
}



if(window.location.pathname.includes("cart.html")) {
    window.addEventListener("load", function (e) {
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
    
                if(!e.target.closest("#delete")) {
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
