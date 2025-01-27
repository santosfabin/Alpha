from .formal import cumprimentar as cumprimentar_formal
from .informal import cumprimentar as cumprimentar_informal

def saudar(nome, tipo):
  if tipo == "formal":
    return cumprimentar_formal(nome)
  elif tipo == "informal":
    return cumprimentar_informal(nome)
  else:
    return "Tipo inválido"