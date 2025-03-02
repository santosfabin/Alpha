// const path = require('path');

const content = document.getElementById("content");
const nameFunction = document.getElementById("name");
const result = document.getElementById("result");

content.addEventListener("click", () => {
	fetch("http://localhost:3000/content")
		.then(data => {
			return data.json();
		})
		.then(resul => {
			console.log(resul);
			result.innerText = resul;
		});
});

nameFunction.addEventListener("click", () => {
	fetch("http://localhost:3000/nameFunction")
		.then(data => {
			return data.json();
		})
		.then(resul => {
			result.innerText = resul;
		});
});
