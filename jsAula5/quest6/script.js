const input = document.querySelector("input");
const regex = /[a-zA-Z\sçÇ]/;

input.addEventListener("keydown", function (e) {
	console.log(e.key)

	if (!regex.test(e.key)) {
		e.preventDefault();
	}
});

input.addEventListener("input", function () {
	const character = input.value[input.value.length - 1];

	if(!regex.test(character)) {
		input.value = input.value.replace(character, "")
	}
})
