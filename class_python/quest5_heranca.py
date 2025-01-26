# Class onde vai ser herdada para todos os produtos, classe que representa o cálculo de frete
class Frete:
  def __init__(self, nome, preco):
    self.__nome = nome 
    self.__preco = preco
    
  def calcular_frete(self):
    if self.__preco > 1000:
        return self.__preco * 0.05
    return self.__preco * 0.1

class Eletronico(Frete):
    def __init__(self, nome, preco, voltagem):
      # Iniciando a partir do __init__ do frete, pois lá já existe essa inicialização
        super().__init__(nome, preco)
        self.__voltagem = voltagem
        
class Movel(Frete):
    def __init__(self, nome, preco, material):
      # Também iniciando pelo __init__ do frete
        super().__init__(nome, preco)
        self.__material = material