
$("document").ready(function(){
	var selectedCategory
$(".CategoryBox").click(function() {
	
	if($("#play").is(":hidden")) {
		$("#play").slideDown();
	}

	selectedCategory = parseInt($(this).data("gameid"));
	$(".CategoryBox").css("background-color","#0277bd");
	$(this).css("background-color","#58a5f0");
	console.log("click");
});
});