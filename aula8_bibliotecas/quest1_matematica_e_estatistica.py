import random
import statistics
import math

numeros = [random.randint(1, 100) for _ in range(50)]

media = statistics.mean(numeros)
mediana = statistics.median(numeros)
maior = max(numeros)
menor = min(numeros)

raiz_quadrada = math.sqrt(maior)

print(f"\nNumeros gerados:\n{numeros}")
print(f"\nMédia: {media}")
print(f"Mediana: {mediana}")
print(f"Maior número: {maior}")
print(f"Menor número: {menor}")
print(f"Raiz quadrada: {raiz_quadrada}")