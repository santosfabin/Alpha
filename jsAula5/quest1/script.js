const target = document.getElementById("target");
const nomeP = document.querySelector("h3");
const imgP = document.querySelector("img.pokemon");

target.addEventListener("click", event => {
	let selecionado = event.target.value;
	nomeP.innerText = selecionado;

	switch (selecionado) {
		case "Bulbasaur":
			imgP.src =
				"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/001.png";
			break;
		case "Charmander":
			imgP.src =
				"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/004.png";
			break;
		case "Squirtle":
			imgP.src =
				"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/007.png";
			break;
		case "Pikachu":
			imgP.src =
				"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/025.png";
			break;
		default:
			imgP.src = "";
			break;
	}
});
