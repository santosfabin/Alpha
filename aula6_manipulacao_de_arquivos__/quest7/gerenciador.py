import json
from typing import List
from tarefas import Tarefa

class GerenciadorTarefas:
  def __init__(self, arquivo_dados="tarefas.json"):
    self.tarefas: List[Tarefa] = []
    self.arquivo_dados = arquivo_dados
    self.carregar_tarefas()

  def adicionar_tarefa(self, descricao: str):
    nova_tarefa = Tarefa(descricao)
    self.tarefas.append(nova_tarefa)
    print(f"Tarefa '{descricao}' adicionada com sucesso!")

  def marcar_tarefa_como_concluida(self, indice: int):
    if 0 <= indice < len(self.tarefas):
      self.tarefas[indice].marcar_como_concluida()
      print(f"Tarefa '{self.tarefas[indice].descricao}' marcada como concluída!")
    else:
      print("Índice inválido.")

  def listar_tarefas(self):
    if not self.tarefas:
      print("Nenhuma tarefa cadastrada.")
    else:
      for i, tarefa in enumerate(self.tarefas):
        print(f"{i}. {tarefa}")

  def excluir_tarefa(self, indice: int):
    if 0 <= indice < len(self.tarefas):
      tarefa_removida = self.tarefas.pop(indice)
      print(f"Tarefa '{tarefa_removida.descricao}' removida com sucesso!")
    else:
      print("Índice inválido.")

  def salvar_tarefas(self):
    dados = [tarefa.para_dicionario() for tarefa in self.tarefas]
    with open(self.arquivo_dados, 'w') as f:
      json.dump(dados, f)
    print(f"Tarefas salvas em {self.arquivo_dados}")

  def carregar_tarefas(self):
    try:
      with open(self.arquivo_dados, 'r') as f:
        dados = json.load(f)
        self.tarefas = [Tarefa.de_dicionario(item) for item in dados]
      print(f"Tarefas carregadas de {self.arquivo_dados}")
    except FileNotFoundError:
      print(f"Arquivo {self.arquivo_dados} não encontrado. Criando nova lista de tarefas.")
    except json.JSONDecodeError:
      print(f"Erro ao decodificar o arquivo {self.arquivo_dados}. Criando nova lista de tarefas.")