class ContaPoupanca:
  def __init__(self, numero, taxa_juros):
    self.__numero = numero
    self.__saldo = 0.0
    self.__taxa_juros = taxa_juros
    
  def depositar(self, valor):
    if valor > 0:
      self.__saldo += valor
      return "Deposito realizado"
      
  def sacar(self, valor):
    if valor <= 0:
      return "Digite um valor válido"
    elif valor > self.__saldo:
      return "Saldo indisponível"
    
    self.__saldo -= valor
    return "Saque realizado"
  
  def aplicar_juros(self):
    self.__saldo += self.__saldo * self.__taxa_juros
    return "Juros aplicado"
  
  def descricao(self):
    return f"Conta número: {self.__numero}\nSaldo de R${self.__saldo}\nTaxa de Juros de: {self.__taxa_juros}"
  
  def get_numero(self):
    return self.__numero