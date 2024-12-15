const puro = document.getElementById("puro")
const cozinhado = document.getElementById("cozinhado")

puro.addEventListener("input", () => {
  let digitando = puro.value

  cozinhado.innerHTML = digitando
})