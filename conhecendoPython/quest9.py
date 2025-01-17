print("\nVocê é um aventureiro, a cada turno você fará uma ação em um item")
print("\nDigite as ações (ex: 'coletar espada', 'usar poção').\nDigite 'fim' para encerrar:\n")
diario = {}


while True:
  acao = input("\nAção: ")
  
  if acao == "fim":
    break
  
  else:
    acao = acao.split(" ")
    
    if acao[0] == "coletar":
      print(f"Você coletou {acao[1]}")
      
      if acao[1] in diario:
        diario[acao[1]] += 1
      else:
        diario[acao[1]] = 1
    elif acao[0] == "usar":
      if acao[1] in diario:
        diario[acao[1]] -= 1

print(diario)