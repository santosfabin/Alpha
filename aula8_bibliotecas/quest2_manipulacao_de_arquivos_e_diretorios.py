import os
import shutil

diretorio_atual = os.getcwd()
listar_diretorio_atual = os.listdir(diretorio_atual)
print(f"Listando diretório atual: {listar_diretorio_atual}")

# os.mkdir(f"{diretorio_atual}/backup")
backup = os.path.join(diretorio_atual, "backup")
if not os.path.exists(backup):
  os.mkdir(backup)
  print("Diretório backup criado")
else:
  print("Diretório já existe backup")

print()

for file in listar_diretorio_atual:
  shutil.copy(file, backup)
  print(f"Arquivo {file} copiado para dentro de {backup}")