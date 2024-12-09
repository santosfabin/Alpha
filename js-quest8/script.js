const pai = document.getElementById("divPai");
const alturaPai = pai.clientHeight;
const ladoPai = pai.clientWidth;
const body = document.querySelector("body");

let ativado;
let target;
let filho;

let baixoFilho;
let altoFilho;

let pressionado = false;

let posix;
let posiy;

pai.addEventListener("mousedown", function (e) {
	pressionado = true;
	// offsetX = ele pega onde vc clico em relação ao objeto exato q vc clico
	if (e.target != pai) {
		filho = document.getElementById(e.target.id);
		filho.classList.add("ativado");
		posix = e.offsetX;
		posiy = e.offsetY;
	}
});

document.addEventListener("mouseup", function () {
	pressionado = false;
	filho.classList.remove("ativado");
	filho = null;
});

document.addEventListener("mousemove", function (e) {
	if (filho !== undefined && pressionado == true) {
		// inicio superior desse filho em relação ao pai
		const inicioCima = pai.offsetTop;
		const inicioLateral = pai.offsetLeft;

		let novoCima = e.clientY - inicioCima - posiy;
		let novoLateral = e.clientX - inicioLateral - posix;

		if (novoCima <= 0) {
			novoCima = 0;
		} else if (novoCima > alturaPai - filho.offsetHeight) {
			// altura desse elemento
			novoCima = alturaPai - filho.offsetHeight;
		}

		if (novoLateral <= 0) {
			novoLateral = 0;
		} else if (novoLateral > ladoPai - filho.offsetWidth) {
			novoLateral = ladoPai - filho.offsetWidth;
		}

		filho.style.top = novoCima + "px";
		filho.style.left = novoLateral + "px";
	}
});
