try:
  with open("arquivo_que_nao_existe.txt", "r") as arquivo:
    print(arquivo.read())
except FileNotFoundError:
  print("Meu caro coleguinha, não achei seu arquivo")