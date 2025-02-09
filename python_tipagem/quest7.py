class ListaTarefas:
  def __init__(self, lista: list[str]) -> None:
    self.lista = lista
  
  def adicionar_tarefa(self, tarefa: str) -> None:
    self.lista.append(tarefa)
  
  def remover_tarefa(self, tarefa: str) -> None:
    self.lista.remove(tarefa)