class ContaBancaria:
  def __init__(self, saldo, titular):
    self.set_saldo(saldo)
    self.__titular = titular
    
  def set_saldo(self, valor):
    if valor < 0:
      print("Erro: O saldo não pode ser negativo.")
    else:
      self.__saldo = valor
  
  def get_saldo(self):
    print(f"\n{self.__titular}, seu saldo é de: R${self.__saldo}")
  
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
conta1.get_saldo()
conta1.sacar(1000)

conta2.depositar(10)
conta2.depositar(10)