import json

livros = [
    {
        "Título": "O Senhor dos Anéis",
        "Autor": "J.R.R. Tolkien",
        "Ano": 1954
    },
    {
        "Título": "Harry Potter e a Pedra Filosofal",
        "Autor": "J.K. Rowling",
        "Ano": 1997
    },
    {
        "Título": "O Hobbit",
        "Autor": "J.R.R. Tolkien",
        "Ano": 1937
    },
    {
        "Título": "O Código Da Vinci",
        "Autor": "Dan Brown",
        "Ano": 2003
    },
    {
        "Título": "Cem Anos de Solidão",
        "Autor": "Gabriel García Márquez",
        "Ano": 1967
    },
    {
        "Título": "1984",
        "Autor": "George Orwell",
        "Ano": 1949
    }
]

# Salva o arquivo sem escape de caracteres
with open("livros.json", "w", encoding="utf-8") as arquivo:
  json.dump(livros, arquivo, ensure_ascii=False, indent=2)

print("Arquivo salvo corretamente.")
