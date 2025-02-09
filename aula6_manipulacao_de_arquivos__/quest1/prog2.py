print()
with open("poema.txt", "r") as arquivo:
  linha = arquivo.readline()
  while linha:
    print(linha, end="")
    linha = arquivo.readline()
    # como o arquivo esta aberto ele guarda informação de onde ele está
    # ent ele o linha = arquivo.readline() pula a linha
print()