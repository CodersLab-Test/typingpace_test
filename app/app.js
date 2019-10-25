document.addEventListener("DOMContentLoaded", init);
function init() {
	const wording = ["JavaScript is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.", "While it is most well-known as the scripting language for Web pages, many non-browser environments also use it.", "JavaScript is a prototype-based, multi-paradigm, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles"];
	const message = document.querySelector(".message");
	const playText = document.querySelector("textarea");
	const button = document.querySelector("button");
	button.addEventListener("click", function() {
		console.log(this.innerText);
	})


}