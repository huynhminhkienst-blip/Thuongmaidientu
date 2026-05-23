// ================= PREMIUM REVIEW JAVASCRIPT =================

// AUTO SLIDER PAUSE WHEN HOVER

const slider = document.querySelector(".review__track");

slider.addEventListener("mouseenter", () => {
    slider.style.animationPlayState = "paused";
});

slider.addEventListener("mouseleave", () => {
    slider.style.animationPlayState = "running";
});



// ================= LIVE VIEW COUNTER =================

const viewElement = document.querySelectorAll(".fomo__item")[1];

let viewers = 120;

setInterval(() => {

    let randomChange = Math.floor(Math.random() * 6);

    let increase = Math.random() > 0.5;

    if (increase) {
        viewers += randomChange;
    } else {
        viewers -= randomChange;
    }

    // giới hạn
    if (viewers < 80) viewers = 80;
    if (viewers > 200) viewers = 200;

    viewElement.innerHTML = `👀 ${viewers} người đang xem sản phẩm`;

}, 3000);




// ================= SOLD NOTIFICATION =================

const soldElement = document.querySelectorAll(".fomo__item")[0];

let sold = 32;

setInterval(() => {

    sold += Math.floor(Math.random() * 3);

    soldElement.innerHTML = `🔥 ${sold} người vừa mua hôm nay`;

}, 5000);




// ================= BUTTON EFFECT =================

const buyBtn = document.querySelector(".premium__btn");

buyBtn.addEventListener("mouseenter", () => {

    buyBtn.style.boxShadow =
        "0 20px 45px rgba(13,0,196,0.5)";

});

buyBtn.addEventListener("mouseleave", () => {

    buyBtn.style.boxShadow =
        "0 15px 35px rgba(13,0,196,0.3)";

});




// ================= SCROLL ANIMATION =================

const cards = document.querySelectorAll(".premium__card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

cards.forEach((card) => {

    card.classList.add("hidden");

    observer.observe(card);

});




// ================= RANDOM POPUP PURCHASE =================

const popupNames = [
    "Nguyễn Văn Nam",
    "Trần Minh Quân",
    "Lê Quốc Bảo",
    "Phạm Hoàng Long",
    "Nguyễn Thành Đạt",
    "Đỗ Minh Khang"
];

const popupProducts = [
    "Áo Real Madrid",
    "Giày Mercurial",
    "Áo Manchester United",
    "Full Set Barcelona",
    "Giày Predator",
    "Áo Đội Tuyển Việt Nam"
];

function createPopup() {

    const popup = document.createElement("div");

    popup.classList.add("purchase-popup");

    let randomName =
        popupNames[Math.floor(Math.random() * popupNames.length)];

    let randomProduct =
        popupProducts[Math.floor(Math.random() * popupProducts.length)];

    popup.innerHTML = `
        🛒 <strong>${randomName}</strong>
        vừa mua
        <strong>${randomProduct}</strong>
    `;

    document.body.appendChild(popup);

    setTimeout(() => {
        popup.classList.add("show-popup");
    }, 100);

    setTimeout(() => {

        popup.classList.remove("show-popup");

        setTimeout(() => {
            popup.remove();
        }, 500);

    }, 4000);

}

setInterval(createPopup, 8000);




// ================= COUNTING ANIMATION =================

const statNumbers = document.querySelectorAll(".live__box h3");

statNumbers.forEach((stat) => {

    const originalText = stat.innerText;

    let target =
        parseInt(originalText.replace(/\D/g, ""));

    if (!target) return;

    let count = 0;

    const increment = target / 50;

    const updateCounter = () => {

        count += increment;

        if (count < target) {

            stat.innerText =
                Math.floor(count) +
                originalText.replace(/[0-9]/g, "");

            requestAnimationFrame(updateCounter);

        } else {

            stat.innerText = originalText;

        }

    };

    updateCounter();

});