const nomeProdutoInput = document.getElementById("nomeProdutoInput");
const descricaoProdutoInput = document.getElementById("descricaoProdutoInput");
const valorProdutoInput = document.getElementById("valorProdutoInput");
const incluirProdutoButton = document.getElementById("incluirProdutoButton");
const mensagem = document.getElementById("mensagem");
const listaDaTabela = document.getElementById("listaDaTabela");
const modal = document.getElementById("modal");
const modalConteudo = document.getElementById("modalConteudo");
const modalEdicao = document.getElementById("modalEdicao");
const idProdutoConteudo = document.getElementById("idProdutoConteudo");
const nomeProdutoConteudo = document.getElementById("nomeProdutoConteudo");
const valorProdutoConteudo = document.getElementById("valorProdutoConteudo");
const descricaoProdutoConteudo = document.getElementById(
	"descricaoProdutoConteudo"
);
const idProdutoedicao = document.getElementById("idProdutoedicao");
const nomeProdutoedicao = document.getElementById("nomeProdutoedicao");
const valorProdutoedicao = document.getElementById("valorProdutoedicao");
const descricaoProdutoedicao = document.getElementById(
	"descricaoProdutoedicao"
);
const salvarProdutoEdicao = document.getElementById("salvarProdutoEdicao");

let identificador;
let array = localStorage.getItem("array")
	? JSON.parse(localStorage.getItem("array"))
	: [];

function preencherTabela() {
	listaDaTabela.innerHTML = "";
	for (let i = 0; i < array.length; i++) {
		const tr = document.createElement("tr");
		const tdNome = document.createElement("td");
		const tdValor = document.createElement("td");
		const tdEditar = document.createElement("td");
		const tdApagar = document.createElement("td");

		tdEditar.innerText = "✏️";
		tdEditar.style.cursor = "pointer";
		tdEditar.addEventListener("click", function () {
			identificador = this.parentElement.dataset.identificador;
			modal.style.display = "flex";
			modalEdicao.style.display = "flex";
			modalConteudo.style.display = "none";
			idProdutoedicao.innerText = "";
			nomeProdutoedicao.innerText = "";
			valorProdutoedicao.innerText = "";
			descricaoProdutoedicao.innerText = "";
			idProdutoedicao.innerText = array[identificador].id;
			nomeProdutoedicao.value = array[identificador].nome;
			valorProdutoedicao.value = array[identificador].valor;
			descricaoProdutoedicao.value = array[identificador].descricao;
		});

		tdApagar.innerText = "🗑️";
		tdApagar.style.cursor = "pointer";
		tdApagar.addEventListener("click", function () {
			identificador = this.parentElement.dataset.identificador;
			array.splice(Number(identificador), 1);
			localStorage.setItem("array", JSON.stringify(array));
			preencherTabela();
		});

		tdNome.innerText = array[i].nome;
		tdNome.style.cursor = "pointer";
		tdNome.addEventListener("click", function () {
			identificador = this.parentElement.dataset.identificador;
			modal.style.display = "flex";
			modalEdicao.style.display = "none";
			modalConteudo.style.display = "flex";
			idProdutoConteudo.innerText = "";
			nomeProdutoConteudo.innerText = "";
			valorProdutoConteudo.innerText = "";
			descricaoProdutoConteudo.innerText = "";
			idProdutoConteudo.innerText = array[identificador].id;
			nomeProdutoConteudo.innerText = array[identificador].nome;
			valorProdutoConteudo.innerText = array[identificador].valor;
			descricaoProdutoConteudo.innerText = array[identificador].descricao;
		});

		tdValor.innerText = array[i].valor;

		tr.appendChild(tdNome);
		tr.appendChild(tdValor);
		tr.appendChild(tdEditar);
		tr.appendChild(tdApagar);
		tr.dataset.identificador = i;
		listaDaTabela.appendChild(tr);
	}
}

if (array.length != 0) {
	preencherTabela();
}

incluirProdutoButton.addEventListener("click", function () {
	const nomeProduto = nomeProdutoInput.value.trim();
	const descricaoProduto = descricaoProdutoInput.value.trim();
	const valorProduto = valorProdutoInput.value.trim();

	if (
		nomeProduto == "" ||
		descricaoProduto == "" ||
		isNaN(valorProduto) ||
		valorProduto == "" ||
		valorProduto < 0
	) {
		if (valorProduto < 0) {
			mensagem.innerText =
				"Falha no cadastro do produto! " + "Apenas valores inteiros positivos";
		} else if (valorProduto === "" || isNaN(Number(valorProduto))) {
			mensagem.innerText =
				"Falha no cadastro do produto! " +
				"Atribua apenas valores númericos inteiros para o valor do seu produto";
		} else {
			mensagem.innerText =
				"Falha no cadastro do produto! " +
				"Preencha corretamente todos os campos";
		}
		return;
	}else {
    mensagem.innerText = `Produto ${nomeProduto} incluído com sucesso!`
  }


	array.push({
		id: Date.now(),
		nome: nomeProduto,
		descricao: descricaoProduto,
		valor: valorProduto
	});

	localStorage.setItem("array", JSON.stringify(array));
	preencherTabela();
});

modal.addEventListener("click", function () {
	modal.style.display = "none";
});

modalConteudo.addEventListener("click", function (e) {
	e.stopPropagation();
});
modalEdicao.addEventListener("click", function (e) {
	e.stopPropagation();
});

salvarProdutoEdicao.addEventListener("click", function () {
	const nomeProduto = nomeProdutoedicao.value.trim();
	const descricaoProduto = descricaoProdutoedicao.value.trim();
	const valorProduto = valorProdutoedicao.value.trim();

	if (
		nomeProduto == "" ||
		descricaoProduto == "" ||
		isNaN(valorProduto) ||
		valorProduto == "" ||
		valorProduto < 0
	) {
		if (valorProduto < 0) {
			alert(
				"Falha no cadastro do produto! " + "Apenas valores inteiros positivos"
			);
		} else if (valorProduto === "" || isNaN(Number(valorProduto))) {
			alert(
				"Falha no cadastro do produto! " +
					"Atribua apenas valores númericos inteiros para o valor do seu produto"
			);
		} else {
			alert(
				"Falha no cadastro do produto! " +
					"Preencha corretamente todos os campos"
			);
		}
		return;
	} 

	array[identificador] = {
		id: Date.now(),
		nome: nomeProduto,
		descricao: descricaoProduto,
		valor: valorProduto
	};

	localStorage.setItem("array", JSON.stringify(array));
	preencherTabela();
	modal.style.display = "none";
});
