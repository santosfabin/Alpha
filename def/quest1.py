def fatorial(valor):
  if valor == 0:
    return 1
  
  elif valor < 0:
    return "Valor inválido"
  
  total = 1
  for i in range(1, valor +1):
    total *= i
    print(i, end=" ")
  return total

pergunta = int(input("Digite um número inteiro: "))
print("\n", fatorial(pergunta))