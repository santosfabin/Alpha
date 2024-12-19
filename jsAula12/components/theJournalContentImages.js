export default function (date, title, description, image) {
	const div = document.createElement("div");
	div.innerHTML = `
    <div>
      <img src="${image}" >

      <div>
        <p>
          ${date}
        </p>
        <h3>
          ${title}
        </h3>
      </div>
      <p class="description">
        ${description}
      </p>
    </div>
  `;

	div.querySelector("img").style.width = "100%";
	div.querySelector("img").style.height = "300px";
	div.querySelector("img").style.objectFit = "cover";
	div.querySelector(".description").style.width = "80%";

	const divContainer = div.querySelector("div");

	divContainer.style.width = "600px";
	divContainer.style.display = "flex";
	divContainer.style.flexDirection = "column";
	divContainer.style.alignItems = "center";
	divContainer.style.gap = "1rem";
	divContainer.style.textAlign = "center";
  

	return div;
}
