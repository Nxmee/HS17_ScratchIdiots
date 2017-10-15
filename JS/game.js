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
	
	// retrieve selected category from local
	var selectedCategory = localStorage.getItem("category");
	console.log("Selected category is " + selectedCategory);
	var duration = localStorage.getItem("duration");
	console.log("Duration: " + duration);

	// Don't know what this does (but think it's necessary)
$("document").ready(function(){
	console.log("document loaded")


	$('#userBox').keypress(function(e){
    if ( e.which == 13 ) // Enter key = keycode 13
    {
    	//submitAnswer();
    	//restartClock();
        return false;
    }
});
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
		console.log("game over");
		$('#nameBox').show();
		$('#ScoreScore').val(score.toString());
		$('#ScoreTime').val(((5 * duration) - 5).toString());
		$('#ScoreCategory').val(selectedCategory.toString());
		$('.hideable').hide();
	}

	document.getElementById('userBox').value = '';
};

$("#StartButton").click(function(){
	nextWord(selectedCategory, randomNum, round);
	
	createClock(duration);
});

// Enter button pressed
$("#EnterButton").click(function(){
	$('#SubmitForm').submit();
	window.location = "PlayGame.html";
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