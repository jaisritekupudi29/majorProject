// public/js/script.js

async function registerUser(event) {
    // Stop page from refreshing
    event.preventDefault();

    // Get data from form fields
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        // Send data to backend
        const response = await fetch("/api/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        });

        const data = await response.json();

        if (response.ok) {
            alert("Registration Successful!");
            document.getElementById("registerForm").reset();

            // Go to login page
            window.location.href = "login.html";
        } else {
            alert(data.message || "Registration Failed");
        }

    } catch (error) {
        console.error("Error:", error);
        alert("Server Error");
    }
}