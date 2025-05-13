import {Request, Response} from "express";
import jwt from "jsonwebtoken";
import {JwtPayload} from "jsonwebtoken";
import config from "../config";
const userService = require("../services/userService");

const createUser = async (req: Request, res: Response) => {
	try {
		const {name, email, password} = req.body;

		if (!name || !email || !password) {
			return res.status(400).json({error: "Dados insuficientes"});
		}

		// Chama o service para validar e criar o usuário
		const result = await userService.createUser(name, email, password);

		if (result.error) {
			return res.status(400).json({error: result});
		}

		res.cookie("session_id", result.sessionToken, {
			httpOnly: true,
			maxAge: 864000000
		});

		return res.status(200).json(result.user);
	} catch (e: any) {
		return res.status(500).json({error: e.message});
	}
};

const updateUser = async (req: Request, res: Response) => {
	try {
		const {id} = req.params;

		const token = req.cookies.session_id;
		const decoded = jwt.verify(token, config.SECRET_KEY) as JwtPayload;

		if (decoded.user !== Number(id)) {
			return res.status(401).json({error: "Não autorizado"});
		}

		const {name, email, password} = req.body;

		// const updatedFields: Partial<{
		// 	name: string;
		// 	email: string;
		// 	password: string;
		// }> = {
		// 	name,
		// 	email,
		// 	password
		// };

		// Object.keys(updatedFields).forEach(key => {
		// 	if (updatedFields[key as keyof typeof updatedFields] === undefined) {
		// 		delete updatedFields[key as keyof typeof updatedFields];
		// 	}
		// });

		// if (Object.keys(updatedFields).length === 0) {
		// 	return res.status(400).json({ error: "Nenhum campo para atualizar" });
		// }
		// 	const result = await userService.updateUser(id, updatedFields);
		// if (result.error) {
		// 	return res.status(400).json({ error: result });
		// }

		// return res.status(200).json(result.user);
		// 
		// 
		// acho que é so apagar o resto pra baixo e descomentar isso a cima

		// Aqui, verificamos se pelo menos um valor foi fornecido
		if (!name && !email && !password) {
			return res.status(400).json({error: "Nenhum campo para atualizar"});
		}

		const updatedFields: any = {};
		if (name) {
			updatedFields.name = name;
		}
		if (email) {
			updatedFields.email = email;
		}
		if (password) {
			updatedFields.password = password;
		}

		const result = await userService.updateUser(id, updatedFields);
		if (result.error) {
			return res.status(400).json({error: result});
		}

		return res.status(200).json(result.user);
	} catch (error) {
		console.error(error);

		return res.status(500).json({error: "Erro ao atualizar usuário."});
	}
};

const removeUser = async (req: Request, res: Response) => {
	try {
		const {id} = req.params;

		const token = req.cookies.session_id;
		const decoded = jwt.verify(token, config.SECRET_KEY) as JwtPayload;

		if (decoded.user !== Number(id)) {
			return res.status(401).json({error: "Não autorizado"});
		}

		const result = await userService.removeUser(id);
		if (result.error) {
			return res.status(400).json({error: result});
		}

		res.cookie("session_id", "", {expires: new Date(0)});

		return res.status(200).json(result);
	} catch (error) {
		console.error(error);

		return res.status(500).json({error: "Erro ao remover usuário."});
	}
};

const showAllUsers = async (req: Request, res: Response) => {
	try {
		const result = await userService.showAllUsers();
		if (result.error) {
			return res.status(400).json({error: result});
		}

		return res.status(200).json(result);
	} catch (error) {
		console.error(error);

		return res.status(500).json({error: "Erro ao buscar usuários."});
	}
};

module.exports = {createUser, updateUser, removeUser, showAllUsers};
