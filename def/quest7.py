def validarCPF(cpf):
  """
    Valida um número de CPF informado.

    A função verifica se o CPF é válido de acordo com os cálculos dos dígitos verificadores.
    Ela utiliza pesos específicos para calcular o primeiro e o segundo dígito, comparando
    os resultados com os dígitos informados.

    Parâmetros:
        cpf (str): CPF a ser validado. Deve conter apenas números e ter 14 dígitos no total.

    Regras de validação:
    - O CPF deve conter apenas dígitos e ter exatamente 14 caracteres.
    - Calcula o primeiro dígito utilizando os 12 primeiros números com os pesos [5, 4, ..., 2].
    - Calcula o segundo dígito utilizando os 12 primeiros números + o primeiro dígito com os pesos [6, 5, ..., 2].
    - O CPF é válido se os dígitos verificadores calculados coincidirem com os últimos dois dígitos do CPF informado.

    Retorna:
        str: Retorna "CNPJ válido" se o CPF é válido, caso contrário, "CNPJ inválido".

    Exemplo:
        >>> validarCPF("52998224725000")
        'CNPJ inválido'
        >>> validarCPF("11222333000181")
        'CNPJ válido'
  """
  
  if not (cpf.isdigit() and len(cpf) == 14):
    print("CPF Inválido")
    return
  
  peso = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
  
  objCPF = [int(digito) for digito in cpf]
  
  # calculo para primeiro digito
  
  totalPrimeiroDigito = 0
  
  for index, item in enumerate(objCPF[:-2]):
    totalPrimeiroDigito += peso[index] *  item
  
  calculoPrimeiroDigito = totalPrimeiroDigito % 11
  
  primeiroDigito = 0
  if calculoPrimeiroDigito >= 3:
    primeiroDigito = abs(calculoPrimeiroDigito - 11)
  
  # calculo para segundo digito
  
  peso2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
  
  totalSegundoDigito = 0
  
  for index, item in enumerate(objCPF[:-1]):
    totalSegundoDigito += peso2[index] *  item
  
  calculoSegundoDigito = totalSegundoDigito % 11
  
  segundoDigito = 0
  if calculoSegundoDigito >= 3:
    segundoDigito = abs(calculoSegundoDigito - 11)
  
  objCPF.append(segundoDigito)
  
  if objCPF[12] == primeiroDigito and objCPF[13] == segundoDigito:
    return "CNPJ válido"
  
  return "CNPJ inválido"

cpf = input("Digite seu cpf (apenas números): ")
print(validarCPF(cpf))