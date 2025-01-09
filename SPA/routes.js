import principal from "./components/principal.js";
import brigadeiros from "./components/brigadeiros.js";
import cupcakes from "./components/cupcakes.js";
import doces from "./components/doces.js";

export default function () {
	return {
		"/": principal,
		"/brigadeiros": brigadeiros,
		"/cupcakes": cupcakes,
		"/doces": doces,
		getPage(path) {
			return this[path] ? this[path]() : `<h1>404 - Page Not Found</h1>`;
		}
	};
}
