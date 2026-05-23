document.addEventListener('DOMContentLoaded', () => {

    // ===============================
    // NAVBAR ACTIVE
    // ===============================
    const navLinks = document.querySelectorAll('.nav__link');

    const path = window.location.pathname;

    navLinks.forEach(link => {

        if (link.href.includes(path)) {
            link.classList.add('active');
        }

    });

    // ===============================
    // CART
    // ===============================
    const cartButtons = document.querySelectorAll('.product-card__btn');

    const cartCounter = document.querySelector('.cart-count');

    let cartCount = Number(localStorage.getItem('cartCount')) || 0;

    // Update cart when page loads
    if (cartCounter) {
        cartCounter.textContent = cartCount;
    }

    // ===============================
    // TOAST
    // ===============================
    const toast = document.getElementById('toast');

    function showToast(message) {

        if (!toast) return;

        toast.textContent = message;

        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 2000);
    }

    // ===============================
    // ADD TO CART
    // ===============================
    cartButtons.forEach(btn => {

        btn.addEventListener('click', (e) => {

            const productCard =
                e.target.closest('.product-card');

            const productName =
                productCard.querySelector('.product-card__name').innerText;

            cartCount++;

            // Save localStorage
            localStorage.setItem('cartCount', cartCount);

            // Update UI
            if (cartCounter) {
                cartCounter.textContent = cartCount;
            }

            // Show toast
            showToast(`Đã thêm: ${productName}`);

            console.log(`Cart count: ${cartCount}`);

        });

    });

    // ===============================
    // PAGINATION
    // ===============================
    const dots = document.querySelectorAll('.pagination__dot');

    const prevBtn =
        document.querySelector('.pagination__arrow--prev');

    const nextBtn =
        document.querySelector('.pagination__arrow--next');

    let currentDot = 0;

    function updatePagination() {

        dots.forEach((dot, index) => {

            dot.classList.toggle(
                'pagination__dot--active',
                index === currentDot
            );

        });

    }

    if (nextBtn && prevBtn) {

        nextBtn.addEventListener('click', () => {

            currentDot =
                (currentDot + 1) % dots.length;

            updatePagination();

        });

        prevBtn.addEventListener('click', () => {

            currentDot =
                (currentDot - 1 + dots.length) % dots.length;

            updatePagination();

        });

    }

    // Initialize pagination
    updatePagination();

    // ===============================
    // SMOOTH SCROLL
    // ===============================
    navLinks.forEach(link => {

        link.addEventListener('click', (e) => {

            const href = link.getAttribute('href');

            if (href.startsWith('#')) {

                e.preventDefault();

                const target =
                    document.querySelector(href);

                if (target) {

                    target.scrollIntoView({
                        behavior: 'smooth'
                    });

                }

            }

        });

    });

    // ===============================
    // CONSOLE LOG
    // ===============================
    console.log("Football TG JS Loaded 🚀");

});