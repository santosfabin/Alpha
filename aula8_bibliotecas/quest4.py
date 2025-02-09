import datetime
print(f"Data + hora atual: {datetime.datetime.now().strftime('%d/%m/%Y %H:%M:%S')}")

aniversario = datetime.datetime(2003, 5, 8)
print(f"Data do meu aniversário: {aniversario.strftime('%d/%m/%Y')}")

natal = datetime.datetime(datetime.datetime.now().year, 12, 25)

dias_p_natal = (natal - datetime.datetime.now()).days
print(f"Dias para o natal: {dias_p_natal}")