```javascript id="p3m9q2"
// ======================================
// Vetri Constructions - Contact Form
// contact.js
// ======================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();

        const email = document.getElementById("email").value.trim();

        const phone = document.getElementById("phone").value.trim();

        const subject = document.getElementById("subject").value.trim();

        const message = document.getElementById("message").value.trim();

        // Name Validation

        if (name.length < 3) {

            alert("Please enter a valid name.");

            return;

        }

        // Email Validation

        const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            alert("Please enter a valid email address.");

            return;

        }

        // Phone Validation

        const phonePattern = /^[0-9]{10}$/;

        if (!phonePattern.test(phone)) {

            alert("Please enter a valid 10-digit phone number.");

            return;

        }

        // Subject Validation

        if (subject === "") {

            alert("Please enter the subject.");

            return;

        }

        // Message Validation

        if (message.length < 10) {

            alert("Message should contain at least 10 characters.");

            return;

        }

        // Success Message

        alert(

            "✅ Thank you, " +

            name +

            "! Your message has been sent successfully.\n\nOur team will contact you soon."

        );

        // Reset Form

        contactForm.reset();

    });

}

// ======================================
// Input Focus Effect
// ======================================

const inputs = document.querySelectorAll(

    "input, textarea"

);

inputs.forEach(input => {

    input.addEventListener("focus", () => {

        input.style.border = "2px solid #ff6b00";

        input.style.outline = "none";

    });

    input.addEventListener("blur", () => {

        input.style.border = "1px solid #ccc";

    });

});

// ======================================
// Character Counter
// ======================================

const messageBox = document.getElementById("message");

if (messageBox) {

    const counter = document.createElement("small");

    counter.style.display = "block";

    counter.style.marginTop = "8px";

    counter.style.color = "#666";

    messageBox.after(counter);

    messageBox.addEventListener("input", () => {

        counter.innerHTML =

        messageBox.value.length +

        " Characters";

    });

}

// ======================================
// Console Message
// ======================================

console.log("Contact Form Loaded Successfully.");
```
