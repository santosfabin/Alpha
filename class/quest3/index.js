class Avatar {
	#x = 0;
	#y = 0;
	#moedas = 0;
	#vida = 10;
	#pontoDeDano = 1;

	verificarVida() {
		return this.#vida > 0;
	}

	get() {
		if (this.verificarVida())
			return {
				posicaoX: this.#x,
				posicaoY: this.#y,
				moedas: this.#moedas
			};
	}

	forward(num) {
		if (this.verificarVida()) {
			console.log(`Jogador andou ${num} para frente`);
			this.#y += num;
		}
	}
	back(num) {
		if (this.verificarVida()) {
			if (this.#y > 0) {
				console.log(`Jogador andou ${num} para trás`);
				this.#y -= num;
			}
		}
	}

	right(num) {
		if (this.verificarVida()) {
			console.log(`Jogador andou ${num} para a direita`);
			this.#x += num;
		}
	}
	left(num) {
		if (this.verificarVida()) {
			if (this.#x > 0) {
				console.log(`Jogador andou ${num} para a esquerda`);
				this.#x -= num;
			}
		}
	}

	ganhouMoeda(ganho) {
		if (this.verificarVida()) {
			this.#moedas += ganho;
			console.log(`Quantidade de moedas: ${this.#moedas}`);
		}
	}

	attack() {
		if (this.verificarVida()) {
			console.log(`Dano dado: ${this.#pontoDeDano}`);
			return this.#pontoDeDano;
		}
	}

	danoRecebido(dano) {
		if (this.verificarVida()) {
			this.#vida -= dano;
			console.log(`Dano recebido: ${this.#vida}`);
		}
	}
}

class CowBoy extends Avatar {
	#municao = 10;
	#pontoDeDano = 2;

	attack() {
		if (this.#municao > 0 && this.verificarVida()) {
			this.#municao--;
			console.log(`Munição: ${this.#municao}, Dano dado ${this.#pontoDeDano}`);
			return this.#pontoDeDano;
		}
	}

	ganhouMunicao(qtd) {
		if (this.verificarVida()) {
			this.#municao += qtd;
			console.log(
				`CowBoy ganhou ${qtd} de munição. Munição atual: ${this.#municao}`
			);
		}
	}
}

class Mago extends Avatar {
	#feiticos = 10;
	#pontoDeDano = 3;

	attack() {
		if (this.verificarVida()) {
			if (this.#feiticos <= 0) {
				setTimeout(() => {
					this.#feiticos = 10;
					console.log("Feitiço restaurado");
				}, 10000);
			} else {
				this.#feiticos--;
				console.log(
					`Munição: ${this.#feiticos}, Dano dado ${this.#pontoDeDano}`
				);
				return this.#pontoDeDano;
			}
		}
	}
}
