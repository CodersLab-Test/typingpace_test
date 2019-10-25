document.addEventListener("DOMContentLoaded", init);
function init() {
	const wording = ["The open nature of the World Wide Web presents incredible opportunities for people who want to create websites or online applications.", "To take full advantage of the web's capabilities, you need to know how to use them, and this is the reason you have to know JavaScript.", "JavaScript is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.", "While it is most well-known as the scripting language for Web pages, many non-browser environments also use it.", "JavaScript is a prototype-based, multi-paradigm, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles"];
	let startTime, 
		endTime;
	const message = document.querySelector(".message");
	const playText = document.querySelector("textarea");
	const button = document.querySelector("button");
	button.addEventListener("click", function() {
		console.log(this.innerText);
/* After clicking the button 'Start', the text area gets enabled */
		if (this.innerText === "Start") {
			playText.disabled = false;
			playGame();
		}
		else if (this.innerText === "Done") {
			playText.disabled = true;
			button.innerText = "Start";
			endGame();
		}
	})
/* Getting random string from the array 'wording' to type by the user */
	function playGame() {
		let randomNum = Math.floor(Math.random() * wording.length);
/* Changing the content of the 'message' by inserting random string from the array */
		message.innerText = wording[randomNum];
		let date = new Date();
		startTime = date.getTime();
		button.innerText = "Done";
/* After changing the name of the button - its 'innerText' - it does not start the playGame function again */
		console.log(startTime);
	}

	function endGame() {
		let date = new Date();
		endTime = date.getTime();
		let totalTime = ( (endTime - startTime) / 1000);
		/* the division by 1000 to get seconds as a result */
		console.log(totalTime);
		/* for counting the number of words written by user */
		let str = playText.value;

	}




}


