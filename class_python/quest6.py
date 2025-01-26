class Livro:
  def __init__(self, titulo, autor, isbn, emprestado=False):
    self.__titulo = titulo
    self.__autor = autor
    self.__isbn = isbn
    self.__emprestado = emprestado

  def get_titulo(self):
    return self.__titulo

  def get_autor(self):
    return self.__autor

  def get_isbn(self):
    return self.__isbn

  def get_emprestado(self):
    return self.__emprestado

  def exibir_informacoes(self):
    print(f"\nTítulo: {self.__titulo}")
    print(f"Autor: {self.__autor}")
    print(f"ISBN: {self.__isbn}")
    print(f"STATUS: {'Emprestado' if self.__emprestado == True else 'Disponível'}")

  def emprestar_livro(self, emprestado):
    if emprestado:
      self.__emprestado = emprestado
      print(f"\nO livro {self.get_titulo()} foi emprestado.")
    else:
      self.__emprestado = False
      print(f"\nO livro {self.get_titulo()} devolvido.")




class Usuario:
  def __init__(self, nome, id):
    self.__nome = nome
    self.__id = id
    self.__livros_emprestados = []
  
  def get_nome(self):
    return self.__nome
  
  def get_id(self):
    return self.__id
  
  def get_livros_emprestados(self):
    return self.__livros_emprestados
  
  def pegar_emprestado(self, livro):
    if len(self.__livros_emprestados) >= 3:
      print("** Usuário já pegou livros demais **")
      return
    
    if livro not in self.__livros_emprestados and livro.get_emprestado() == False:
      livro.emprestar_livro(True)
      self.__livros_emprestados.append(livro)
      
      print(f"Livro '{livro.get_titulo()}' marcado como emprestado")
    else:
      print(f"Livro '{livro.get_titulo()}' já está marcado como emprestado")
  
  def devolver_livro(self, livro):
    if livro in self.__livros_emprestados:
      self.__livros_emprestados.remove(livro)
      livro.emprestar_livro(False)
      print(f"Livro '{livro.get_titulo()}', devolvido")
  
  def get_livros_emprestados(self):
    return self.__livros_emprestados
  
  def get_quantidade_livros_emprestados(self):
    return len(self.__livros_emprestados)




class Biblioteca:
  def __init__(self):
    self.__usuarios = []
    self.__lista_de_livros = []
    
    
    
  def get_livro(self, livro_isbn):
    for livro_for in self.__lista_de_livros:
      if livro_isbn == livro_for.get_isbn():
        return livro_for
      
  def get_usuario(self, usuario_id):
    for usuario_for in self.__usuarios:
      if usuario_id == usuario_for.get_id():
        return usuario_for
  
  
  
  def cadastrar_livro(self, livro):
    for item in self.__lista_de_livros:
      if livro.get_isbn() == item.get_isbn():
        print(f"Este ISBN [{livro.get_isbn()}] já foi cadastrado")

        return
    titulo_livro = livro.get_titulo()
    if livro not in self.__lista_de_livros:
      self.__lista_de_livros.append(livro)
      print(f"\n'{titulo_livro}' Cadastrado com sucesso.")
    else:
      print("Este livro já está cadastrado")
  
  def cadastrar_usuario(self, usuario):
    for item in self.__usuarios:
      if usuario.get_id() == item.get_id():
        print(f"Este ID [{usuario.get_id()}] já foi cadastrado")

        return

    if usuario not in self.__usuarios:
      self.__usuarios.append(usuario)
      print(f"\n'{usuario.get_nome()}' Cadastrado com sucesso.")
    else:
      print("Este ID já está cadastrado")
  
  def emprestar_livro(self, livro_isbn, usuario_id):
    livro = self.get_livro(livro_isbn)
    usuario = self.get_usuario(usuario_id)
    
    if not livro:
      print("Livro não encontrado")
      return
    if not usuario:
      print("Usuário não encontrado")
      return
    
    if livro.get_emprestado() == True:
      print(f"Livro {livro.get_titulo()} já está emprestado")
      return
    usuario.pegar_emprestado(livro)
  
  def recebimento_livro(self, livro_isbn, usuario_id):
    livro = self.get_livro(livro_isbn)
    usuario = self.get_usuario(usuario_id)
    
    if not usuario:
      print("Usuário não encontrado")
      return
    usuario.devolver_livro(livro)
  
  def buscar(self, valor):
    lista_de_busca = []
    valor = valor.lower()
    
    for livro in self.__lista_de_livros:
      if valor in livro.get_titulo().lower() or valor in livro.get_autor().lower():
        lista_de_busca.append(livro)
    return lista_de_busca
  
  def listar_tudo(self):
    if not self.__lista_de_livros:
      print("Nenhum livro")
      return
    for livro in self.__lista_de_livros:
      print(f"{livro.get_titulo()} : {livro.get_isbn()}")
  
  def listar_emprestados(self, id):
    usuario = self.get_usuario(id)
    if usuario == None:
      print("Nada por aqui")
      return
    
    for livro in usuario.get_livros_emprestados():
      print(livro.get_titulo())

  def listar_disponiveis(self):
    lista = []
    for livro in self.__lista_de_livros:
      if not livro.get_emprestado():
        lista.append(livro.get_titulo())
    return lista




# instanciando Biblioteca
biblioteca = Biblioteca()


def interface():  
  def cadastrar_livro():
    titulo = input("Digite o nome da titulo: ")
    autor = input("Digite o nome da autor: ")
    isbn = input("Digite o nome da isbn: ")
    
    livro = Livro(titulo, autor, isbn)
    
    biblioteca.cadastrar_livro(livro)
  
  
  def cadastrar_usuario():
    nome = input("Digite o nome para seu usuário: ")
    id = input("Digite o id para seu usuário: ")
    
    usuario = Usuario(nome, id)
    
    biblioteca.cadastrar_usuario(usuario)
  
  def emprestar_livro():
    livro_isbn = input("Digite o ISBN do livro: ")
    usuario_id = input("Digite o id de usuário: ")
    
    biblioteca.emprestar_livro(livro_isbn, usuario_id)
  
  def devolver_livro():
    livro_isbn = input("Digite o ISBN do livro: ")
    usuario_id = input("Digite o id de usuário: ")
    
    biblioteca.recebimento_livro(livro_isbn, usuario_id)
  
  def buscador():
    valor = input("Digite uma palavra para buscar: ")
    livros = biblioteca.buscar(valor)
    
    if not livros:
      print("\nNada encontrado")
      return
    
    print("\nLista de busca")
    for livro in livros:
      print(f"Título: {livro.get_titulo()} | Autor: {livro.get_autor()} | ISBN: {livro.get_isbn()}")
      
  def listar_tudo():
    biblioteca.listar_tudo()
  
  def listar_emprestados():
    usuario = input("Digite o ID do usuário: ")
    
    biblioteca.listar_emprestados(usuario)
  
  def livros_disponiveis():
    if biblioteca.listar_disponiveis() == []:
      print("Lista vazia")
      return
    print("\nLivros disponíveis:")
    for livro in biblioteca.listar_disponiveis():
      print(livro)
    

  while True:

    print("\n1. Cadastrar Livro")
    print("2. Cadastrar Usuário ")
    print("3. Emprestar Livro (pergunta o ID do usuário e o ISBN do livro)")
    print("4. Devolver Livro (pergunta o ID do usuário e o ISBN do livro)")
    print("5. Pesquisar Livro (pergunta o termo de busca)")
    print("6. Listar Todos os Livros")
    print("7. Listar Livros Emprestados (pergunta o ID do usuário)")
    print("8. Listar Livros Disponíveis (i.e. que não estão emprestados a ninguém)")
    print("9. Sair")
    resposta = input("")
    
    if not resposta.isdigit():
      print("Digite uma entrada válida")
      continue
    
    alternativa = int(resposta)
    
    if alternativa == 1:
        cadastrar_livro()
    elif alternativa == 2:
        cadastrar_usuario()
    elif alternativa == 3:
        emprestar_livro()
    elif alternativa == 4:
        devolver_livro()
    elif alternativa == 5:
        buscador()
    elif alternativa == 6:
        listar_tudo()
    elif alternativa == 7:
        listar_emprestados()
    elif alternativa == 8:
        livros_disponiveis()
    elif alternativa == 9:
        print("Saindo do sistema...")
        break
    else:
        print("Opção inválida. Tente novamente.")

interface()