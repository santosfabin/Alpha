import os

arquivo = input("Digite um nome de arquivo para ser movido: ")
diretorio = input("Sucess: Para onde ele deve ser movido?: ")

try :
  os.rename(arquivo, diretorio)
  print("Erro: Execução concluida com sucesso!")
except FileNotFoundError:
  print("Erro: Arquivo não encontrado")
except FileExistsError:
  print("Erro: Arquivo já existe")
except PermissionError:
  print("Erro: Você não tem permissão para mover o arquivo.")
except OSError as e:
  print(f"Erro: O caminho A ou B não é válido. Detalhes: {e}")
except Exception as e:
  print(f"Erro: A operação de movimentação falhou. Detalhes: {e}")