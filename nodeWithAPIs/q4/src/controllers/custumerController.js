let customer = [
	{id: 1, customername: "Fabiano", email: "fabiano@gmail.com"},
	{id: 2, customername: "Vitor", email: "vitor@gmail.com"},
	{id: 3, customername: "Anderson", email: "anderson@gmail.com"}
];

let nextcustomerId = customer.length + 1;

const getUser = id => {
	return customer.find(e => e.id == id);
};

const getAllCustomer = (req, res) => {
	res.json(customer);
};

const getOneCustomer = (req, res) => {
	const customerId = parseInt(req.params.id);
	const customerItem = customer.find(p => p.id === customerId);
	if (customerItem) {
		res.json(customerItem);
	} else {
		res.status(404).json({error: "Usuário não encontrado"});
	}
};

const createCustomer = (req, res) => {
	const {customername, email} = req.body;
	// Validação simples
	if (!customername || !email) {
		return res
			.status(400)
			.json({error: "O customername e o email são obrigatórios"});
	}

	const newcustomer = {id: nextcustomerId++, customername, email};
	customer.push(newcustomer);
	res.status(201).json(newcustomer);
};

const updateCustomer = (req, res) => {
	const customerId = parseInt(req.params.id);
	const {customername, email} = req.body;

	const customerIndex = customer.findIndex(
		customer => customer.id === customerId
	);

	// Verificação se o usuário existe
	if (customerIndex === -1) {
		return res.status(404).json({error: "Usuário não encontrado"});
	}

	// Atualizar os dados do usuário
	customer[customerIndex] = {...customer[customerIndex], customername, email};
	res.json({message: `Usuário com ID ${customerId} atualizado`});
};

const deleteCustomer = (req, res) => {
	const customerId = parseInt(req.params.id);

	customer = customer.filter(customer => customer.id !== customerId);

	res.json({message: `Usuráio com ID ${customerId} excluído`});
};

module.exports = {
	getUser,
	getAllCustomer,
	getOneCustomer,
	createCustomer,
	updateCustomer,
	deleteCustomer
};
