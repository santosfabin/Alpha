let users = [
	{id: 1, username: "Fabiano", email: "fabiano@gmail.com"},
	{id: 2, username: "Vitor", email: "vitor@gmail.com"},
	{id: 3, username: "Anderson", email: "anderson@gmail.com"}
];

let nextUserId = users.length + 1;

const getAllUsers = (req, res) => {
	res.json(users);
};

const createUser = (req, res) => {
	const {username, email} = req.body;
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
	const userId = parseInt(req.params.id);
	const {username, email} = req.body;

	const userIndex = users.findIndex(user => user.id === userId);

	// Verificação se o usuário existe
	if (userIndex === -1) {
		return res.status(404).json({error: "Usuário não encontrado"});
	}

	// Atualizar os dados do usuário
	users[userIndex] = {...users[userIndex], username, email};
	res.json({message: `Usuário com ID ${userId} atualizado`});
};

const deleteUser = (req, res) => {
	const userId = parseInt(req.params.id);

	users = users.filter(user => user.id !== userId);

	res.json({message: `Usuráio com ID ${userId} excluído`});
};

module.exports = {
	getAllUsers,
	createUser,
	updateUser,
	deleteUser
};
