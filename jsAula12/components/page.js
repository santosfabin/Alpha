import header from "./header.js";
import outdoor from "./outdoor.js";
import exploreTheWorld from "./exploreTheWorld.js";
import theJournal from "./theJournal.js";
import footer from "./footer.js";

const section = document.createElement("section");

section.appendChild(header());
section.appendChild(outdoor());
section.appendChild(exploreTheWorld());
section.appendChild(theJournal());
section.appendChild(footer());

section.style.width = "100%";
section.style.display = "flex"
section.style.flexDirection = "column"
section.style.alignItems = "center"

export default section;
