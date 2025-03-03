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

app.use(function (req, res, next) {
	res.header(
		"Content-Security-Policy",
		"frame-ancestors 'self' http://localhost:3000"
	);
	// Permite exibir em iframe só no seu site e em http://localhost:3000
	next();
});

// Middleware para analisar o corpo das requisições JSON
app.use(express.json());

// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, "../public")));

// Rotas
const routes = require("./routes");
app.use("/api", routes);

app.get("/ok", function (req, res) {
	res.status(200).send("OK");
});
app.get("/created", function (req, res) {
	res.status(201).send("Criado");
});
app.get("/badrequest", function (req, res) {
	res.status(400).send("Pedido inválido");
});
app.get("/unauthorized", function (req, res) {
	res.status(401).send("Não autorizado");
});
app.get("/not_found", function (req, res) {
	res.status(404).send("Nada por aqui");
});

app.listen(port, () => {
	console.log(`Servidor rodando em http://localhost:${port}`);
});
