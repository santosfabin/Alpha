def calcular_desconto(preco: float) -> float:
  return preco - preco * 0.1

desconto = float(input("Digite um preço para aplicar 10% de desconto: "))
print(f"Seu preço com desconto: {calcular_desconto(desconto)}")

def juntar_nomes(lista: list[str]) -> str:
  return ", ".join(lista)

nomes = ["Alice", "Bob", "Carlos"]
print(juntar_nomes(nomes))