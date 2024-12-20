const minuto = document.getElementById("minuto");
const segundo = document.getElementById("segundo");
const alarme = new Audio("./alarme.mp3");

const minutoMais = document.getElementById("minutoMais");
const minutoMenos = document.getElementById("minutoMenos");
const segundoMais = document.getElementById("segundoMais");
const segundoMenos = document.getElementById("segundoMenos");
const body = document.querySelector("body");

const botao = document.querySelector("button");

const regex = /^[0-9]$/;
function arrumar(e) {
	if (
		e.key === "Backspace" ||
		e.key === "Delete" ||
		e.key === "ArrowLeft" ||
		e.key === "ArrowRight"
	) {
		return;
	}
	if (e.target.value.length === 0 && e.key === "0") {
		e.preventDefault();
		return;
	}

	if (e.target.value.length >= 2) {
		e.preventDefault();
		return;
	}

	if (!regex.test(e.key)) {
		e.preventDefault();
	}
}

function restante(e) {
	const caracter = e.target.value[e.target.value.length - 1];
	if (!regex.test(caracter)) {
		e.target.value = e.target.value.slice(0, -1);
	}
}

function verificar(e) {
	if (Number(e.target.value) >= 60) {
		e.target.value = 59;
	}
}

minuto.addEventListener("keydown", arrumar);
segundo.addEventListener("keydown", arrumar);

minuto.addEventListener("input", restante);
segundo.addEventListener("input", restante);

minuto.addEventListener("input", verificar);
segundo.addEventListener("input", verificar);

minutoMais.addEventListener("click", () => {
	if (Number(minuto.value) < 59) {
		pararPorPonteiro();
		minuto.value = Number(minuto.value) + 1;
	}
});

minutoMenos.addEventListener("click", () => {
	if (Number(minuto.value) > 0) {
		pararPorPonteiro();
		minuto.value = Number(minuto.value) - 1;
	}
});

segundoMais.addEventListener("click", () => {
	if (Number(segundo.value) < 59) {
		pararPorPonteiro();
		segundo.value = Number(segundo.value) + 1;
	}
});

segundoMenos.addEventListener("click", () => {
	if (Number(segundo.value) > 0) {
		pararPorPonteiro();
		segundo.value = Number(segundo.value) - 1;
	}
});

function pararPorPonteiro() {
	if (ligado) {
		clearInterval(segundoLingado);
		botao.innerText = "Iniciar";
		ligado = false;
	}
}
let ligado = false;
let segundoLingado;

botao.addEventListener("click", () => {
	if (ligado) {
		clearInterval(segundoLingado);
		botao.innerText = "Iniciar";
		ligado = false;
	} else {
		botao.innerText = "Desligar";
		ligado = true;
		body.style.background = "#C2E7FF";

		const tempo5 = (Number(minuto.value) * 60 + Number(segundo.value)) * 0.05;

		const minutosTempo = Math.floor(tempo5 / 60);

		const segundosTempo = tempo5 % 60;

		segundoLingado = setInterval(() => {
			if (
				Number(minuto.value) <= minutosTempo &&
				Number(segundo.value) <= segundosTempo
			) {
				console.log("5%");
				body.style.background = "#FFDF99";
			}

			if (Number(segundo.value) > 0) {
				segundo.value = Number(segundo.value) - 1;
			} else if (Number(segundo.value) == 0 && Number(minuto.value) > 0) {
				minuto.value = Number(minuto.value) - 1;
				segundo.value = 59;
			} else {
				alarme.play();
				clearInterval(segundoLingado);
				botao.innerText = "Iniciar";
				ligado = false;
			}
		}, 1000);
	}
});
