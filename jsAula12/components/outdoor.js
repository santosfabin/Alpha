export default function () {
	const section = document.createElement("section");

	section.innerHTML = `
    <div>
      <h1>The Great Outdoors</h1>
      <p>Wander often, Wonder alway.</p>
      <p class="play">
      	<svg xmlns="http://www.w3.org/2000/svg" height="4rem" viewBox="0 -960 960 960" width="4rem" fill="#e8eaed"><path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
      </p>
    </div>
  `;
	section.style.display = "flex";
	section.style.justifyContent = "center";
	section.style.alignItems = "center";
	section.style.minHeight = "95vh";
	section.style.width = "100%";
	section.style.background = `
  linear-gradient(to top, #0B0B0D, #00000000, #00000000), url(https://images3.alphacoders.com/133/thumb-1920-1332803.png)
`;
	section.style.backgroundSize = "cover";
	section.style.backgroundPosition = "center";
	section.querySelector("div").style.display = "flex";
	section.querySelector("div").style.flexDirection = "column";
	section.querySelector("div").style.alignItems = "center";
	section.querySelector("div").style.gap = "1rem";

	section.querySelector(".play").style.paddingTop = "5rem";
	section.querySelector(".play").querySelector("svg").style.cursor = "pointer";
	return section;
}
