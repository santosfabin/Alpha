class Carro:
  def __init__(self, marca, modelo, ano):
    self.__marca = marca
    self.__modelo = modelo
    self.__ano = ano
  
  def exibir_informacoes(self):
    print(f"\nA marca do seu carro é: {self.__marca}")
    print(f"A modelo do seu carro é: {self.__modelo}")
    print(f"A ano do seu carro é: {self.__ano}")

carro1 = Carro("Toyota", "Corolla", 2023)
carro2 = Carro("Ford", "Fiesta", 2018)

carro1.exibir_informacoes()
carro2.exibir_informacoes()