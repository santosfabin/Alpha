const productList = document.getElementById("product-list");
const category = document.getElementById("category");
const reset = document.getElementById("reset");
const search = document.getElementById("search");

// Lista de produtos com categorias
const products = [
	{name: "Laptop", category: "Electronics"},
	{name: "Smartphone", category: "Electronics"},
	{name: "Tablet", category: "Electronics"},
	{name: "Headphones", category: "Accessories"},
	{name: "Smartwatch", category: "Accessories"},
	{name: "Keyboard", category: "Peripherals"},
	{name: "Mouse", category: "Peripherals"},
	{name: "Monitor", category: "Peripherals"},
	{name: "Speaker", category: "Accessories"},
	{name: "Charger", category: "Accessories"}
];

// 1 - Função para exibir produtos
function displayProducts(items) {
	productList.innerHTML = "";
	items.forEach(element => {
		const li = document.createElement("li");
		li.innerText = `${element.name} - ${element.category}`;
		productList.appendChild(li);
	});
}

// 2 - Função para filtrar produtos
function filterProducts() {
	const valorCategoria = category.value;
	const valorSerach = search.value.trim().toLowerCase();
	console.log(valorSerach);

	if (valorCategoria == "" && valorSerach == "") return resetFilters();

	const listaBusca = products.filter(
		element =>
			element.category.includes(valorCategoria) &&
			element.name.toLowerCase().includes(valorSerach)
	);

	displayProducts(listaBusca);
}

//3 - Função para resetar filtros
function resetFilters() {
	displayProducts(products);
	category.value = "";
	search.value = "";
}

// Inicializa a lista de produtos
displayProducts(products);

category.addEventListener("change", filterProducts);
reset.addEventListener("click", resetFilters);
search.addEventListener("input", filterProducts);
