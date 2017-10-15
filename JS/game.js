// dictionary.categories[selectedCategory].title

function getCook(cookiename) 
	  {
	  // Get name followed by anything except a semicolon
	  var cookiestring=RegExp(""+cookiename+"[^;]+").exec(document.cookie);
	  // Return everything after the equal sign, or an empty string if the cookie name not found
	  return unescape(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./,"") : "");
	  }
	
	
	var array = ranNum();
	//console.log(array[0] + array[1] + array[2] + array[3]);
	var index = 0;
	var randomNum = array[0];
	var score = 0;
	var round = 0;
	
	// retrieve selected category from local storage
	var selectedCategory = localStorage.getItem("category");
	console.log("Selected category is " + selectedCategory);
	var duration = localStorage.getItem("duration");
	console.log("Duration: " + duration);

	// Don't know what this does (but think it's necessary)
$("document").ready(function(){
	console.log("document loaded")
	document.getElementById('playerName').value = getCook('Name');	

function restartClock(){
	//$('#timer').pietimer.seconds = 10;
	$('#timer').pietimer('start');
}


var overallDuration = 0;
function submitAnswer(){	
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
		endgame(selectedCategory, score);
	}

	document.getElementById('userBox').value = '';

	
};

// Start button pressed
$("#StartButton").click(function(){
	nextWord(selectedCategory, randomNum, round);
	
	createClock(duration);
});


// Makes timer exist
function createClock(duration){
$('#timer').pietimer({
seconds: duration,
color: 'rgba(0,0,0,0.8)',
height:100,
width: 100,
},


function(){
	submitAnswer();
	
	if (duration >= 4.5){
		duration = duration - 0.5;
	}
	if (round != 5){
	createClock(duration);	
	}
})

$('#timer').pietimer('start');
};




$("#EnterButton").click(function(){
	if (document.getElementById('playerName').value != ""){
		document.cookie = ("Name = " + document.getElementById('playerName').value);
	}
});

});