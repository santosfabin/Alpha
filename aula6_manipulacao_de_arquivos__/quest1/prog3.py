with open("poema.txt", "r") as arquivo:
  contador = 0
  linha = arquivo.readline()
  while linha:
    contador += len(linha.split())
    linha = arquivo.readline()

print(f"\nO programa tem {contador} palavras")