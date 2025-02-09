import json

with open("livros.json", "r") as arquivo:
  livros = json.load(arquivo)

for livro in livros:
  for chave, valor in livro.items():
    print(f"{chave}: {valor}")
  print()