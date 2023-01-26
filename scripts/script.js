import products from './productsData.js';



document.addEventListener("click", function (e) {
    if(e.target.closest("#sneakers")) {
        const nav = document.querySelector(".nav")
        nav.classList.toggle("nav-showed")
    }
    else if(!e.target.closest("#sneakers") && !e.target.closest(".nav")) {
        const nav = document.querySelector(".nav")
        nav.classList.remove("nav-showed")
    }
})



let offset = 0
const sliderRun = document.querySelector(".slider-run")


const btnNext = document.querySelector(".btn-next")
if (btnNext) {
    btnNext.addEventListener("click", function (e) {
        offset += 28
        if (offset > 112) {
            offset = 0
        }
        sliderRun.style.left = -offset + "vw"
    })
}


const btnPrev = document.querySelector(".btn-prev")
if (btnPrev) {
    btnPrev.addEventListener("click", function (e) {
        if (offset > 0) {
            offset -= 28
        }
        sliderRun.style.left = -offset + "vw"
    })
}







window.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelectorAll(".slide")
    const slidesArray = Array.from(slides)

    slidesArray.map(prod => {
        prod.addEventListener("click", function (e) {
            const index = slidesArray.indexOf(prod)
            const currObject = products[index]
            localStorage.setItem("sneakerPageInfo", JSON.stringify(currObject))
        })
    })

})








document.addEventListener("click", function (e) {
    if (e.target.closest(".btn-search")) {
        const searchWrapper = document.querySelector(".search-wrapper")
        searchWrapper.classList.toggle("search-wrapper-showed")
        const inputSearch = document.querySelector(".input-search")
        inputSearch.focus()
    }
    else if (!e.target.closest(".btn-search") && !e.target.closest(".search-wrapper")) {
        const searchWrapper = document.querySelector(".search-wrapper")
        searchWrapper.classList.remove("search-wrapper-showed")
    }
})









const buttonSubmit = document.querySelector(".submit")
buttonSubmit.addEventListener("click", function (e) {
    e.preventDefault()
})



products.map(p => {
    const prodLinkHTML = `<a href="./sneakerinfo.html" data-id=${p.id} class="prod-link hide">
                                    <div class="col-left">
                                       <img src="${p.img}" alt="">
                                    </div>
                                    <div class="col-right">
                                        <p class="name">${p.name}</p>
                                        <p class="price">kr${p.price}</p>
                                    </div>
                                </a>`
    const prodList = document.querySelector(".prod-links-list")
    prodList.insertAdjacentHTML("beforeend", prodLinkHTML)
})


const inputSearch = document.querySelector(".input-search")
inputSearch.addEventListener("change", function (e) {

    const inputValue = e.target.value.toLowerCase().trim()

    products.forEach(p => {

        const currProdHTML = document.querySelector(`[data-id="${p.id}"]`)
        const sneakerName = p.name.toLowerCase().trim()

        if (sneakerName.includes(inputValue)) {
            currProdHTML.classList.remove("hide")
        }

        else if (!sneakerName.includes(inputValue)) {
            currProdHTML.classList.add("hide")
        }

    })


    inputSearch.blur()
})




const prodLinks = document.querySelectorAll(".prod-link")
const prodLinksArray = Array.from(prodLinks)
prodLinksArray.forEach(prod => {
    prod.addEventListener("click", function () {
        const index = prodLinksArray.indexOf(prod)
        const currObject = products[index]
        localStorage.setItem("sneakerPageInfo", JSON.stringify(currObject))
    })
})