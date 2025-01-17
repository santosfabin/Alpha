frase = input("\nDigite a frase: ")
proibidas = input("Digite as palavras proibidas, separadas por vírgulas: ")

palavrasProibidas = proibidas.split(", ")

palavrasDaFrase = frase.split(" ")

for i in range(len(palavrasDaFrase)):
  if palavrasDaFrase[i] in palavrasProibidas:
    palavrasDaFrase[i] = "*" * len(palavrasDaFrase[i])

# delimiter.join(sequence)
# " ".join(["o", "ladrão", "roubou", "o", "ouro"])
# "o ladrão roubou o ouro"

print("\nFrase censurada:", " ".join(palavrasDaFrase))