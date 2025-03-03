const express = require("express");
const cors = require("cors");

const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

var opcoesCors = {
	origin: "http://localhost:3000", // Substitua pelo seu domínio
	optionsSuccessStatus: 200, // Alguns navegadores antigos (IE11, várias SmartTVs) falham com 204
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Métodos HTTP permitidos
	allowedHeaders: ["Content-Type", "Authorization"] // Headers HTTP permitidos
};

// Middleware CORS
app.use(cors(opcoesCors));

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
