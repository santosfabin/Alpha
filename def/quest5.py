def criar_dict_pessoa(nome, idade, **kwargs):
    pessoa = {
        "nome": nome,
        "idade": idade,
    }
    pessoa.update(kwargs)  # Adiciona informações adicionais ao dicionário
    return pessoa

print(criar_dict_pessoa("Fabiano", 21, cidade="São Paulo", profissão="Programador"))
# Saída: {'nome': 'Fabiano', 'idade': 21, 'cidade': 'São Paulo', 'profissão': 'Programador'}