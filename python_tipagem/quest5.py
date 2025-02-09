def para_string(tupla: tuple[int, int]) -> tuple[str, str]:
  valor1, valor2 = tupla
  return (str(valor1), str(valor2))

print(para_string((10, 20)))