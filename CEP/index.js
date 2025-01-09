const form = document.querySelector("form");
const cepInput = document.getElementById("cep");
const error = document.getElementById("error");
const conteudo = document.getElementById("conteudo");
const map = document.getElementById("map");

form.addEventListener("submit", e => {
	e.preventDefault();

	const cep = cepInput.value.trim();
	const regex = /[a-zA-Z\sçÇ]/;

	error.innerHTML = "";
	conteudo.innerHTML = "";
	map.innerHTML = "";

	if (cep == "") {
		return;
	}
	if (regex.test(cep)) {
		error.innerHTML = `
    <strong>Algo deu errado</strong>
    `;
		return;
	}

	fetch("https://cep.awesomeapi.com.br/json/" + cep)
		.then(resposta => {
			if (resposta.status == "400" || !resposta.ok) {
				error.innerHTML = `
          <strong>Algo deu errado</strong>
        `;
			} else {
				return resposta.json();
			}
		})
		.then(resultado => {
			const lat = resultado.lat;
			const lng = resultado.lng;
			const botaoMap = document.createElement("button");

			conteudo.innerHTML = `
        <ul>
          <li>Endereço: ${resultado.address}</li>
          <li>Bairro: ${resultado.district}</li>
          <li>Cidade: ${resultado.city}</li>
          <li>Estado: ${resultado.state}</li>
          <li>Latitude: ${resultado.lat}</li>
          <li>Longitude: ${resultado.lng}</li>
        </ul>
      `;

			botaoMap.innerText = "Exibir mapa";
			botaoMap.style.cursor = "pointer";
			botaoMap.addEventListener("click", () => {
				document.querySelector("*").style.cursor = "wait";
				botaoMap.style.cursor = "wait";

				const iframe = document.createElement("iframe");
				iframe.src = `https://maps.google.com/maps?q=${lat},${lng}&hl=pt&z=14&output=embed`;
				iframe.width = "600";
				iframe.height = "450";
				iframe.style.border = "0";

				map.innerHTML = "";
				map.appendChild(iframe);
				iframe.onload = () => {
					document.querySelector("*").style.cursor = "default";
					botaoMap.style.cursor = "pointer";
				};
			});

			conteudo.appendChild(botaoMap);
			console.log(resultado);
		});
});
