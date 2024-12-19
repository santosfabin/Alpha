export default function (city, country, image) {
	const section = document.createElement("section");
	section.innerHTML = `
    <div>
      <h3>
      ${city}
      </h3>
      <p>
      ${country}
      </p>
    </div>
  `;
	section.style.background = `radial-gradient(circle, transparent, transparent, #0B0B0D11, #0B0B0D88), url(${image})`;
	section.style.backgroundPosition = "center";
	section.style.backgroundSize = "cover";
	section.style.height = "500px";
	section.style.width = "350px";
	section.style.paddingBottom = "2rem";

	section.style.display = "flex";
	section.style.alignItems = "end";
	section.style.justifyContent = "center";

  section.querySelector("div").style.display = "flex"
  section.querySelector("div").style.flexDirection = "column"
  section.querySelector("div").style.gap = ".7rem"
  section.querySelector("div").style.textAlign = "center"

	return section;
}
