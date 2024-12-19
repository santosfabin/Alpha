export default function () {
	const header = document.createElement("header");
	header.innerHTML = `
    <ul>
      <a href="#about"><li>ABOUT</li></a>
      <a href="#explore"><li>EXPLORE</li></a>
      <li>
				<svg xmlns="http://www.w3.org/2000/svg" height="2.5rem" viewBox="0 -960 960 960" width="2.5rem" fill="#e8eaed"><path d="M480-301q99-80 149.5-154T680-594q0-90-56-148t-144-58q-88 0-144 58t-56 148q0 65 50.5 139T480-301Zm0 101Q339-304 269.5-402T200-594q0-125 78-205.5T480-880q124 0 202 80.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM200-80v-80h560v80H200Zm280-520Z"/></svg>
			</li>
      <a href="#journal"><li>JOURNAL</li></a>
      <li class="flex"><svg xmlns="http://www.w3.org/2000/svg" height="1.3rem" viewBox="0 -960 960 960" width="1.3rem" fill="#e8eaed"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg> SEARCH</li>
    </ul>
  `;

	header.querySelector("ul").style.listStyle = "none";
	header.querySelector("ul").style.display = "flex";
	header.querySelector("ul").style.justifyContent = "space-evenly";
	header.querySelector("ul").style.alignItems = "center";
	header.querySelector("ul").style.width = "100%";
	header.querySelector(".flex").style.display = "flex";
	header.querySelector(".flex").style.alignItems = "center";
	header.querySelector(".flex").style.gap = ".3rem";

	header.style.padding = "2rem";
	header.style.width = "100%";
	header.style.maxWidth = "1200px";
	header.style.position = "absolute";

	return header;
}
