const input = document.querySelector("input");
const botao = document.querySelector("button");
const telefone = document.querySelector("#telefone");

input.addEventListener("input", function () {
	const valor = input.value.trim();
	if (valor != "") {
		const regex = /^\(\d{2}\) \d{4,5}-\d{4}$/;

		if (regex.test(valor)) {
			telefone.innerText = "Valido";
			telefone.classList.remove("errado");
			this.classList.remove("borda");
			botao.disabled = false;
		} else {
			telefone.innerText = "Telefone inválido";
			telefone.classList.add("errado");
			this.classList.add("borda");
			botao.disabled = true;
		}
	}
	console.log(this);
});
