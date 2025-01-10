const estadosDiv = document.getElementById("estados");
const municipiosDiv = document.getElementById("municipios");
const resultadoMunicipios = document.getElementById("resultadoMunicipios");
const diasSemana = [
	"Domingo",
	"Segunda-feira",
	"Terça-feira",
	"Quarta-feira",
	"Quinta-feira",
	"Sexta-feira",
	"Sábado"
];

async function pegarEstados() {
	try {
		const resultado = await fetch(
			"https://servicodados.ibge.gov.br/api/v1/localidades/estados"
		);
		const estados = await resultado.json();
		return estados;
	} catch (e) {
		console.log(e);
	}
}

function criarCidades(municipios) {
	const selectMunicipio = document.createElement("select");
	const optionDefault = document.createElement("option");

	optionDefault.innerText = "Escolha um cidade";
	optionDefault.id = "0";
	selectMunicipio.appendChild(optionDefault);

	municipios.forEach(item => {
		const option = document.createElement("option");
		option.innerText = item.nome;
		option.id = item.id;

		selectMunicipio.appendChild(option);
	});

	selectMunicipio.value = "Escolha um cidade";
	selectMunicipio.addEventListener("change", async function () {
		if (this.value == "Escolha um cidade") {
			return;
		}
		try {
			const selecionado =
				selectMunicipio.options[selectMunicipio.selectedIndex].id;
			const resposta = await fetch(
				`https://apiprevmet3.inmet.gov.br/previsao/${selecionado}`
			);
			const municipio = await resposta.json();

			resultadoMunicipios.innerHTML = "";
			console.log(municipio[selecionado]);
			for (let i = 0; i < 5; i++) {
				if (i < 2) {
					const dia = Object.keys(municipio[selecionado])[i];
					const [diaCalendario, mes, ano] = dia.split("/"); // Dividir a data em partes

					const data = new Date(ano, mes - 1, diaCalendario);
					resultadoMunicipios.innerHTML += `
            <div class="section">
              <div class="minSection">
                <div>
                  <strong>Dia ${diasSemana[data.getDay()]}:</strong>
                  ${dia}
                </div>
              </div>

              <div class="minSection">
                <img src="${
									municipio[selecionado][dia]["manha"]["icone"]
								}" alt="Ícone">
              </div>

              <div class="minSection">
                <div>
                  <strong>Máxima da manhã:</strong>
                  ${municipio[selecionado][dia]["manha"]["temp_max"]}
                </div>

                <div>
                  <strong>Mínima da manhã:</strong>
                  ${municipio[selecionado][dia]["manha"]["temp_min"]}
                </div>

                <div>
                  <strong>Resumo:</strong>
                  ${municipio[selecionado][dia]["manha"]["resumo"]}
                </div>
              </div>


              <div class="minSection">
                <img src="${
									municipio[selecionado][dia]["tarde"]["icone"]
								}" alt="Ícone">
              </div>

              <div class="minSection">
                <div>
                  <strong>Máxima da tarde:</strong>
                  ${municipio[selecionado][dia]["tarde"]["temp_max"]}
                </div>

                <div>
                  <strong>Mínima da noite:</strong>
                  ${municipio[selecionado][dia]["tarde"]["temp_min"]}
                </div>
                
                <div>
                  <strong>Resumo:</strong>
                  ${municipio[selecionado][dia]["manha"]["resumo"]}
                </div>
              </div>

              <div class="minSection">
                <img src="${
									municipio[selecionado][dia]["noite"]["icone"]
								}" alt="Ícone">
              </div>
							
              <div class="minSection">
                <div>
                  <strong>Máxima da noite</strong>
                  ${municipio[selecionado][dia]["noite"]["temp_max"]}
                </div>

                <div>
                  <strong>Mínima da noite:</strong>
                  ${municipio[selecionado][dia]["noite"]["temp_min"]}
                </div>
                
                <div>
                  <strong>Resumo:</strong>
                  ${municipio[selecionado][dia]["manha"]["resumo"]}
                </div>
              </div>

            </div>
            `;
				} else {
					const dia = Object.keys(municipio[selecionado])[i];
					const [diaCalendario, mes, ano] = dia.split("/"); // Dividir a data em partes

					const data = new Date(ano, mes - 1, diaCalendario);
					resultadoMunicipios.innerHTML += `
            <div class="section">

              <div class="minSection">
                <div>
                  <strong>Dia ${diasSemana[data.getDay()]}:</strong>
                  ${dia}
                </div>
              </div>

              <div class="minSection">
                <img src="${municipio[selecionado][dia]["icone"]}" alt="Ícone">
              </div>


              <div class="minSection">
                <div>
                  <strong>Máxima:</strong>
                  ${municipio[selecionado][dia]["temp_max"]}
                </div>

                <div>
                  <strong>Mínima:</strong>
                  ${municipio[selecionado][dia]["temp_min"]}
                </div>
                
                <div>
                  <strong>Resumo:</strong>
                  ${municipio[selecionado][dia]["resumo"]}
                </div>
              </div>

            </div>
            `;
				}
			}
			//
			//
			//
			//
			console.log(Object.keys(municipio[selecionado])[0]);
		} catch (e) {
			console.log(e);
		}
	});

	municipiosDiv.appendChild(selectMunicipio);
}

function criarSelects(estados) {
	const selectEstado = document.createElement("select");
	const optionDefault = document.createElement("option");
	optionDefault.innerText = "Escolha um estado";
	optionDefault.id = "0";
	selectEstado.appendChild(optionDefault);

	estados.forEach(e => {
		const option = document.createElement("option");
		option.innerText = e.nome;
		option.id = e.sigla;
		selectEstado.appendChild(option);
	});

	selectEstado.value = "Escolha um estado";
	selectEstado.addEventListener("change", async function () {
		if (this.value == "Escolha um estado") {
			return;
		}
		try {
			const selecionado = selectEstado.options[selectEstado.selectedIndex].id;
			const resposta = await fetch(
				`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selecionado}/municipios`
			);
			const municipios = await resposta.json();
			municipiosDiv.innerHTML = "";
			criarCidades(municipios);
		} catch (e) {
			console.log(e);
		}
	});
	estadosDiv.appendChild(selectEstado);
}

criarSelects(await pegarEstados());
