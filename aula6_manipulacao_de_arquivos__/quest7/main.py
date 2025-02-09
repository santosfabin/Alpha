from gerenciador import GerenciadorTarefas

def main():
  gerenciador = GerenciadorTarefas()

  while True:
    print("\n=== Gerenciador de Tarefas ===")
    print("1. Adicionar Tarefa")
    print("2. Marcar Tarefa como Concluída")
    print("3. Listar Tarefas")
    print("4. Excluir Tarefa")
    print("5. Sair")
    opcao = input("Escolha uma opção: ")

    if opcao == '1':
      descricao = input("Descrição da tarefa: ")
      gerenciador.adicionar_tarefa(descricao)
    elif opcao == '2':
      gerenciador.listar_tarefas()
      indice = int(input("Índice da tarefa a marcar como concluída: "))
      gerenciador.marcar_tarefa_como_concluida(indice)
    elif opcao == '3':
      gerenciador.listar_tarefas()
    elif opcao == '4':
      gerenciador.listar_tarefas()
      indice = int(input("Índice da tarefa a excluir: "))
      gerenciador.excluir_tarefa(indice)
    elif opcao == '5':
      gerenciador.salvar_tarefas()
      print("Saindo...")
      break
    else:
      print("Opção inválida. Tente novamente.")

if __name__ == "__main__":
  main()