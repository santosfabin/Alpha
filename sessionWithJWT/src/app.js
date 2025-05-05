const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cookieParser = require("cookie-parser");

// Middleware par aanalisar o corpo das requisições JSON
app.use(express.json());

// Middleware para lidar com cookies
app.use(cookieParser());

// login page
const loginPage = require("./pages/login");
app.get("/", loginPage);

// app page
const appPage = require("./pages/app");
app.get("/app", appPage);

// rotas
const routes = require("./routes");
app.use("/api", routes);

app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}`);
});
