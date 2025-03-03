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

makeProduct.addEventListener("submit", e => {
	e.preventDefault();

	const nameProductValue = valueProduct.value;
	nameProduct.value = "";
	const valueProductValue = valueProduct.value;
	valueProductValue.value = "";
	fetch("./api/product", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			name: nameProductValue,
			value: valueProductValue
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
		.then(response => response.json())
		.then(data => console.log(data))
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

makeOrder.addEventListener("submit", e => {
	const clientId = Number(clientIdOrder.value);
	e.preventDefault();

	const items = orderItems.value.split(",").map(item => {
		const [id, quantity] = item.split("-").map(Number);
		return {id, quantity};
	});

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
	const items = updateItems.value.split(",").map(item => {
		const [id, quantity] = item.split("-").map(Number);
		return {id, quantity};
	});

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
