def celsius_para_fahrenheit(celsius):
  return (celsius * 9/5) + 32

def fahrenheit_para_celsius(fahrenheit):
  return (fahrenheit - 32) * 5/9

if __name__ == "__main__":
  print("\n1. Celsius para Fahrenheit")
  print("2. Fahrenheit para Celsius")

  temperatura = input("\nEscolha a opção desejada (1 ou 2): ")
  if temperatura == "1":
      celsius = float(input("Digite a temperatura em Celsius: "))
      print(f"{celsius}°C equivalem a {celsius_para_fahrenheit(celsius):.2f}°F")
  elif temperatura == "2":
      fahrenheit = float(input("Digite a temperatura em Fahrenheit: "))
      print(f"{fahrenheit}°F equivalem a {fahrenheit_para_celsius(fahrenheit):.2f}°C")
  else:
      print("Opção inválida.")
