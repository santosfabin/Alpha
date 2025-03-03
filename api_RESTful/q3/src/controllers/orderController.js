const {getProduct} = require("./productController");

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
		res.status(404).json({error: "Pedido não encontrado"});
	}
};

const createOrder = (req, res) => {
	const {items} = req.body;
	if (!items || !Array.isArray(items) || items.length === 0) {
		return res.status(400).json({error: "O pedido deve conter itens"});
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

	const newOrder = {
		id: nextOrderId++,
		items: itemsDetails,
		totalValue: totalValue.toFixed(2)
	};

	order.push(newOrder);
	res.status(201).json(newOrder);
};

const updateOrder = (req, res) => {
	const orderId = parseInt(req.params.id);
	const {items} = req.body;

	const orderIndex = order.findIndex(order => order.id === orderId);

	if (orderIndex === -1) {
		return res.status(404).json({error: "Pedido não encontrado"});
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

module.exports = {
	getAllOrder,
	getOneOrder,
	createOrder,
	updateOrder,
	deleteOrder
};
