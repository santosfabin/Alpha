from typing import Literal

def definir_prioridade_tarefa(nivel: Literal["baixo", "media", "alta"]) -> str:
  if nivel == "baixo":
    return "Prioridade de tarefa em baixo"
  elif nivel == "media":
      return "Prioridade de tarefa em média"
  elif nivel == "alta":
      return "Prioridade de tarefa em alta"
  else:
    return "Nível inválido"

print(definir_prioridade_tarefa("media"))