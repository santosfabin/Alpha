export default function () {
	const section = document.createElement("section");
	const div = document.createElement("div");

	const divImage = document.createElement("div");

	section.id = "about";

	divImage.style.width = "100%";
	divImage.style.height = "800px";
	divImage.style.backgroundImage = `
		linear-gradient(to bottom, #0B0B0D, transparent, transparent, #0B0B0D),
		radial-gradient(circle, transparent, transparent, #0B0B0D),
		url("https://images.alphacoders.com/135/thumb-1920-1354205.jpeg")
	`;
	divImage.style.backgroundPosition = "center";
	divImage.style.backgroundSize = "cover";
	divImage.style.backgroundRepeat = "no-repeat";

	section.appendChild(divImage);

	section.style.width = "100%";
	section.style.background = "#0B0B0D";

	section.appendChild(div);
	div.innerHTML = `
		<p>
			&copy; 2017 THE GREAT OUTDOORS. All rights reserved.
		</p>
		<span></span>
		<ul>
			<a href="#about"><li>ABOUT</li></a>
			<a href="#explore"><li>EXPLORE</li></a>
			<a href="#journal"><li>JOURNAL</li></a>
			<li>SEARCH</li>
		</ul>
	`;

	div.style.padding = "2rem 0";
	div.style.display = "flex";
	div.style.justifyContent = "center";
	div.querySelector("ul").style.display = "flex";
	div.querySelector("ul").style.gap = "1rem";
	div.querySelector("span").style.height = "1rem";
	div.querySelector("span").style.width = "1px";
	div.querySelector("span").style.background = "beige";
	div.querySelector("span").style.margin = "0 2rem";

	div.style.fontSize = ".8rem"

	return section;
}
