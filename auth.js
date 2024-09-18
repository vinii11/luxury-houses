
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;


    if (username === "user" && password === "password") {
        localStorage.setItem('authenticated', 'true');
        alert('Login Successful');
        window.location.href = "properties.html";
    } else {
        alert('Invalid Credentials');
    }
});

function logout() {
    localStorage.removeItem('authenticated');
    alert('Logged Out');
    window.location.href = "login.html";
}
