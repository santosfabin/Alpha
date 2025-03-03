const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// Middleware para analisar o corpo das requisições JSON
app.use(express.json());

// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, "../public")));

// Rotas
const routes = require("./routes");
app.use("/api", routes);

app.listen(port, () => {
	console.log(`Servidor rodando em http://localhost:${port}`);
});