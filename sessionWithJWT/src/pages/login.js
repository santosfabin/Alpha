const loginContent = `
<html>
<head>
    <title>Login</title>
</head>
<body>
    <h1>Login</h1>
    <form action="/login" method="POST">
        <input type="text" name="username" placeholder="Usuário">
        <input type="password" name="password" placeholder="Senha">
        <button type="submit">Entrar</button>
    </form>
    <script>
        const form = document.querySelector('form');
        form.addEventListener('submit', async (event) => {
            event.preventDefault();
            const username = form.username.value;
            const password = form.password.value;
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();
            if (data.error) {
                alert(data.error);
                document.cookie = "";
            } else {
                window.location.href = '/app';
            }
        });
    </script>
</body>
</html>
`;

function loginPage(req, res) {
	res.setHeader("Content-Type", "text/html");
	res.send(loginContent);
}

module.exports = loginPage;
