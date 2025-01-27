def listar_clientes(clientes):
  for cliente in clientes:
    print(cliente.descricao())
    for conta in cliente.get_contas():
      print(conta.descricao())
      
def listar_contas(contas):
  for conta in contas:
    print(conta.descricao())