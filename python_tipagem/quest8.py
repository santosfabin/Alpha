class Livro:
    def __init__(self, titulo: str, autor: str, isbn: str, emprestado: bool = False) -> None:
        self.__titulo: str = titulo
        self.__autor: str = autor
        self.__isbn: str = isbn
        self.__emprestado: bool = emprestado

    def get_titulo(self) -> str:
        return self.__titulo

    def get_autor(self) -> str:
        return self.__autor

    def get_isbn(self) -> str:
        return self.__isbn

    def get_emprestado(self) -> bool:
        return self.__emprestado

    def exibir_informacoes(self) -> None:
        print(f"\nTítulo: {self.__titulo}")
        print(f"Autor: {self.__autor}")
        print(f"ISBN: {self.__isbn}")
        print(f"STATUS: {'Emprestado' if self.__emprestado else 'Disponível'}")

    def emprestar_livro(self, emprestado: bool) -> None:
        if emprestado:
            self.__emprestado = emprestado
            print(f"\nO livro {self.get_titulo()} foi emprestado.")
        else:
            self.__emprestado = False
            print(f"\nO livro {self.get_titulo()} devolvido.")


class Usuario:
    def __init__(self, nome: str, id: str) -> None:
        self.__nome: str = nome
        self.__id: str = id
        self.__livros_emprestados: list[Livro] = []
  
    def get_nome(self) -> str:
        return self.__nome
  
    def get_id(self) -> str:
        return self.__id
  
    def get_livros_emprestados(self) -> list[Livro]:
        return self.__livros_emprestados
  
    def pegar_emprestado(self, livro: Livro) -> None:
        if len(self.__livros_emprestados) >= 3:
            print("** Usuário já pegou livros demais **")
            return

        if livro not in self.__livros_emprestados and not livro.get_emprestado():
            livro.emprestar_livro(True)
            self.__livros_emprestados.append(livro)
            print(f"Livro '{livro.get_titulo()}' marcado como emprestado")
        else:
            print(f"Livro '{livro.get_titulo()}' já está marcado como emprestado")
  
    def devolver_livro(self, livro: Livro) -> None:
        if livro in self.__livros_emprestados:
            self.__livros_emprestados.remove(livro)
            livro.emprestar_livro(False)
            print(f"Livro '{livro.get_titulo()}', devolvido")
  
    def get_quantidade_livros_emprestados(self) -> int:
        return len(self.__livros_emprestados)


class Biblioteca:
  def __init__(self) -> None:
    self.__usuarios: list[Usuario] = []
    self.__lista_de_livros: list[Livro] = []

  def get_livro(self, livro_isbn: str) -> Livro | None:
    for livro in self.__lista_de_livros:
      if livro_isbn == livro.get_isbn():
        return livro
    return None

  def get_usuario(self, usuario_id: str) -> Usuario | None:
    for usuario in self.__usuarios:
      if usuario_id == usuario.get_id():
        return usuario
    return None

  def cadastrar_livro(self, livro: Livro) -> None:
    for item in self.__lista_de_livros:
      if livro.get_isbn() == item.get_isbn():
        print(f"Este ISBN [{livro.get_isbn()}] já foi cadastrado")
        return
    if livro not in self.__lista_de_livros:
      self.__lista_de_livros.append(livro)
      print(f"\n'{livro.get_titulo()}' Cadastrado com sucesso.")
    else:
      print("Este livro já está cadastrado")

  def cadastrar_usuario(self, usuario: Usuario) -> None:
    for item in self.__usuarios:
      if usuario.get_id() == item.get_id():
        print(f"Este ID [{usuario.get_id()}] já foi cadastrado")
        return
    if usuario not in self.__usuarios:
      self.__usuarios.append(usuario)
      print(f"\n'{usuario.get_nome()}' Cadastrado com sucesso.")
    else:
      print("Este ID já está cadastrado")

  def emprestar_livro(self, livro_isbn: str, usuario_id: str) -> None:
    livro = self.get_livro(livro_isbn)
    usuario = self.get_usuario(usuario_id)

    if not livro:
      print("Livro não encontrado")
      return
    if not usuario:
      print("Usuário não encontrado")
      return
    if livro.get_emprestado():
      print(f"Livro {livro.get_titulo()} já está emprestado")
      return
    usuario.pegar_emprestado(livro)

  def recebimento_livro(self, livro_isbn: str, usuario_id: str) -> None:
    livro = self.get_livro(livro_isbn)
    usuario = self.get_usuario(usuario_id)

    if not usuario:
      print("Usuário não encontrado")
      return
    usuario.devolver_livro(livro)

  def buscar(self, valor: str) -> list[Livro]:
    lista_de_busca: list[Livro] = []
    valor = valor.lower()

    for livro in self.__lista_de_livros:
      if valor in livro.get_titulo().lower() or valor in livro.get_autor().lower():
        lista_de_busca.append(livro)
    return lista_de_busca

  def listar_tudo(self) -> None:
    if not self.__lista_de_livros:
      print("Nenhum livro")
      return
    for livro in self.__lista_de_livros:
      print(f"{livro.get_titulo()} : {livro.get_isbn()}")

  def listar_emprestados(self, id: str) -> None:
    usuario = self.get_usuario(id)
    if usuario is None:
      print("Nada por aqui")
      return
    for livro in usuario.get_livros_emprestados():
      print(livro.get_titulo())

  def listar_disponiveis(self) -> list[str]:
    lista: list[str] = []
    for livro in self.__lista_de_livros:
      if not livro.get_emprestado():
        lista.append(livro.get_titulo())
    return lista
