

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const message = document.getElementById("message");

    loginForm.addEventListener("submit", function(event) {
        event.defaultPrevented();
        
        const username = loginForm.username.value;
        const password = loginForm.password.value;

        if (username === "user" && password === "password") {
            message.textContent = "Login successful!";
            message.style.color = "green";
        } else {
            message.textContent = "Invalid username or password.";
            message.style.color = "red";
        }
    });
});
