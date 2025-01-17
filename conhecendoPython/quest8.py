cardapio = {"batata frita": 5.50, "hambúrguer": 10.00, "suco": 4.00, "refrigerante": 3.50}

print("\nCardápio")
for item in cardapio:
  print(f"{item}: R${cardapio[item]}")

pedidos = input("\nDigite seu pedido: ").lower().split(", ")

total = 0
invalidos = ""

for item in pedidos:
  if(item in cardapio):
    total += cardapio[item]
  else:
    invalidos += " " + item

print(f"Total a pagar: {total:.2f}")
print(f"Pratos inválidos: {invalidos}")