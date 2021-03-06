function nextWord(selectedCategory, index, round){
var dictionary =
	{
		categories: [
		{ // 0
			title:"Shakespeare's plays",
			difficulty:1,
			names:[
				"Romeo and Juliet",
				"A midsummer nights dream",
				"Hamlet",
				"Macbeth",
				"King Lear",
				"The Taming of the Shrew",
				"Much Ado About Nothing",
				"As You Like It",
				"The Merchant of Venice",
				"Antony and Cleopatra"
			]
		},
		{	// 1
			title:"Makes of car",
			difficulty:1,
			names:[
				"Alfa Romeo",
				"Aston Martin",
				"Lamborghini",
				"Rolls-Royce",
				"Vauxhall",
				"Volkswagen",
				"Mercedes",
				"Jaguar",
				"Land Rover",
				"Tesla"
			]
		},
		{ 	// 2
			title:"Brands of phone",
			difficulty:2,
			names:[
				"OnePlus",
				"Apple",
				"Samsung",
				"Sony",
				"Blackberry",
				"Wileyfox",
				"Nokia",
				"Huawei"	,
				"Motorola",
				"Google"
			]
		},
		{	// 3
			title:"Works by Charles Dickens",
			difficulty:3,
			names:[
				"The Pickwick Papers",
				"Oliver Twist",
				"Nicholas Nickleby",
				"David Copperfield",
				"The Old Curiosity Shop",
				"A Christmas Carol",
				"A Tale of Two Cities",
				"Great Expectations",
				"Barnaby Rudge",
				"The Pickwick Papers"
			]
		},
		{	// 4
			title:"Astronomical Phenomena",
			difficulty:2,
			names:[
				"Constellation",
				"Supernova",
				"Black Hole",
				"The Big Bang",
				"Meteor Shower",
				"Pulsar",
				"Solar Eclipse",
				"Asteroid",
				"Winter solstice",
				"Supermoon"
			]
		},
		{	// 5
			title:"Football Teams",
			difficulty:3,
			names:[
				"Chelsea",
				"Manchester United",
				"Átletico Madrid",
				"FC Barcelona",
				"Real Madrid",
				"Paris Saint Germain",
				"Sheffield Wednesday",
				"FC Bayern Munich",
				"Crystal Palace",
				"Juventus",
				"Inter Milan"
			]
		},
		{	// 6
			title:"Superheroes",
			difficulty:3,
			names:[
				"Captain America",
				"Iron Man",
				"Black Widow",
				"The Hulk",
				"Hawkeye",
				"The Flash",
				"Green Arrow",
				"Firestorm",
				"Black Canary",
				"Heat Wave",
				"Captain Cold"
			]
		},
		{	// 7
			title:"Movie quotes",
			difficulty:3,
			"names":[
				"I'll be back",
				"Frankly, my dear, I don't give a damn",
				"I'm gonna make him an offer he can't refuse",
				"ET phone home",
				"Here's looking at you, kid",
				"Go ahead, make my day",
				"There's no place like home",
				"You can't handle the truth",
				"You're gonna need a bigger boat",
				"Show me the money",
				"Houston, we have a problem"
			]
		},
		{	// 8
			title:"Songs",
			difficulty:1,
			names:[
				"Take On Me",
				"Billy Jean",
				"Every Breath You Take",
				"Livin' on a Prayer",
				"Pour Some Sugar On Me",
				"Another One Bites The Dust",
				"You Spin Me Round",
				"Total Eclipse of the Heart",
				"Eye of the Tiger",
				"Sweet Child O Mine",
				"I Wanna Dance With Somebody",
				"Under Pressure",
				"Papa Don't Preach",
				"Karma Chameleon"
			]
		}
		
	]
	}

	
	
// Set variables
var categoryName = dictionary.categories[selectedCategory].title;
console.log("Category name:	" + categoryName);
var currentName = dictionary.categories[selectedCategory].names[index];
console.log("Current name:	" + currentName);
var jumbled = convert(currentName);
console.log("Jumbled:	" + jumbled);

// Set labels
$("#Hint").html(jumbled);
$("#category").html(categoryName);
$("#round").html("Round: " + (round + 1));

}

function checkInput(selectedCategory, index, score){
	var userInput = document.getElementsByName('userInput')[0].value;
	console.log("User Input:	" + userInput);
	var dictionary =
	{
		categories: [
		{ // 0
			title:"Shakespeare's plays",
			difficulty:1,
			names:[
				"Romeo and Juliet",
				"A midsummer nights dream",
				"Hamlet",
				"Macbeth",
				"King Lear",
				"The Taming of the Shrew",
				"Much Ado About Nothing",
				"As You Like It",
				"The Merchant of Venice",
				"Antony and Cleopatra"
			]
		},
		{	// 1
			title:"Makes of car",
			difficulty:1,
			names:[
				"Alfa Romeo",
				"Aston Martin",
				"Lamborghini",
				"Rolls-Royce",
				"Vauxhall",
				"Volkswagen",
				"Mercedes",
				"Jaguar",
				"Land Rover",
				"Tesla"
			]
		},
		{ 	// 2
			title:"Brands of phone",
			difficulty:2,
			names:[
				"OnePlus",
				"Apple",
				"Samsung",
				"Sony",
				"Blackberry",
				"Wileyfox",
				"Nokia",
				"Huawei"	,
				"Motorola",
				"Google"
			]
		},
		{	// 3
			title:"Works by Charles Dickens",
			difficulty:3,
			names:[
				"The Pickwick Papers",
				"Oliver Twist",
				"Nicholas Nickleby",
				"David Copperfield",
				"The Old Curiosity Shop",
				"A Christmas Carol",
				"A Tale of Two Cities",
				"Great Expectations",
				"Barnaby Rudge",
				"The Pickwick Papers"
			]
		},
		{	// 4
			title:"Astronomical Phenomena",
			difficulty:2,
			names:[
				"Constellation",
				"Supernova",
				"Black Hole",
				"The Big Bang",
				"Meteor Shower",
				"Pulsar",
				"Solar Eclipse",
				"Asteroid",
				"Winter solstice",
				"Supermoon"
			]
		},
		{	// 5
			title:"Football Teams",
			difficulty:3,
			names:[
				"Chelsea",
				"Manchester United",
				"Átletico Madrid",
				"FC Barcelona",
				"Real Madrid",
				"Paris Saint Germain",
				"Sheffield Wednesday",
				"FC Bayern Munich",
				"Crystal Palace",
				"Juventus",
				"Inter Milan"
			]
		},
		{	// 6
			title:"Superheroes",
			difficulty:3,
			names:[
				"Captain America",
				"Iron Man",
				"Black Widow",
				"The Hulk",
				"Hawkeye",
				"The Flash",
				"Green Arrow",
				"Firestorm",
				"Black Canary",
				"Heat Wave",
				"Captain Cold"
			]
		},
		{	// 7
			title:"Movie quotes",
			difficulty:3,
			"names":[
				"I'll be back",
				"Frankly, my dear, I don't give a damn",
				"I'm gonna make him an offer he can't refuse",
				"ET phone home",
				"Here's looking at you, kid",
				"Go ahead, make my day",
				"There's no place like home",
				"You can't handle the truth",
				"You're gonna need a bigger boat",
				"Show me the money",
				"Houston, we have a problem"
			]
		},
		{	// 8
			title:"Songs",
			difficulty:1,
			names:[
				"Take On Me",
				"Billy Jean",
				"Every Breath You Take",
				"Livin' on a Prayer",
				"Pour Some Sugar On Me",
				"Another One Bites The Dust",
				"You Spin Me Round",
				"Total Eclipse of the Heart",
				"Eye of the Tiger",
				"Sweet Child O Mine",
				"I Wanna Dance With Somebody",
				"Under Pressure",
				"Papa Don't Preach",
				"Karma Chameleon"
			]
		}		
	]
	
	}
	
	var correctAnswer = dictionary.categories[selectedCategory].names[index];
	console.log("Correct answer:	"  + correctAnswer);

	if (userInput.toLowerCase() == correctAnswer.toLowerCase()){
		score++;
		$("#status").html("Correct! Your score is:	" + score);
		console.log("Correct answer!");
	}
	else{
		console.log("Incorrect - sorry!");
		$("#status").html("Incorrect!");
	}
	return score;
	
}