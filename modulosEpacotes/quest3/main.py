from saudacoes.formal import cumprimentar as cumprimentar_formal
from saudacoes.informal import cumprimentar as cumprimentar_informal

if __name__ == "__main__":
  nome = input("Digite seu nome: ")
  
  print("\nSaudação formal:")
  cumprimentar_formal(nome)
  
  print("\nSaudação informal:")
  cumprimentar_informal(nome)