let product = [
	{id: 1, name: "Teclado", value: 245.46},
	{id: 2, name: "Mouse", value: 189.0},
	{id: 3, name: "Notebook", value: 3599.0}
];

const getProduct = () => {
	return product;
};

let nextUserId = product.length + 1;

const getAllProduct = (req, res) => {
	res.json(product);
};

const getOneProduct = (req, res) => {
	const userId = parseInt(req.params.id);
	const productItem = product.find(p => p.id === userId);
	if (productItem) {
		res.json(productItem);
	} else {
		res.status(404).json({error: "Produto não encontrado"});
	}
};

const createProduct = (req, res) => {
	const {name, value} = req.body;
	// Validação simples
	if (!name || !value) {
		return res.status(400).json({error: "O nome e o valor são obrigatórios"});
	}
	if (product.find(n => n.name.toLowerCase() == name.toLowerCase())) {
		return res.status(400).json({error: "Produto já cadastrado"});
	}

	const newUser = {
		id: nextUserId++,
		name,
		value: Math.round(parseFloat(value) * 100) / 100
	};
	product.push(newUser);
	res.status(201).json(newUser);
};

const updateProduct = (req, res) => {
	const userId = parseInt(req.params.id);
	const {name, value} = req.body;

	const userIndex = product.findIndex(user => user.id === userId);

	// Verificação se o produto existe
	if (userIndex === -1) {
		return res.status(404).json({error: "Produto não encontrado"});
	}

	// Atualizar os dados do produto
	product[userIndex] = {
		...product[userIndex],
		name,
		value: Math.round(parseFloat(value) * 100) / 100
	};
	res.json({message: `Produto com ID ${userId} atualizado`});
};

const deleteProduct = (req, res) => {
	const userId = parseInt(req.params.id);

	product = product.filter(user => user.id !== userId);

	res.json({message: `Usuráio com ID ${userId} excluído`});
};

module.exports = {
	getProduct,
	getAllProduct,
	getOneProduct,
	createProduct,
	updateProduct,
	deleteProduct
};
