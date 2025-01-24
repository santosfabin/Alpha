# Sem usar a palavra-chave 'global'
contador = 0

def incrementar_sem_global():
    contador = 0 
    contador += 1
    print(f"Valor dentro da função (sem global): {contador}")

incrementar_sem_global()
print(f"Valor fora da função (sem global): {contador}")

# Usando a palavra-chave 'global'
contador = 0

def incrementar_com_global():
    global contador
    contador += 1
    print(f"Valor dentro da função (com global): {contador}")

incrementar_com_global()
print(f"Valor fora da função (com global): {contador}")
