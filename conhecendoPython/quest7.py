mensagem = input("Digite uma frase: ")

palavras = mensagem.split()

contador = {}

for palavra in palavras:
  if palavra in contador:
    contador[palavra] += 1
  else:
    contador[palavra] = 1

for palavra in sorted(contador):
  print(f"{palavra}: {contador[palavra]}")