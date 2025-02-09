def atualizar_cadastro(nome: str, idade: int) -> str:
  if idade == None:
    return nome
  return f"Nome: {nome}; Idade: {idade}"