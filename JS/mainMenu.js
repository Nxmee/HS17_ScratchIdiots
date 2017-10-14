
$("document").ready(function(){
	var selectedCategory

// CategoryBox clicked
$(".CategoryBox").click(function() {
	
	if($("#PlayButton").is(":hidden")) {
		$("#PlayButton").Show();
	}

	selectedCategory = parseInt($(this).data("gameid"));
	$(".CategoryBox").css("background-color","#0277bd");
	$(this).css("background-color","#58a5f0");
	console.log("click");

});

// Play button clicked
$("#PlayButton").click(function() {	
	
	window.location = "PlayGame.html";	
	playGame(selectedCategory);
	
});



});