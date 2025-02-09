import os

diretorio_atual = os.getcwd()
print(f"\nO diretório atual é: {diretorio_atual}")

with open("amostras/dados.txt", "r") as arquivo:
  linha = arquivo.readline()
  print("\nLendo sem caminha adsoluto:")
  while linha:
    print(linha, end="")
    linha = arquivo.readline()
  print()

diretorio_do_arquivo = f"{diretorio_atual}/amostras/dados.txt"

with open(diretorio_do_arquivo, "r") as arquivo:
  print()
  linha = arquivo.readline()
  print("\nLendo COM caminha adsoluto:")
  while linha:
    print(linha, end="")
    linha = arquivo.readline()
  print()