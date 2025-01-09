import mudarPagina from "../mudarPagina.js";

function header() {
	const header = document.createElement("header");
	const ul = document.createElement("ul");

	const principal = document.createElement("li");
	const brigadeiros = document.createElement("li");
	const cupcakes = document.createElement("li");
	const doces = document.createElement("li");

	principal.addEventListener("click", function () {
		mudarPagina("/");
	});

	brigadeiros.addEventListener("click", function () {
		mudarPagina("/brigadeiros");
	});

	cupcakes.addEventListener("click", function () {
		mudarPagina("/cupcakes");
	});

	doces.addEventListener("click", function () {
		mudarPagina("/doces");
	});

	principal.innerText = "principal";
	brigadeiros.innerText = "brigadeiros";
	cupcakes.innerText = "cupcakes";
	doces.innerText = "doces";

	header.appendChild(ul);
	ul.appendChild(principal);
	ul.appendChild(brigadeiros);
	ul.appendChild(cupcakes);
	ul.appendChild(doces);

	return header;
}

export default header();
