// dictionary.categories[selectedCategory].title

function playGame(selectedCategory)
{
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
				"Huawei",
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
	
	
}


	var array = ranNum();
	var index = 0;
	var randomNum = array[0];
	var score = 0;
	var round = 0;
	
	// retrieve selected category from local storage
	//var selectedCategory = localStorage["category"];
	var loadedJSON = $.getJSON( "./JSON/TestData.json");
	var selectedCategory = loadedJSON.categories;
	

function getCook(cookiename) 
	  {
	  // Get name followed by anything except a semicolon
	  var cookiestring=RegExp(""+cookiename+"[^;]+").exec(document.cookie);
	  // Return everything after the equal sign, or an empty string if the cookie name not found
	  return unescape(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./,"") : "");
	  }

	// Don't know what this does (but think it's necessary)
$("document").ready(function(){

	var selectedCategory
	document.getElementById('playerName').value = getCook('Name');

	// Submit button pressed
$("#SubmitAnswer").click(function(){	
	if (round < 5)
	{
		
	score = checkInput(selectedCategory, randomNum, score);
	index++;
	console.log("Index:	" + index);
	randomNum = array[index];		
	round++;
	nextWord(selectedCategory, randomNum, round); 
	}
	else
	{
		// ==== Code for end goes here ====
	}
});

// Start button pressed
$("#StartButton").click(function(){
	nextWord(selectedCategory, randomNum, round);
	
});

$("#EnterButton").click(function(){
	if (document.getElementById('playerName').value != ""){
		document.cookie = ("Name = " + document.getElementById('playerName').value);
	}
	
});


});