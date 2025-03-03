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
		res.redirect("/not_found");
	}
};

const createProduct = (req, res) => {
	const {name, value} = req.body;
	// Validação simples
	if (!name || !value) {
		return res.redirect("/badrequest");
	}
	if (product.find(n => n.name.toLowerCase() == name.toLowerCase())) {
		return res.redirect("/badrequest");
	}

	const newUser = {
		id: nextUserId++,
		name,
		value: Math.round(parseFloat(value) * 100) / 100
	};
	product.push(newUser);
	res.redirect("/created");
};

const updateProduct = (req, res) => {
	const userId = parseInt(req.params.id);
	const {name, value} = req.body;

	const userIndex = product.findIndex(user => user.id === userId);

	// Verificação se o produto existe
	if (userIndex === -1) {
		return res.redirect("/not_found");
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
