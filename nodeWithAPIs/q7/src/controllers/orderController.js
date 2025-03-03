const {getProduct} = require("./productController");
const {getUser} = require("./custumerController");

let order = [];

let nextOrderId = 1;

const getAllOrder = (req, res) => {
	res.json(order);
};

const getOneOrder = (req, res) => {
	const userId = parseInt(req.params.id);
	const orderItem = order.find(p => p.id === userId);
	if (orderItem) {
		res.json(orderItem);
	} else {
		res.redirect("/not_found");
	}
};

const createOrder = (req, res) => {
	const {clientId, items} = req.body;
	if (!clientId || !items || !Array.isArray(items) || items.length === 0) {
		return res.redirect("/badrequest");
	}

	const products = getProduct();
	const user = getUser(clientId);

	if (!user) {
		return res.redirect("/badrequest");
	}

	let totalValue = 0;

	const itemsDetails = [];

	for (let item of items) {
		const productItem = products.find(p => p.id === item.id);
		if (!productItem) {
			return res.redirect("/not_found");
		}

		totalValue += productItem.value * item.quantity;

		itemsDetails.push({
			product: productItem,
			quantity: item.quantity,
			totalItemValue: productItem.value * item.quantity
		});
	}

	const newOrder = {
		id: nextOrderId++,
		clientId: user,
		items: itemsDetails,
		totalValue: totalValue.toFixed(2)
	};

	order.push(newOrder);
	res.redirect("/created");
};

const updateOrder = (req, res) => {
	const orderId = parseInt(req.params.id);
	const {clientId, items} = req.body;

	const user = getUser(clientId);

	const orderIndex = order.findIndex(order => order.id === orderId);

	if (orderIndex === -1) {
		return res.redirect("/not_found");
	}

	const products = getProduct();

	let totalValue = 0;
	const itemsDetails = items.map(item => {
		const productItem = products.find(p => p.id === item.id);
		if (!productItem) {
			return {error: `Produto com ID ${item.id} não encontrado`};
		}
		totalValue += productItem.value * item.quantity;

		return {
			product: productItem,
			quantity: item.quantity,
			totalItemValue: productItem.value * item.quantity
		};
	});

	order[orderIndex] = {
		...order[orderIndex],
		clientId: user,
		items: itemsDetails,
		totalValue: totalValue.toFixed(2)
	};

	res.json({
		message: `Pedido com ID ${orderId} atualizado`,
		order: order[orderIndex]
	});
};

const deleteOrder = (req, res) => {
	const orderId = parseInt(req.params.id);

	order = order.filter(order => order.id !== orderId);

	res.json({message: `Pedido com ID ${orderId} excluído`});
};

// GET /api/order/search?product_id=<product_id>
//     onde <product_id> é o id do produto.
//     o retorno deve ser um array de objetos de pedidos que contenham o produto a ser pesquisado.

const searchOrder = (req, res) => {
	let productId = req.query.product_id;
	let customerId = req.query.customer_id;

	let productsFinded;

	if (productId) {
		productsFinded = order.filter(
			data => data.items.filter(item => item.product.id == productId).length > 0
		);
	}

	if (customerId) {
		productsFinded = order.filter(client => client.clientId.id == customerId);
	}

	res.send(productsFinded);
};

// GET /api/order/search?customer_id=<customer_id>
//     onde <customer_id> é o id do cliente.
//     o retorno deve ser um array de objetos de pedidos que contenham o cliente a ser pesquisado

module.exports = {
	getAllOrder,
	getOneOrder,
	createOrder,
	updateOrder,
	deleteOrder,
	searchOrder
};
