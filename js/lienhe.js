// ===============================
// MENU ACTIVE
// ===============================
const navLinks = document.querySelectorAll(".nav__link");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(item => item.classList.remove("active"));
        this.classList.add("active");
    });
});


// ===============================
// FORM LIÊN HỆ
// ===============================
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const contentInput = document.getElementById("noidung");

const submitBtn = document.getElementById("submit");
const resetBtn = document.getElementById("reset");


// KIỂM TRA EMAIL
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


// SUBMIT FORM
submitBtn.addEventListener("click", function (e) {

    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const content = contentInput.value.trim();

    // Kiểm tra rỗng
    if (name === "" || email === "" || content === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    // Kiểm tra email
    if (!isValidEmail(email)) {
        alert("Email không hợp lệ!");
        return;
    }

    // Thành công
    alert(
        "Gửi thông tin thành công!\n\n" +
        "Họ tên: " + name + "\n" +
        "Email: " + email
    );

    // Reset form
    nameInput.value = "";
    emailInput.value = "";
    contentInput.value = "";
});


// ===============================
// RESET FORM
// ===============================
resetBtn.addEventListener("click", function () {

    const confirmReset = confirm("Bạn có chắc muốn xóa dữ liệu?");

    if (!confirmReset) {
        event.preventDefault();
    }
});


// ===============================
// HIỆU ỨNG ICON
// ===============================
const icons = document.querySelectorAll(".nav__icon");

icons.forEach(icon => {

    icon.addEventListener("mouseenter", () => {
        icon.style.transform = "scale(1.2)";
    });

    icon.addEventListener("mouseleave", () => {
        icon.style.transform = "scale(1)";
    });
});