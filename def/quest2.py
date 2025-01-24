def analisar_numero(numero):
  numeroDeTeste = float(numero)
  
  if numeroDeTeste % 2 == 0:
    impar_par = "Par"
  else:
    impar_par = "Impar"
  
  if numeroDeTeste >= 0:
    positivo_negativo = "Positivo"
  else:
    positivo_negativo = "Negativo"
  
  if int(numeroDeTeste) == numeroDeTeste:
    inteiro_decimal = "Inteiro"
  else:
    inteiro_decimal = "Decimal"
  
  return impar_par, positivo_negativo, inteiro_decimal

numero = input("Digite um número: ")

impar_par, positivo_negativo, inteiro_decimal = analisar_numero(numero)

print(f"O número é {impar_par}, {positivo_negativo} e {inteiro_decimal}")
