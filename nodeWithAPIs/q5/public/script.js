const productsList = document.getElementById("products-list");

// conteúdo para criar a tabela inicial, onde terá todos os produtos
function listProduct() {
	fetch("./api/product")
		.then(res => res.json())
		.then(data => {
			console.log(data);
			const table = document.createElement("table");

			table.innerHTML = `
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        ${data
					.map(
						e => `
          <tr>
            <td>${e.id}</td>
            <td>${e.name}</td>
            <td>${e.value}</td>
          </tr>
        `
					)
					.join("")}
      </tbody>
    `;
			productsList.innerHTML = "";
			productsList.appendChild(table);
		});
}
listProduct();

// Conteúdo para adicionar item na lista
const nameProduct = document.getElementById("name-product");
const valueProduct = document.getElementById("value-product");
const makeProduct = document.getElementById("make-product");

// Validação de dados para produto
function validateProduct(name, value) {
	if (typeof name !== "string" || name.trim() === "") {
		return false;
	}
	if (isNaN(value) || value < 0) {
		return false;
	}
	return true;
}

makeProduct.addEventListener("submit", e => {
	e.preventDefault();

	const nameProductValue = nameProduct.value;
	const valueProductValue = valueProduct.value;

	if (!validateProduct(nameProductValue, valueProductValue)) {
		return;
	}

	nameProduct.value = "";
	valueProduct.value = "";

	fetch("./api/product", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			name: nameProductValue,
			value: parseFloat(valueProductValue).toFixed(2)
		})
	})
		.then(res => res.json())
		.then(data => console.log("Produto criado:", data))
		.catch(err => console.error("Erro ao criar produto:", err));
	listProduct();
});

// Conteúdo para atualizar item da lista
const namePut = document.getElementById("name-put");
const valuePut = document.getElementById("value-put");
const idPut = document.getElementById("id-put");
const formUpdate = document.getElementById("update-form");

formUpdate.addEventListener("submit", e => {
	e.preventDefault();

	const idPutValue = idPut.value;
	const namePutValue = namePut.value;
	const valuePutValue = valuePut.value;

	fetch(`./api/product/${idPutValue}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			name: namePutValue,
			value: valuePutValue
		})
	})
		.then(response => {
			if (response.ok) {
				// Se a resposta for bem-sucedida (status 200)
				return response.json();
			} else {
				// Se a resposta não for bem-sucedida, lança um erro com o status
				throw new Error(`Erro: ${response.status}`);
			}
		})
		.then(data => {
			console.log(data);
			idPut.value = "";
			namePut.value = "";
			valuePut.value = "";
		})
		.catch(error => console.error("Erro:", error));
	listProduct();
});

// Deletar produto
const deleteProduct = document.getElementById("delete-product");
const idDelete = document.getElementById("id-delete");
deleteProduct.addEventListener("submit", e => {
	e.preventDefault();

	const idDeleteValue = idDelete.value;
	idDelete.value = "";

	fetch(`./api/product/${idDeleteValue}`, {
		method: "DELETE"
	})
		.then(response => response.json())
		.then(data => {
			console.log(data);
			listProduct();
		})
		.catch(error => console.error("Erro:", error));
});

//
//
//
//
// Conteúdo sobre orderController
const ordersList = document.getElementById("orders-list");
// Listar todos os pedidos
function listOrders() {
	fetch("./api/order")
		.then(res => res.json())
		.then(data => {
			console.log(data);
			ordersList.innerHTML = data
				.map(
					order => `
    <li>
      Pedido #${order.id} - Usuário #${
						order.clientId.customername
					} - Valor Total: R$ ${order.totalValue}
      <ul>
        ${order.items
					.map(
						item =>
							`<li>${item.quantity}x ${item.product.name} - R$ ${item.totalItemValue}</li>`
					)
					.join("")}
      </ul>
    </li>
  `
				)
				.join("");
		});
}
listOrders();

// Criar um novo pedido
const makeOrder = document.getElementById("make-order");
const orderItems = document.getElementById("order-items");
const clientIdOrder = document.getElementById("client-id-order");

// Validação de dados para pedido
function validateOrder(clientId, items) {
	if (isNaN(clientId) || clientId <= 0) {
		return false;
	}
	if (
		!Array.isArray(items) ||
		items.length === 0 ||
		items.some(item => isNaN(item.id) || item.quantity <= 0)
	) {
		return false;
	}
	return true;
}

makeOrder.addEventListener("submit", e => {
	const clientId = Number(clientIdOrder.value);
	e.preventDefault();

	const items = orderItems.value
		.split(",")
		.map(item => {
			const [id, quantity] = item.split("-").map(Number);
			if (isNaN(id) || isNaN(quantity) || id <= 0 || quantity <= 0) {
				console.log(
					"Formato de item inválido. Use o formato 'id-quantidade', ex: 1-1 ou 10-2"
				);
				return null; // Retorna null se a validação falhar
			}
			return {id, quantity};
		})
		.filter(item => item !== null);

	if (!validateOrder(clientId, items)) {
		console.log("deu bom nn");
		return;
	}

	fetch("./api/order", {
		method: "POST",
		headers: {"Content-Type": "application/json"},
		body: JSON.stringify({clientId, items})
	})
		.then(res => res.json())
		.then(data => {
			console.log("Pedido:", data);
			listOrders();
		})
		.catch(err => console.error("Erro ao criar pedido:", err));
});

// Atualizar um pedido
const updateOrderForm = document.getElementById("update-order");
const idUpdateOrder = document.getElementById("id-update-order");
const updateItems = document.getElementById("update-items");

updateOrderForm.addEventListener("submit", e => {
	e.preventDefault();

	const orderId = idUpdateOrder.value;
	const clientId = document.getElementById("client-id-update-order").value;
	const items = updateItems.value
		.split(",")
		.map(item => {
			const [id, quantity] = item.split("-").map(Number);
			if (isNaN(id) || isNaN(quantity) || id <= 0 || quantity <= 0) {
				console.log(
					"Formato de item inválido. Use o formato 'id-quantidade', ex: 1-1 ou 10-2"
				);
				return null; // Retorna null se a validação falhar
			}
			return {id, quantity};
		})
		.filter(item => item !== null); // Remove qualquer item inválido

	// Verifica se algum item foi válido, caso contrário, interrompe o processo
	if (items.length === 0) {
		console.log("Nenhum item válido para atualizar.");
		return;
	}

	fetch(`./api/order/${orderId}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({clientId, items})
	})
		.then(res => res.json())
		.then(data => {
			console.log("Pedido atualizado:", data);
			listOrders(); // Atualizar a lista de pedidos após a atualização
		})
		.catch(err => console.error("Erro ao atualizar pedido:", err));
});

// Deletar um pedido
const deleteOrderForm = document.getElementById("delete-order");
const idDeleteOrder = document.getElementById("id-delete-order");

deleteOrderForm.addEventListener("submit", e => {
	e.preventDefault();

	const idDeleteValue = idDeleteOrder.value;

	if (isNaN(idDeleteValue) || idDeleteValue <= 0) {
		return;
	}

	idDeleteOrder.value = "";

	fetch(`./api/order/${idDeleteValue}`, {
		method: "DELETE"
	})
		.then(response => response.json())
		.then(data => {
			console.log(data);
			listOrders();
		})
		.catch(error => console.error("Erro:", error));
});
