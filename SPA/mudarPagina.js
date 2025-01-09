const mudarPagina = path => {
	const event = new CustomEvent("onstatechange", {
		detail: { path }
		// detail: { path: path }
	});
	document.dispatchEvent(event);
};

export default mudarPagina;
