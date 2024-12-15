const pai = document.getElementById("divPai");
const filho = document.getElementById("divFilho");
const filho2 = document.getElementById("divFilho2");
const filho3 = document.getElementById("divFilho3");
const filho4 = document.getElementById("divFilho4");
let ativado = false;
let ativado2 = false;
let ativado3 = false;
let ativado4 = false;

let salto = 10;

function ativador(boleano, objeto, objAtivar) {
	filho.classList.remove("ativado");
	filho2.classList.remove("ativado");
	filho3.classList.remove("ativado");
	filho4.classList.remove("ativado");
  console.log("desligar")
	if (boleano) {
		switch (objAtivar) {
			case 1:
				ativado = false;
				break;
			case 2:
				ativado2 = false;
				break;
			case 3:
				ativado3 = false;
				break;
			case 4:
				ativado4 = false;
				break;
		}
		objeto.classList.remove("ativado");
	} else {
		switch (objAtivar) {
			case 1:
				ativado = true;
				ativado2 = false;
				ativado3 = false;
				ativado4 = false;
				break;
			case 2:
				ativado = false;
				ativado2 = true;
				ativado3 = false;
				ativado4 = false;
				break;
			case 3:
				ativado = false;
				ativado2 = false;
				ativado3 = true;
				ativado4 = false;
				break;
			case 4:
				ativado = false;
				ativado2 = false;
				ativado3 = false;
				ativado4 = true;
				break;
		}
		objeto.classList.add("ativado");
	}
}

function largura(objeto, pai, movDireita) {
	const larguraFilho = objeto.clientWidth;

	const larguraPai = pai.clientWidth;

	const cantoDireito = larguraFilho + movDireita;

	if (movDireita < larguraPai && cantoDireito < larguraPai && movDireita >= 0) {
		console.log("valido");
		return true;
	} else {
		return false;
	}
}

function altura(objeto, pai, movDireita) {
	const alturaFilho = objeto.clientHeight;

	const alturaPai = pai.clientHeight;

	const cantoDireito = alturaFilho + movDireita;

	if (movDireita < alturaPai && cantoDireito < alturaPai && movDireita >= 0) {
		console.log("valido");
		return true;
	} else {
		return false;
	}
}

function mexer(objeto, e) {
	if (e.key == "ArrowRight") {
		const movDireita = objeto.offsetLeft + salto + "px";
		if (!largura(objeto, pai, Number(movDireita.replace("px", "")))) {
			const larguraFilho = objeto.clientWidth;
			const larguraPai = pai.clientWidth;
			const cantoDireito = larguraPai - larguraFilho;
			objeto.style.left = cantoDireito - 1 + "px";
		}
		if (largura(objeto, pai, Number(movDireita.replace("px", "")))) {
			objeto.style.left = movDireita;
		}
	} else if (e.key == "ArrowLeft") {
		const movDireita = objeto.offsetLeft - salto + "px";
		if (!largura(objeto, pai, Number(movDireita.replace("px", "")))) {
			objeto.style.left = 0 + "px";
		}
		if (largura(objeto, pai, Number(movDireita.replace("px", "")))) {
			objeto.style.left = movDireita;
		}
	}

	if (e.key == "ArrowDown") {
		const movTop = objeto.offsetTop + salto + "px";
		if (!altura(objeto, pai, Number(movTop.replace("px", "")))) {
			const alturaFilho = objeto.clientHeight;
			const alturaPai = pai.clientHeight;
			const cantoInferior = alturaPai - alturaFilho;
			objeto.style.top = cantoInferior - 1 + "px";
		}
		if (altura(objeto, pai, Number(movTop.replace("px", "")))) {
			objeto.style.top = movTop;
		}
	} else if (e.key == "ArrowUp") {
		const movTop = objeto.offsetTop - salto + "px";
		if (!largura(objeto, pai, Number(movTop.replace("px", "")))) {
			objeto.style.top = 0 + "px";
		}

		if (altura(objeto, pai, Number(movTop.replace("px", "")))) {
			objeto.style.top = movTop;
		}
	}
}

document.addEventListener("keydown", function (e) {
	if (e.key == "Shift") {
		salto = 100;
	}
	console.log(e.key);
});

filho.addEventListener("click", function () {
	ativador(ativado, filho, 1);
});
filho2.addEventListener("click", function () {
	ativador(ativado2, filho2, 2);
});
filho3.addEventListener("click", function () {
	ativador(ativado3, filho3, 3);
});
filho4.addEventListener("click", function () {
	ativador(ativado4, filho4, 4);
});

document.addEventListener("keydown", function (e) {
	if (ativado) {
		mexer(filho, e);
	} else if (ativado2) {
		mexer(filho2, e);
	} else if (ativado3) {
		mexer(filho3, e);
	} else if (ativado4) {
		mexer(filho4, e);
	}
});
