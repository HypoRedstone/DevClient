// Function to register a new user
function register() {
    const username = document.getElementById("registerUsername").value;
    const password = document.getElementById("registerPassword").value;

    if (!username || !password) {
        alert("Please fill in all fields!");
        return;
    }

    if (localStorage.getItem(username)) {
        alert("Username already exists! Choose a different one.");
        return;
    }

    localStorage.setItem(username, JSON.stringify({ password }));
    alert("Account created! You can now log in.");
    window.location.href = "login.html";
}

// Function to log in a user
function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    const user = JSON.parse(localStorage.getItem(username));

    if (!user || user.password !== password) {
        alert("Invalid username or password.");
        return;
    }

    localStorage.setItem("loggedInUser", username);
    window.location.href = "index.html";
}

// Function to check if a user is logged in
function checkAuth() {
    if (!localStorage.getItem("loggedInUser")) {
        window.location.href = "login.html";
    }
}

// Function to log out
function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}
