const {SECRET_KEY} = require("../config");
const jwt = require("jsonwebtoken");

function permissionVerify(req, res, next) {
	// verificar se o cookie se session_id está presente na requisição
	const sessionToken = req.cookies.session_id;

	if (!sessionToken) {
		return res.status(401).json({error: "Token JWT ausente"});
	}

	jwt.verify(sessionToken, SECRET_KEY, (err, decoded) => {
		if (err) {
			return res.status(401).json({error: "Token JWT inválido"});
		} else {
			// o token é válido podemos acessar as informações decodificadas

			// armazena as informações do usuário decodidficadas no objeto req
			req.user = decoded;

			// passa a requisição para o próximo middleware ou rota
			next();
		}
	});
}

module.exports = permissionVerify;
