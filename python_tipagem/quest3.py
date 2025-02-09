class Produto:
  def __init__(self, nome: str, preco: float, quantidade: int) -> None:
    self.nome = nome
    self.preco = preco
    self.quantidade = quantidade
  
  def get_name(self) -> str:
    return self.nome
    
  def calcular_total(self) -> float:
    return self.preco * self.quantidade

computador = Produto("Notebook", 3000, 2)
print(f"Valor total de {computador.get_name()} é: {computador.calcular_total():.2f}")