dicionario = {
  "nome": "Fabiano",
  "idade": 21,
  "cidade": "São Paulo"
}

dicionario["profissao"] = "Desenvolvedor"

if "idade" in dicionario:
  print(f"A idade da pessoa é: {dicionario['idade']}")

dicionario.pop("cidade")

print(f"\nPrint do dicionário: {dicionario}")