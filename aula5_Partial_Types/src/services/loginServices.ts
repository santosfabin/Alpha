const loginRepository = require("../repository/loginRepository");
const {comparePassword} = require("../utils/comparePassword");
const jwt = require("jsonwebtoken");
import config from "../config";

const authenticateUser = async (email: string, password: string) => {
	try {
		const userData = await loginRepository.getUserData(email);

		if (!userData) {
			return {
				errorCode: 404,
				errorMessage: "E-mail não cadastrado"
			};
		}

		const isPasswordValid = await comparePassword(password, userData.password);

		if (!isPasswordValid) {
			return {errorCode: 404, errorMessage: "Senha inválida"};
		}

		const user = userData.id;

		const sessionToken = jwt.sign({user}, config.SECRET_KEY, {
			expiresIn: 864000
		});

		return {user, sessionToken};
	} catch (error) {
		throw error;
	}
};

module.exports = {
	authenticateUser
};
