
$("document").ready(function(){
	var selectedCategory
	var duration;

// CategoryBox clicked
$(".CategoryBox").click(function() {
	
	if($("#PlayButton").is(":hidden")) {
		$("#PlayButton").Show();
	}

	selectedCategory = parseInt($(this).data("gameid"));
	
	$(".CategoryBox").css("background-color","#0277bd");
	
	$(this).css("background-color","#58a5f0");
	console.log("click");
	$("#DivButton").css("visibility", "visible");
	$("#timeDiv").css("visibility", "visible");
	
	// putting category in local storage
	localStorage.setItem("category", selectedCategory);

	
});

// Play button clicked
$("#PlayButton").click(function() {	
	duration = document.getElementById("timeInput").value;
	localStorage.setItem("duration", duration);
	
	
	window.location = "PlayGame.html";
	
});



});