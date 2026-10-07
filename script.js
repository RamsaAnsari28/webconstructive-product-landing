// ---------- Product Variants & Pricing ----------

const variants = document.querySelectorAll(".variant");
const priceElement = document.getElementById("price");
const totalElement = document.getElementById("total");

let selectedPrice = 2499;
let quantity = 1;

function updateTotal() {
    const total = selectedPrice * quantity;

    priceElement.textContent = selectedPrice;
    totalElement.textContent = total;
}


// Change product variant
variants.forEach((variant) => {
    variant.addEventListener("click", () => {

        variants.forEach((item) => {
            item.classList.remove("active");
        });

        variant.classList.add("active");

        selectedPrice = Number(variant.dataset.price);

        updateTotal();
    });
});


// ---------- Quantity ----------

const decreaseButton = document.getElementById("decrease");
const increaseButton = document.getElementById("increase");
const quantityElement = document.getElementById("quantity");

increaseButton.addEventListener("click", () => {
    quantity++;

    quantityElement.textContent = quantity;

    updateTotal();
});


decreaseButton.addEventListener("click", () => {

    if (quantity > 1) {
        quantity--;

        quantityElement.textContent = quantity;

        updateTotal();
    }
});


// ---------- Mobile Navigation ----------

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});


// ---------- Enquiry Form Validation ----------

const enquiryForm = document.getElementById("enquiryForm");

enquiryForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const messageError = document.getElementById("messageError");
    const successMessage = document.getElementById("successMessage");

    // Clear previous messages
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    // Name validation
    if (name === "") {
        nameError.textContent = "Please enter your name.";
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        emailError.textContent = "Please enter your email.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // Phone validation
    const phonePattern = /^[0-9]{10}$/;

    if (phone === "") {
        phoneError.textContent = "Please enter your phone number.";
        isValid = false;
    } else if (!phonePattern.test(phone)) {
        phoneError.textContent = "Please enter a valid 10-digit phone number.";
        isValid = false;
    }

    // Message validation
    if (message === "") {
        messageError.textContent = "Please enter your enquiry.";
        isValid = false;
    }

    // Successful submission
    if (isValid) {
        successMessage.textContent =
            "✓ Thank you! Your enquiry has been submitted successfully.";

        enquiryForm.reset();
    }
});