def adicionar_item(inventario, item, quantidade=1):
  if item not in inventario:
    inventario[item] = quantidade
    return
  inventario[item] += quantidade

def remover_item(inventario, item, quantidade=1):
  if item in inventario:
    if inventario[item] < quantidade:
      inventario[item] = 0
      return
    inventario[item] -= quantidade

def listar_inventario(inventario):
  print("Seus itens:")
  for chave, qtd in inventario.items():
    print(f"{qtd} {chave}")

def gerenciar_inventario():
  inventario = {}
  
  adicionar_item(inventario, "Poções de Cura", 2)
  adicionar_item(inventario, "Espadas", 1)
  adicionar_item(inventario, "Escudo", 1)
  
  remover_item(inventario, "Espadas", 2)
  
  listar_inventario(inventario)

gerenciar_inventario()