def validar_cpf(cpf):
    # Remove qualquer caractere não numérico (como pontos e traços)
    cpf = ''.join(filter(str.isdigit, cpf))
    
    # Verifica se o CPF tem exatamente 11 dígitos e não é uma sequência repetitiva
    if len(cpf) != 11 or cpf == cpf[0] * 11:
        return False
    
    # Função para calcular o dígito verificador
    def calcular_digito(cpf, pesos):
        soma = sum(int(cpf[i]) * pesos[i] for i in range(len(pesos)))
        resto = soma % 11
        return 0 if resto < 2 else 11 - resto
    
    # Verifica o primeiro dígito verificador
    primeiro_digito = calcular_digito(cpf, [10, 9, 8, 7, 6, 5, 4, 3, 2])
    if int(cpf[9]) != primeiro_digito:
        return False
    
    # Verifica o segundo dígito verificador
    segundo_digito = calcular_digito(cpf, [11, 10, 9, 8, 7, 6, 5, 4, 3, 2])
    
    if int(cpf[10]) != segundo_digito:
        return False
    return True

if __name__ == "__main__":
    cpf = "123.456.789-09"
    if validar_cpf(cpf):
        print("CPF Válido")
    else:
        print("CPF Inválido")
