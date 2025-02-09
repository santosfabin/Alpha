class Calculadora:
  """
  Classe que realiza operações básicas de uma calculadora.

  Exemplos de uso:
  >>> calc = Calculadora()
  >>> calc.somar(2, 3)
  5
  >>> calc.subtrair(5, 3)
  2
  >>> calc.multiplicar(2, 4)
  8
  >>> calc.dividir(10, 2)
  5.0
  >>> calc.dividir(10, 0)
  Traceback (most recent call last):
      ...
  ValueError: Não é possível dividir por zero.
  """

  def somar(self, a, b):
    """
    Retorna a soma de dois números.

    Exemplo:
    >>> calc = Calculadora()
    >>> calc.somar(2, 3)
    5
    """
    return a + b

  def subtrair(self, a, b):
    """
    Retorna a subtração de dois números.

    Exemplo:
    >>> calc = Calculadora()
    >>> calc.subtrair(5, 3)
    2
    """
    return a - b

  def multiplicar(self, a, b):
    """
    Retorna a multiplicação de dois números.

    Exemplo:
    >>> calc = Calculadora()
    >>> calc.multiplicar(2, 4)
    8
    """
    return a * b

  def dividir(self, a, b):
    """
    Retorna a divisão de dois números.

    Exemplo:
    >>> calc = Calculadora()
    >>> calc.dividir(10, 2)
    5.0
    >>> calc.dividir(10, 0)
    Traceback (most recent call last):
        ...
    ValueError: Não é possível dividir por zero.
    """
    if b == 0:
        raise ValueError("Não é possível dividir por zero.")
    return a / b


# Executando os doctests
if __name__ == "__main__":
  import doctest
  doctest.testmod()

calc = Calculadora()
print(calc.somar(2, 3))