class ContaCorrente:
  def __init__(self, numero, limite):
    self.__numero = numero
    self.__saldo = 0.0
    self.__limite = limite
  
  def depositar(self, valor):
    if valor > 0:
      self.__saldo += valor
      return "Deposito realizado"
  
  def sacar(self, valor):
    if valor <= 0:
      return "Digite um valor válido"
    elif valor > self.__limite:
      return "Fora do limite"
    elif valor > self.__saldo:
      return "Saldo indisponível"
    
    self.__saldo -= valor
    return "Saque realizado"
  
  def descricao(self):
    return f"Conta número: {self.__numero}\nSaldo de R${self.__saldo}\nLimite de: {self.__limite}"
  
  def get_numero(self):
    return self.__numero