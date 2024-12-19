import theJournalContentImages from "./theJournalContentImages.js";
const obj = [
	{
		date: "MAY 30, 2017",
		title: "An Unforgettable",
		description:
			"If you only have one day to visit Yosemite National Park and you want to make the most out of it.",
		image:
			"https://incadventures.com/wp-content/uploads/2023/10/autumn-in-yosemite-2021-12-09-20-20-09-utc-1024x683.jpg"
	},
	{
		date: "MAY 28, 2017",
		title: "Symphonies in Steel",
		description:
			"Crossing the Golden Gate Bridge from San Francisco, you arrive in Marin even before landing on slid ground.",
		image:
			"https://www.visiteosusa.com.br/sites/default/files/styles/16_9_1280x720/public/images/hero_media_image/2017-05/23b0b0b9caaa07ee409b693da9bf9003.jpeg?h=999fdb2a&itok=pyJqAs9V"
	}
];

export default function () {
	const section = document.createElement("section");

	section.id = "journal";

	section.style.background = "#0B0B0D";
	section.style.minHeight = "80vh";
	section.style.width = "100%";
	section.style.padding = "3rem 0";
	section.style.display = "flex";
	section.style.justifyContent = "center";

	section.innerHTML = `
    <div class="container">
      <h2>The Journal</h2>
      <p>Our favorite about public lands and opportunities for you to get involved in protecting your outdoor experiences.</p>
      <div>
      </div>
			<a href="#" class="seeMore">
				<p>ALL POSTS</p>
				<svg xmlns="http://www.w3.org/2000/svg" height="1.3rem" viewBox="0 -960 960 960" width="1.3rem" fill="#376b9b"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
			</a>
    </div>
  `;

	section.querySelector("p").style.maxWidth = "500px";
	section.querySelector("p").style.textAlign = "center";
	const container = section.querySelector(".container");

	container.style.width = "100%";
	container.style.maxWidth = "1600px";
	container.style.display = "flex";
	container.style.flexDirection = "column";
	container.style.alignItems = "center";
	container.style.gap = "2rem";
	container.style.lineHeight = "2rem";

	obj.forEach(element => {
		container
			.querySelector("div > div")
			.appendChild(
				theJournalContentImages(
					element.date,
					element.title,
					element.description,
					element.image
				)
			);
	});

	container.querySelector("div > div").style.display = "flex";
	container.querySelector("div > div").style.justifyContent = "center";
	container.querySelector("div > div").style.gap = "3rem";
	container.querySelector("div > div").style.flexWrap = "wrap";

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
