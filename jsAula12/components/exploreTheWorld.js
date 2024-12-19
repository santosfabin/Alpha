import etwci from "./exploreTheWorldContentImages.js";

const obj = [
	{
		city: "Næroyfjorden",
		country: "NORWAY",
		image:
			"https://cdn.sanity.io/images/90kslno9/production/e438e8b1090ea1b631bf17a4acd9783b556b4a65-6975x4655.jpg?rect=456,0,6207,4655&w=1024&h=768&fm=jpg&q=60"
	},
	{
		city: "Antelope Canyoun",
		country: "UNITED STATES",
		image:
			"https://www.visitarizona.com/imager/s3_us-west-1_amazonaws_com/aot-2020/images/AntelopeCanyon_ResizedHeader_bc0d2157d501d4729a3d5631708a6b2e.jpg"
	},
	{
		city: "Grossglockner",
		country: "AUSTRIA",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/3/3c/Grossglockner_road.jpg"
	}
];

export default function () {
	const section = document.createElement("section");
	section.id = "explore";

	section.innerHTML = `
    <div>
      <h2>Explore the World</h2>
      <p>
        We seek provide the most authentic content from athletes, adventurers, explorers and travellers around the world. Our long-term mission is to educate, inspire and enable all peoples to experience & protect wilderness.
      </p>
      <div></div>
			<a href="#" class="seeMore">
				<p>SEE MORE</p>
				<svg xmlns="http://www.w3.org/2000/svg" height="1.3rem" viewBox="0 -960 960 960" width="1.3rem" fill="#376b9b"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
			</a>
    </div>
  `;

	section.style.background = "#0B0B0D";
	section.style.minHeight = "95vh";
	section.style.width = "100%";
	section.style.display = "flex";
	section.style.flexDirection = "column";
	section.style.alignItems = "center";
	section.style.gap = "5rem";
	section.style.padding = "5rem 0";

	const div = section.querySelector("& > div");
	div.style.width = "100%";
	div.style.height = "100%";
	div.style.maxWidth = "1600px";
	div.style.display = "flex";
	div.style.flexDirection = "column";
	div.style.justifyContent = "center";
	div.style.alignItems = "center";
	div.style.paddingTop = "3rem";
	div.style.gap = "1.5rem";
	div.style.textAlign = "center";

	div.querySelector("p").style.maxWidth = "600px";
	div.querySelector("p").style.lineHeight = "2rem";

	obj.forEach(element => {
		section
			.querySelector("div > div")
			.appendChild(etwci(element.city, element.country, element.image));
	});

	section.querySelector("div > div").style.width = "100%";
	section.querySelector("div > div").style.display = "flex";
	section.querySelector("div > div").style.justifyContent = "center";
	section.querySelector("div > div").style.flexWrap = "wrap";
	section.querySelector("div > div").style.gap = "2rem";

	const seeMore = section.querySelector(".seeMore");

	seeMore.style.position = "relative";
	seeMore.style.display = "flex";
	seeMore.style.alignItems = "center";
	seeMore.style.cursor = "pointer";

	seeMore.querySelector("svg").style.position = "absolute";
	seeMore.querySelector("svg").style.left = "100%";
	seeMore.querySelector("svg").style.transition = "left .2s";
	seeMore.querySelector("p").style.color = "#376b9b";
	seeMore.querySelector("p").style.fontSize = ".9rem";
	seeMore.querySelector("p").style.fontWeight = "700";

	seeMore.addEventListener("mouseenter", () => {
		seeMore.querySelector("svg").style.left = "110%";
	});

	seeMore.addEventListener("mouseleave", () => {
		seeMore.querySelector("svg").style.left = "100%";
	});

	return section;
}
