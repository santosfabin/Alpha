import {Request, Response} from "express";
const loginServices = require("../services/loginServices");

const login = async (req: Request, res: Response) => {
	try {
		const {email, password} = req.body;

		// Verifica se os campos de email e senha estão vazios
		if (!email || !password) {
			return res.status(400).json({
				error: "Preenchimento obrigatório dos campos de e-mail e senha"
			});
		}

		// Regex para validar o formato de email
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return res.status(400).json({error: "Formato de e-mail inválido"});
		}

		const result = await loginServices.authenticateUser(email, password);

		// if (typeof result !== "string") {
		// 	return res.status(result.errorCode).json({error: result.errorMessage});
		// }

		res.cookie("session_id", result.sessionToken, {
			httpOnly: true,
			maxAge: 864000000
		});

		res.status(200).json({id: result.user});
	} catch (error) {
		console.log(error);

		res.status(500).json({error: "Falha no servidor"});
	}
};

module.exports = {login};
