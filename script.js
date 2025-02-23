document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;

            let storedUser = localStorage.getItem(username);
            if (storedUser && storedUser === password) {
                localStorage.setItem("loggedIn", "true");
                window.location.href = "dashboard.html";
            } else {
                alert("Invalid credentials.");
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();
            let username = document.getElementById("regUsername").value;
            let password = document.getElementById("regPassword").value;

            if (localStorage.getItem(username)) {
                alert("Username already exists!");
            } else {
                localStorage.setItem(username, password);
                alert("Account created! Please login.");
                window.location.href = "login.html";
            }
        });
    }
});

// Optimizer Functions
function optimizePerformance() {
    alert("Applying game optimizations...");
    setTimeout(() => {
        document.getElementById("cpuUsage").innerText = "Optimized";
        document.getElementById("ramUsage").innerText = "Optimized";
        document.getElementById("networkSpeed").innerText = "Optimized";
    }, 2000);
}
