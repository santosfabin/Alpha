import header from "./components/header.js";
import routes from "./routes.js";

const root = document.getElementById("root");
const router = routes();

document.addEventListener("onstatechange", e => {
	const path = e.detail.path;
	const page = router.getPage(path);

	history.pushState({}, "", path);

	root.innerHTML = "";
	root.appendChild(header);
	root.appendChild(page);
});

root.appendChild(header);
