import operacoes

clientes = []
contas = []

def main():
  while True:
    print("1. Cadastrar Cliente")
    print("2. Criar Conta")
    print("3. Depositar")
    print("4. Sacar")
    print("5. Aplicar Juros")
    print("6. Listar Clientes")
    print("7. Listar Contas")
    print("8. Sair")

    valor = input("Digite a opção desejada: ").lower()

    if valor == "1":
      operacoes.cadastro.cadastrar_cliente(clientes)
    elif valor == "2":
      operacoes.cadastro.criar_conta(clientes, contas)
    elif valor == "3":
      operacoes.transacoes.depositar(contas)
    elif valor == "4":
      operacoes.transacoes.sacar(contas)
    elif valor == "5":
      operacoes.transacoes.aplicar_juros(contas)
    elif valor == "6":
      operacoes.relatorios.listar_clientes(clientes)
    elif valor == "7":
      operacoes.relatorios.listar_contas(contas)
    elif valor == "8":
      break
    elif valor == "sair":
      break
    else:
      print("Digite uma opção válida\n")

main()