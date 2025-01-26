class ContaBancaria:
  def __init__(self, saldo, titular):
    self.__saldo = saldo if saldo > 0 else 0
    self.__titular = titular
  
  def depositar(self, valor):
    self.__saldo += valor
    print(f"\nDepósito feito para {self.__titular}")

  def sacar(self, valor):
    if self.__saldo >= valor:
      self.__saldo -= valor 
      print(f"\nSaldo realizado para {self.__titular} de R${valor}")
    else:
      print(f"\nSaldo insuficiente para {self.__titular}")

conta1 = ContaBancaria(1000, "Joãozinho")
conta2 = ContaBancaria(2000, "Zé Riqueza")

conta1.sacar(1100)
conta1.sacar(1000)

conta2.depositar(10)
conta2.depositar(10)