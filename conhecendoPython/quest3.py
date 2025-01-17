num = float(input("Digite um número: "))
identificador = ""

if num > 0:
  identificador = "Positivo"
elif num == 0:
  identificador = "Zero"
else:
  identificador = "Negativo"

print("\n" + identificador)