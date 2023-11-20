
// JavaScript for form validation
const commentForm = document.querySelector(".comment-form");
const nameInput = document.querySelector("input[type='text']");
const emailInput = document.querySelector("input[type='email']");
const commentTextarea = document.querySelector("textarea");

commentForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (validateForm()) {
        alert("Form submitted successfully!");
        // You can add code here to send the form data to a server
    }
});

function validateForm() {
    if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || commentTextarea.value.trim() === "") {
        alert("Please fill in all fields.");
        return false;
    }
    return true;
}
