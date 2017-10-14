
$("document").ready(function(){
	var selectedCategory
$(".CategoryBox").click(function() {
	
	if($("#PlayButton").is(":hidden")) {
		$("#PlayButton").Show();
	}

	selectedCategory = parseInt($(this).data("gameid"));
	$(".CategoryBox").css("background-color","#0277bd");
	$(this).css("background-color","#58a5f0");
	console.log("click");

});

$("#PlayButton").click(function() {
	
	alert("OHHHH HES DONE IT AGAIN!");
	/*
	selectedCategory = parseInt($(this).data("gameid"));
	$(".CategoryBox").css("background-color","turquoise");
	$(this).css("background-color","green");
	console.log("click");*/
});


});