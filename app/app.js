document.addEventListener("DOMContentLoaded", init);
function init() {
	
	let startTime, 
		endTime;
	const message = document.querySelector(".message"); 	// text for typing area (and the result message)
	const playText = document.querySelector("textarea"); 	// typing area
	const button = document.querySelector("#startTest"); 	// Start/Done button 
	let text = "";											// empty string for randomly generated text
	
	button.addEventListener("click", function() {
/* After clicking the button 'Start', the text area gets enabled */
		if (this.innerText === "Start") {
			playText.disabled = false;
			playText.value = ""; // clearing textarea for typing again and again
			text = ""; 			// randomly generated string made empty (and ready for new value)
			randomTextGen(30);	// run function
			playGame();			// run function
		}
		else if (this.innerText === "Done") {
			playText.disabled = true;
			button.innerText = "Start"; 	// changing the name of the button
			endGame();						// run function
		}
	});
/* F. randomly generating text for typing */
	function randomTextGen(numOfWords) {
	// let's declare the content of the text (set of words)
	    let wordsArray = "agawa,a,a,aromat,awaria,adaptuj się,aż,aby,albo,ale,akacja,adaptowany,amorficzny,amelinium,anormalny,aktywuj się,alarmuj,beta-test,buk,banda,cieciorka,cały czas,coś,celuj,cofaj,cumuj,dom,dobrze,drzewo,embrion,elegancja,emanuje,elewacja,emulsja,eliksir,ekonimista,elektronika,ekler,fuga,fanaberia,fatamorgana,gra,gdy,gamoń,gryzoń,gbur,hulaj,hamulec,imię,idiota,inspiruj się,i,i,idź,igła,ikona,ignoruj,nie ingeruj,indyk,instalator,jagnię,jutro,jasny,kwitnie,kra,krowa,kolumna,lalka,lub,lump,lina,monitor,mimowolnie,mmniej,nie,nie,naczelnik,numerolog,nadzieja,niespodzianka,naklejka,oddział,opona,okno,otwieracz,obieraj,otwieraj,ortopeda,oglądaj,ogarniać,odgrzewaj,prywata,peron,popiel,pilnuj ternimów,rozgałęźnik,ruszaj,racja,ranga,róg,spacja,startuj,syp,synekura,szukaj rozwiązań,zegar tyka,truje,tor,traktuj poważnie,uwaga,unieruchamia,ucho,walcz mężnie,waga,wiruj,wał,więcej,zamknij,zakaz,zez,zobacz,zaraz,że".split(",");

	    for (let i = 0; i < numOfWords; i++) {
	        let rand = null; 
	// let's declare the index number for the wordsArray...
	        rand = Math.floor(Math.random() * wordsArray.length); // returns a number
	// ...and add the words with those indices to the text
	        text += wordsArray[rand]; 
	/* after each word - till the one before the last one - add a space, and... */
	        if (i < numOfWords - 1) {
	            text += " ";
	        }
	/* ...after reaching the declared length of the text (the last word), add a fullstop */
	        else {
	            text += ".";
	        }
	    }
	    return text;
	}

	function playGame() {
/* Changing the content of the 'message' by inserting random string from the array */	
		message.innerText = text; 		// let's put the generated text to the 'message' area
		let date = new Date();			// checking the current time
		startTime = date.getTime();
		button.innerText = "Done"; 		// changing the name of the button
	/* After changing the name of the button - its 'innerText' - it does not start the playGame function again */
	}

	function endGame() {
		let date = new Date(); 			// checking the current time
		endTime = date.getTime();
		let totalTime = ( (endTime - startTime) / 1000); // counting the typing pace
	/* The division by 1000 to get seconds as a result */

	/* Counting the number of words written by user and letting they know about the result */
		let str = playText.value;
		let wordCount = wordCounter(str);
		let speed = Math.round((wordCount / totalTime) * 60);
		let userFeedback = `You typed at ${speed} words per minute.`;
		
		userFeedback += "<br>" + compareWords(message.innerText, str);
		message.innerHTML = userFeedback;
	}

	function wordCounter(strWords) {
		let response = strWords.split(" ").length;
		return response;
	}
/* Accurate checking the user's result by comparing the words written in the textarea 
and the text got from the generator */
	function compareWords(str1, str2) {
		let words1 = str1.split(" ");
		let words2 = str2.split(" ");
		let counter = 0;
		words1.forEach( function(item, index) {
			if (item === words2[index]) {
				counter++;
			}
		});
		return (counter + " words correct out of " + words1.length + ".");
	}

}


