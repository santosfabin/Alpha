const item1 = document.getElementById("item-1");
const item2 = document.getElementById("item-2");
const item3 = document.getElementById("item-3");
const container = document.getElementById("container");
let estahSegurandoItem = false;
let itemSegurado;

function segurouItem() {
  estahSegurandoItem = true;
  itemSegurado = this;
}

item1.addEventListener("mousedown", segurouItem);

item2.addEventListener("mousedown", segurouItem);

item3.addEventListener("mousedown", segurouItem);

document.addEventListener("mouseup", function () {
  estahSegurandoItem = false;
});

document.addEventListener("mousemove", function (event) {
  if (!estahSegurandoItem) {
    return;
  }

  const itemRect = itemSegurado.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  let itemY;

  if (event.clientY <= containerRect.height - itemRect.height / 2) {
    itemY = event.clientY - itemRect.height / 2;
  } else {
    itemY = containerRect.height - itemRect.height;
  }

  itemSegurado.style.left = `${event.clientX - itemRect.width / 2}px`;
  itemSegurado.style.top = `${itemY}px`;
});
