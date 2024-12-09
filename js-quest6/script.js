const input = document.querySelector("input");
const regex = /[a-zA-Z\sçÇ]/;

input.addEventListener("keydown", function (e) {
	if (!regex.test(e.key)) {
		e.preventDefault();
	}
	if (e.key == "Dead") {
		e.preventDefault();
		console.log(e);
	}
});

input.addEventListener("input", function () {
	const character = input.value[input.value.length - 1];

	if(!regex.test(character)) {
		input.value = input.value.replace(character, "")
	}
})
