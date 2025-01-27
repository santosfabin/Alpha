class Cliente:
  def __init__(self, nome, cpf):
    self.__nome = nome
    self.__cpf = cpf
    self.__contas = []
  
  def adicionar_conta(self, conta):
    self.__contas.append(conta)
    return "Conta adicionada"
  
  def descricao(self):
    return f"Nome: {self.__nome}\nCPF: {self.__cpf}"
  
  def get_cpf(self):
      return self.__cpf
    
  def get_contas(self):
    return self.__contas