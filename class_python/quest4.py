class Retangulo:
  def __init__(self, base, altura):
    self.__base = base
    self.__altura = altura
  
  def calculo(self):
    return self.__base * self.__altura

class Circulo:
  def __init__(self, raio):
    self.__raio = raio

  def calculo(self):
    return 3.1415 * (self.__raio ** 2)

class Triangulo:
  def __init__(self, base, altura):
    self.__base = base
    self.__altura = altura

  def calculo(self):
    return (self.__base * self.__altura) / 2

def soma(lista):
  total = 0
  for item in lista:
    total += item.calculo()
  return total

retangulo = Retangulo(5, 10)
circulo = Circulo(7)
triangulo = Triangulo(6, 8)

formas = [retangulo, circulo, triangulo]
print("Soma das áreas:", soma(formas))