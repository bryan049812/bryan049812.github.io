document.getElementById('btnlogin').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que la página se recargue

    let usuario = document.getElementById('userInput').value;
    let password = document.getElementById('passInput').value;

    if (usuario === "admin" && password === "admin") {
        window.location.href = 'dashboard.html'; // Redirige a dashboard
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});

