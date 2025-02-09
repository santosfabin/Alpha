import requests

url = "https://jsonplaceholder.typicode.com/posts"

response = requests.get(url)
# A função requests.get(url) faz uma requisição HTTP GET para a URL especificada.
# O resultado da requisição é armazenado na variável response.

if response.status_code == 200:
  print("Deu bom")
  
  json = response.json()
  
  for post in json[:3]:  # Itera sobre os 3 primeiros posts
    print(f"\nID: {post['id']}")
    print(f"Título: {post['title']}")
    print(f"Corpo: {post['body']}")
else:
  print("Algo não deu bom")