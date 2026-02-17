// ===== POPUP FUNCTION =====
function showPopup(message) {
    const popup = document.getElementById("popup");
    const messageBox = document.getElementById("popup-message");

    messageBox.innerText = message;
    popup.style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Close popup when clicking outside
document.addEventListener("click", function(event) {
    const popup = document.getElementById("popup");
    if (event.target === popup) {
        popup.style.display = "none";
    }
});

// ===== FORM VALIDATION =====
document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(e) {
        e.preventDefault(); // stop page reload

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            showPopup("Please fill all fields before submitting!");
            return;
        }

        showPopup("Successfully Submitted!");
        form.reset();
    });

});
