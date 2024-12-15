const div = document.querySelector("div");
let digitacao;
let value;
let inputCerto = document.querySelector("input:first-child");
let inputIrmão = document.querySelector("input:nth-child(2)");

function acertar(e) {
	digitacao = e.target.value;
	value = e.target.dataset.value;
	if (value == "1") {
		inputCerto = document.querySelector("input:first-child");
		inputIrmão = document.querySelector("input:nth-child(2)");
	} else if (value == "2") {
		inputCerto = document.querySelector("input:nth-child(2)");
		inputIrmão = document.querySelector("input:first-child");
	}
}

div.addEventListener("input", function (e) {
	acertar(e);
	inputCerto.value = digitacao;
	inputIrmão.value = digitacao;
});

inputCerto.addEventListener("focus", function () {
  inputCerto.style.border = "1px solid #023e8a";
  inputIrmão.style.border = "1px solid #023e8a";
});
inputIrmão.addEventListener("focus", function () {
  inputCerto.style.border = "1px solid #023e8a";
  inputIrmão.style.border = "1px solid #023e8a";
});


inputCerto.addEventListener("blur", function () {
  inputCerto.style.border = "1px solid #ccc";
  inputIrmão.style.border = "1px solid #ccc";
});
inputIrmão.addEventListener("blur", function () {
  inputCerto.style.border = "1px solid #ccc";
  inputIrmão.style.border = "1px solid #ccc";
});

inputCerto.addEventListener("mouseenter", function (e) {
	inputCerto.style.background = "#8ecae6";
	inputIrmão.style.background = "#8ecae6";
});
inputIrmão.addEventListener("mouseenter", function (e) {
	inputCerto.style.background = "#8ecae6";
	inputIrmão.style.background = "#8ecae6";
});

inputCerto.addEventListener("mouseleave", function () {
	inputCerto.style.background = "transparent";
	inputIrmão.style.background = "transparent";
});
inputIrmão.addEventListener("mouseleave", function () {
	inputCerto.style.background = "transparent";
	inputIrmão.style.background = "transparent";
});
