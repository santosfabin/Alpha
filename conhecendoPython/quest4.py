for i in range(10):
  i += 1
  print(i, end=" ")

print("\n")

for i in range(10, 0, -1):
  print(i, end=" ")

print("\n")

lista = ["Anderson", "Bruno", "Fabiano", "Matheus"]

indice = 0
for nome in lista:
  print(f"{indice}: {nome}")
  indice += 1
