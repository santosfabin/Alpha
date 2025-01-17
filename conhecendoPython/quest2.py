frase = input("Digite uma frase: ")
palavra = input("Digite uma palavra: ")

numFrase = len(frase)
print(f"\nQuantidade de caracteres na frase {numFrase}\n")

if palavra in frase:
  print(f"Existe a palavra {palavra} na frase fornecida")
else:
  print(f"Não xiste a palavra {palavra} na frase fornecida")

# string[início:fim:passo]
# Se você omitir o start, ele assume que você quer começar do início da string.
# Se você omitir o end, ele assume que você quer ir até o final da string.
print(f"\nOs 3 primeiros caracteres da frase {frase[:3]}")
print(f"Os 3 ultimos caracteres da frase {frase[-3:]}")