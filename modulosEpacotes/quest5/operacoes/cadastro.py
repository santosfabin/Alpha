from util import validar_cpf
from clientes import Cliente
from contas import ContaPoupanca, ContaCorrente

def cadastrar_cliente(clientes):
  nome = input("Digite seu nome completo: ")
  while True:
    cpf = input("Digite seu cpf: ")
    if validar_cpf(cpf):
      return False
    print("\nCPF Inválido")
  
  cliente = Cliente(nome, cpf)
  clientes.append(cliente)
  return True

def criar_conta(clientes, contas):
  cpf = input("Digite seu CPF: ")
  if not validar_cpf(cpf):
    print("CPF inválido")
    return False
  for cliente in clientes:
    if cliente.get_cpf() == cpf:
      tipo = input("Tipo da conta\nCorrente\nPoupanca\n: ")
      numero = int(input("Número da conta: "))
      if tipo == "corrente":
          conta = ContaCorrente(tipo, numero)
          cliente.adicionar_conta(conta)
      else:
          conta = ContaPoupanca(0, numero)
          cliente.adicionar_conta(conta)
      contas.append(conta)
      return True