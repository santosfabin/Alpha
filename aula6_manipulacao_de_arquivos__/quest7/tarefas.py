class Tarefa:
  def __init__(self, descricao: str):
    self.descricao = descricao
    self.concluida = False

  def marcar_como_concluida(self):
    self.concluida = True

  def __str__(self):
    status = "[x]" if self.concluida else "[ ]"
    return f"{status} {self.descricao}"

  def para_dicionario(self):
    return {"descricao": self.descricao, "concluida": self.concluida}

  @classmethod
  def de_dicionario(cls, dados):
    tarefa = cls(dados["descricao"])
    if dados["concluida"]:
      tarefa.marcar_como_concluida()
    return tarefa