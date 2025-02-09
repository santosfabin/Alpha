from typing import Union

def processar_dados(dado: int | str) -> Union[int, str]:
  if isinstance(dado, int):
    return dado * 2
  else:
    return dado.upper()