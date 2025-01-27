def depositar(contas):
  numero = int(input("Número da conta: "))
  for conta in contas:
    if conta.get_numero() == numero:
      valor = input("Digite um valor positivo: ")
      if valor <= 0:
        print("Algo deu errado")
        return
      if conta.depositar(valor):
          return True
  return False

def sacar(contas):
  numero = int(input("Digite o número da conta: "))
  for conta in contas:
    if conta.get_numero() == numero:
      valor = input("Valor: ")
      if conta.sacar(valor):
          return True
  return False

def aplicar_juros(contas):
  numero = int(input("Número da conta: "))
  for conta in contas:
    if conta.get_numero() == numero:
      conta.aplicar_juros()
      return True
  return False