function criarCartela() {
	const numeros = [];
	let i = 1;
	while (i <= 10) {
		const rand = Math.floor(Math.random() * 75) + 1;
		if (!numeros.includes(rand)) {
			i++;
			numeros.push(rand);
		}
	}
	const numerosMarcados = [];

	return {
		numeros,

		marcados: numeroSortiado => {
			if (numeros.includes(numeroSortiado)) {
				numerosMarcados.push(numeroSortiado);
				return `Número ${numeroSortiado} marcado`;
			}
			return `Número ${numeroSortiado} não marcado`;
		},

		todosMarcados: () => numerosMarcados.length == numeros.length
	};
}

// const teste = new criarCartela();
// for (let i = 1; i <= 75; i++) {
// 	console.log(teste.marcados(i));
// }
// console.log(teste.todosMarcados());

function sorteador(min, max) {
	const numerosJaSorteados = [];
	let sortearNumero;

	return {
		sortearNumero: () => {
			while (true) {
				sortearNumero = Math.floor(Math.random() * max) + min;
				if (!numerosJaSorteados.includes(sortearNumero)) {
					numerosJaSorteados.push(sortearNumero);
					break;
				}
			}
		},
		numerosJaSorteados
	};
}
// const sortear = new sorteador(1, 75);
// sortear.sortearNumero()
// sortear.sortearNumero()
// sortear.sortearNumero()
// sortear.sortearNumero()
// console.log(sortear.numerosJaSorteados)

// Parte html
const cartela = document.getElementById("cartela");
const sorteio = document.getElementById("sorteio");
const cartelas = document.getElementById("cartelas");
const configuracoes = document.getElementById("configuracoes");

sorteio.style.display = "none";
let podeCriar = true;

cartela.addEventListener("click", () => {
	if (podeCriar) {
		sorteio.style.display = "block";
		const cartelinha = new criarCartela();
		console.log(cartelinha);

		const div = document.createElement("div");
		cartelinha.numeros.forEach(chave => {
			const numero = document.createElement("div");
			numero.classList.add("numeroBola");
			numero.innerText = chave;
			div.appendChild(numero);

			let marcado = false;
			numero.addEventListener("click", function () {
				if (inicioDoJogo) {
					if (!marcado) {
						marcado = true;
						this.classList.add("marcado");
						cartelinha.marcados(chave);
						if (cartelinha.todosMarcados()) {
							clearInterval(numeroDoBingo);
							alert("Você ganhou o bingo");
						}
					}
				}
			});
		});
		div.classList.add("cartelaImpressa");
		cartelas.appendChild(div);
	}
});

// const sortear = new sorteador(1, 75);
// sortear.sortearNumero()
// sortear.sortearNumero()
// sortear.sortearNumero()
// sortear.sortearNumero()
// console.log(sortear.numerosJaSorteados)

let numeroDoBingo;
let inicioDoJogo = false;

sorteio.addEventListener("click", () => {
	podeCriar = false;
	cartela.style.display = "none";
	sorteio.style.display = "none";

	const sortear = new sorteador(1, 75);

	let segundo = 5;
	configuracoes.innerHTML = `Em ${segundo} segudos começa o bingo`;
	const comecaBingo = setInterval(() => {
		segundo--;
		if (segundo <= 0) {
			clearInterval(comecaBingo);
			inicioDoJogo = true;
		}
		configuracoes.innerHTML = `Em ${segundo} segudos começa o bingo`;
	}, 1000);

	numeroDoBingo = setInterval(() => {
		configuracoes.innerHTML = "";
		sortear.sortearNumero();

		sortear.numerosJaSorteados.forEach(bola => {
			const div = document.createElement("div");
			div.innerText = bola;
			div.classList.add("numeroBola");
			configuracoes.appendChild(div);
		});
	}, 5000);
});
