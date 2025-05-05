import {DOG_API_KEY} from "./config.js";

// Parte da notificação
let notificationTimeout: number | null = null;
function showNotification(message: string, duration: number = 5000): void {
	const notificationElement = document.getElementById(
		"notification"
	) as HTMLDivElement;
	const messageElement = document.getElementById(
		"notification-message"
	) as HTMLParagraphElement;

	messageElement.textContent = message;

	if (notificationTimeout) {
		clearTimeout(notificationTimeout);
	}

	notificationElement.style.display = "block";
	notificationElement.classList.add("show");

	notificationTimeout = window.setTimeout(() => {
		notificationElement.classList.remove("show");
		notificationTimeout = window.setTimeout(() => {
			notificationElement.style.display = "none";
		}, 300);
	}, duration);
}

// Parte de limpar a galeria
function limpar(): void {
	arrayDogs = [];
	const galeria = <HTMLDivElement>document.getElementById("galeriaDogs");
	galeria.innerHTML = "";
	const paginacao = <HTMLDivElement>document.getElementById("paginacao");
	paginacao.style.display = "none";
}

const btnLimpar = <HTMLButtonElement>document.getElementById("btnLimpar");
btnLimpar.addEventListener("click", limpar);

// fetch para a api
interface Dog {
	id: string;
	url: string;
	width: number;
	height: number;
	breeds?: {
		id: number;
		name: string;
		bred_for?: string;
		breed_group?: string;
		life_span: string;
		temperament?: string;
		weight: {
			imperial: string;
			metric: string;
		};
		height: {
			imperial: string;
			metric: string;
		};
	}[];
}

async function fetchDogs(qtdDogs: number): Promise<Dog[]> {
	const response = await fetch(
		`https://api.thedogapi.com/v1/images/search?limit=${qtdDogs}&api_key=${DOG_API_KEY}`
	);
	const data = await response.json();
	return data;
}

//Função de mostrar galeria
let arrayDogs: Dog[] = [];
let page: number;

type voltarOuAvancar = "voltar" | "proximo" | "iniciando";

function galeria(voltarOuAvancar: voltarOuAvancar): void {
	const galeria = <HTMLDivElement>document.getElementById("galeriaDogs");

	const paginaAtual = <HTMLDivElement>document.getElementById("paginaAtual");
	if (voltarOuAvancar === "voltar") {
		if (page <= 1) {
			return;
		}

		galeria.innerHTML = "";
		page--;
		paginaAtual.textContent = page.toString();
	} else if (voltarOuAvancar === "proximo") {
		if (arrayDogs.length / 10 <= page) {
			return;
		}
		galeria.innerHTML = "";
		page++;
		paginaAtual.textContent = page.toString();
	} else if (voltarOuAvancar === "iniciando") {
		buscandoImg(false);
	}
	let inicio = (page - 1) * 10;
	const fim = inicio + 10;

	for (inicio; inicio < fim; inicio++) {
		const dog = arrayDogs[inicio];
		if (dog) {
			const divImage = document.createElement("div");
			divImage.classList.add("image");
			const img = document.createElement("img");
			img.src = dog.url;
			divImage.appendChild(img);

			img.addEventListener("click", () => {
				const modal = document.getElementById("dogModal")!;
				const modalImage = document.getElementById(
					"modalImage"
				) as HTMLImageElement;
				const modalInfo = document.getElementById("modalInfo")!;

				modalImage.src = dog.url;

				const breed = dog.breeds && dog.breeds[0];
				modalInfo.innerHTML = breed
					? `
						<h2>${breed.name}</h2>
						<p><strong>Temperamento:</strong> ${breed.temperament || "N/A"}</p>
						<p><strong>Altura:</strong> ${breed.height.metric} cm</p>
						<p><strong>Peso:</strong> ${breed.weight.metric} kg</p>
						<p><strong>Expectativa de vida:</strong> ${breed.life_span}</p>
					`
					: `<p>Informações da raça não disponíveis.</p>`;

				modal.style.display = "flex";
			});

			document.getElementById("galeriaDogs")!.appendChild(divImage);
		}
	}
}

// fechar modal
document.getElementById("closeModal")!.addEventListener("click", () => {
	document.getElementById("dogModal")!.style.display = "none";
});

document.getElementById("dogModal")!.addEventListener("click", (event) => {
	if (event.target === document.getElementById("dogModal")) {
		(document.getElementById("dogModal") as HTMLElement).style.display = "none";
	}
});


// Parte de buscar os cachorros
const btnBuscar = <HTMLButtonElement>document.getElementById("btnBuscar");

let animacaoInterval: number | null = null;
function buscandoImg(verify: boolean): void {
	const galeriaDiv = <HTMLDivElement>document.getElementById("galeriaDogs");
	if (verify) {
		let dots = "";
		galeriaDiv.innerText = "Buscando imagens";
		animacaoInterval = window.setInterval(() => {
			if (dots.length >= 3) {
				dots = "";
			} else {
				dots += ".";
			}
			galeriaDiv.innerText = "Buscando imagens" + dots;
		}, 500);
		return;
	}
	if (animacaoInterval) {
		clearInterval(animacaoInterval);
		animacaoInterval = null;
	}
	galeriaDiv.innerHTML = "";
}

let buscando: boolean = false;
btnBuscar.addEventListener("click", async () => {
	const inputQtdDogs = <HTMLInputElement>document.getElementById("qtdDogs");
	const apenasNumeros = /^\d+$/;

	const valor = inputQtdDogs.value.trim();
	let qtdDogs: number = 1;

	if (valor == "") {
		qtdDogs = 1;
	} else if (!apenasNumeros.test(valor)) {
		showNotification("Quantidade inválida");
		return;
	} else if (parseInt(inputQtdDogs.value) < 1) {
		showNotification("Quantidade deve ser maior que 0");
		return;
	} else if (parseInt(inputQtdDogs.value) > 100) {
		showNotification("Quantidade deve ser menor que 100");
		return;
	}

	qtdDogs = parseInt(inputQtdDogs.value);
	limpar();

	try {
		if (buscando) return;
		buscando = true;
		buscandoImg(true);

		const dogs = await fetchDogs(qtdDogs);
		page = 1;
		const paginaAtual = <HTMLDivElement>document.getElementById("paginaAtual");
		paginaAtual.innerText = page.toString();
		arrayDogs = dogs;
		galeria("iniciando");

		const paginacao = document.getElementById("paginacao") as HTMLDivElement;
		paginacao.style.display = "flex";
		buscando = false;
	} catch (e: any) {
		showNotification(e.message);
	}
});

// botao de proximo
const btnProximo = <HTMLButtonElement>document.getElementById("proximo");

btnProximo.addEventListener("click", () => {
	galeria("proximo");
});

// botao de voltar
const btnVoltar = <HTMLButtonElement>document.getElementById("voltar");

btnVoltar.addEventListener("click", () => {
	galeria("voltar");
});
