num1 = float(input("Digite o primeiro número: "))
num2 = float(input("Digite o segundo número: "))

if num1 < num2 :
  num1, num2 = num2, num1

print(f"\nValor maior {num1}\nValor menor {num2}\n")

adicao = num1 + num2
subtracao = num1 - num2
multiplicacao = num1 * num2
divisao = num1 / num2
modulo = num1 % num2

print(f"Adição: {adicao}")
print(f"Subtracao: {subtracao}")
print(f"Multiplicacao: {multiplicacao}")
print(f"Divisao: {divisao}")
print(f"Modulo: {modulo}")