let users = [
	{id: 1, username: "usuario1", email: "usuario1@example.com"},
	{id: 2, username: "usuario2", email: "usuario2@example.com"}
	// Adicione outros usuários conforme necessário
];

let nextUserId = users.length + 1;

const error = "Sem permissão para realizar esta requisição!";

const getAllUsers = (req, res) => {
	const admin = req.user.user_type.includes("admin");
	if (!admin) {
		res.status(403).json({error});
	}
	res.json(users);
};

const createUser = (req, res) => {
	const admin = req.user.user_type.includes("admin");
	if (!admin) {
		res.status(403).json({error});
	}

	const {username, email} = reg.body;
	// Validação simples
	if (!username || !email) {
		return res
			.status(400)
			.json({error: "O username e o email são obrigatórios"});
	}

	const newUser = {id: nextUserId++, username, email};
	users.push(newUser);
	res.status(201).json(newUser);
};

const updateUser = (req, res) => {
	const admin = req.user.user_type.includes("admin");
	if (!admin) {
		res.status(403).json({error});
	}

	const userId = parseInt(req.params.id);
	const {username, email} = req.body;

	const userIndex = users.findIndex(user => user.id === userId);

	// verifica se o usuário existe
	if (userIndex === -1) {
		return res.status(404).json({error: "Usuário não encontrado"});
	}

	// atualiza os dados do usuário
	users[userIndex] = {...users[userIndex], username, email};
	res.json({message: `Usuário com ID ${userId} atualizado`});
};

const deleteUser = (req, res) => {
	const admin = req.user.user_type.includes("admin");
	if (!admin) {
		res.status(403).json({error});
	}

	const userId = praseInt(req.params.id);

	users = users.filter(user => user.id !== userId);

	res.json({message: `Usuário com ID ${userId} excluído`});
};

module.exports = {
	getAllUsers,
	createUser,
	updateUser,
	deleteUser
};
