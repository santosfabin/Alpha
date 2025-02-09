import timeit

# 1. Usando list comprehension
def gerar_lista_comprehension():
    return [x for x in range(1, 1000001)]

# 2. Usando loop for tradicional com append
def gerar_lista_for():
    lista = []
    for x in range(1, 1000001):
        lista.append(x)
    return lista

# Medindo o tempo de execução
tempo_comprehension = timeit.timeit(gerar_lista_comprehension, number=10)
tempo_for = timeit.timeit(gerar_lista_for, number=10)

# Exibindo os resultados
print(f"Tempo usando list comprehension: {tempo_comprehension:.6f} segundos")
print(f"Tempo usando loop for + append: {tempo_for:.6f} segundos")