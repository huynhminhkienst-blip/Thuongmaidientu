// ======================================
// FOOTBALL-TG JAVASCRIPT
// ======================================


// ======================================
// SELECT ELEMENTS
// ======================================

const addCartButtons = document.querySelectorAll(".product-card__btn");

const cartIcon = document.querySelector(".nav__icon--cart");

const productCards = document.querySelectorAll(".product-card");

const dots = document.querySelectorAll(".pagination__dot");

const prevBtn = document.querySelector(".pagination__arrow--prev");

const nextBtn = document.querySelector(".pagination__arrow--next");

const header = document.querySelector(".header");


// ======================================
// CART SYSTEM
// ======================================

let cartCount = 0;

// tạo badge
const cartBadge = document.createElement("span");

cartBadge.classList.add("cart-badge");

cartBadge.innerText = "0";

// gắn badge vào cart icon
cartIcon.parentElement.style.position = "relative";

cartIcon.parentElement.appendChild(cartBadge);


// ======================================
// TOAST FUNCTION
// ======================================

function showToast(message){

    const toast = document.createElement("div");

    toast.classList.add("toast");

    toast.innerText = message;

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.classList.add("show-toast");

    }, 100);

    setTimeout(() => {

        toast.remove();

    }, 2500);

}


// ======================================
// ADD TO CART
// ======================================

addCartButtons.forEach((button, index) => {

    button.addEventListener("click", () => {

        // tăng số lượng
        cartCount++;

        cartBadge.innerText = cartCount;

        // animation badge
        cartBadge.classList.add("bounce");

        setTimeout(() => {

            cartBadge.classList.remove("bounce");

        }, 400);

        // lấy tên sản phẩm
        const productName =
            productCards[index]
            .querySelector(".product-card__name")
            .innerText;

        // toast
        showToast(`Đã thêm "${productName}" vào giỏ hàng 🛒`);

    });

});


// ======================================
// PAGINATION
// ======================================

let currentPage = 0;

function updatePagination(){

    dots.forEach(dot => {

        dot.classList.remove("pagination__dot--active");

    });

    dots[currentPage]
    .classList.add("pagination__dot--active");

}

updatePagination();


// NEXT

nextBtn.addEventListener("click", () => {

    currentPage++;

    if(currentPage >= dots.length){

        currentPage = 0;

    }

    updatePagination();

});


// PREV

prevBtn.addEventListener("click", () => {

    currentPage--;

    if(currentPage < 0){

        currentPage = dots.length - 1;

    }

    updatePagination();

});


// ======================================
// STICKY HEADER
// ======================================

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");

    }

});


// ======================================
// SCROLL ANIMATION
// ======================================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold: 0.2
});

productCards.forEach(card => {

    card.classList.add("hidden");

    observer.observe(card);

});


// ======================================
// MOBILE MENU AUTO CLOSE
// ======================================

const navLinks = document.querySelectorAll(".nav__link");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        document
        .querySelector(".nav__list")
        .classList.remove("show-menu");

    });

});


// ======================================
// CONSOLE
// ======================================

console.log("FOOTBALL-TG WEBSITE READY ⚽");