def somar_numeros(*args):
    if not args:
        return None
    return max(args)
print(somar_numeros(10))
print(somar_numeros(10, 30, 20))
print(somar_numeros(5, 10, 50, 40))
print(somar_numeros())
