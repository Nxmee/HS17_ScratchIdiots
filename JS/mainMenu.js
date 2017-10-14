
$("document").ready(function(){
	var selectedCategory
$(".CategoryBox").click(function() {
	
	if($("#play").is(":hidden")) {
		$("#play").slideDown();
	}

	selectedCategory = parseInt($(this).data("gameid"));
	$(".CategoryBox").css("background-color","turquoise");
	$(this).css("background-color","green");
	console.log("click");
});
});