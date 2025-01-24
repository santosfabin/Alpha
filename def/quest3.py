def criar_email(nome, sobrenome, dominio):
  if dominio == "":
    dominio = "empresa.com.br"
  return f"{nome}.{sobrenome}@{dominio}"

nome = input("\nDigite seu primeiro nome:" )
sobrenome = input("Digite seu sobrenome: ")
dominio = input("Digite seu dominio, ou aperte 'ENTER' para valor padrão: ")

print(criar_email(nome, sobrenome, dominio))