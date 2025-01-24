def combo(*golpes):
  def danoTotal(sequencia, *porcentagem):
    danoTotal = 0
    danos = {
      "s": 10,
      "c": 20,
      "e": 50
    }
      
    golpes = sequencia.split(",")
    
    for i in golpes:
      danoTotal += danos[i]
    
    resultadoDoDano = danoTotal
    
    for i in porcentagem:
       danoTotal += resultadoDoDano * i
      
    return danoTotal

  # formatador
  sequencia = ""
  for index, item in enumerate(golpes):
    sequencia += item.lower()
    
    if index + 1 == len(golpes):
      break
    
    sequencia += ","
  
  # identificador de sequencia
  combos = {
    "Combo Básico": {"s,s,c": 0.30},
    "Combo Avançado": {"s,c,c,e": 0.50},
    "Combo Secreto": {"e,e,s": 1.0}
  }
  
  listaSequencia = []
  
  sequenciaParaCombo = sequencia
  
  for _, item in combos.items():
    for chave1, item1 in item.items():
      while True:
        if chave1 in sequenciaParaCombo:
          listaSequencia.append(item1)
          sequenciaParaCombo = sequenciaParaCombo.replace(chave1, "", 1)
        else:
          break
  
  resultadoDano = danoTotal(sequencia, *listaSequencia)
  return resultadoDano, listaSequencia

def formatarSaida(dano, combosSequencia):  
  print()
  print(f"Total de dano dado: {dano}")
  print(f"Multiplicador de dano: ",end="")
  for index, item in enumerate(combosSequencia):
    porcentagemCombo = int(item * 100)
    print(porcentagemCombo, end="%")
    if index == len(combosSequencia) -1:
      break
    print(" + ", end="")
  print()

dano, combosSequencia = combo("S", "S", "C", "e", "S", "S", "C")

formatarSaida(dano, combosSequencia)