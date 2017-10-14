var selectedCatagory
$(".CatagoryBox").click(function() {
	if($("#playButton").is(":hidden")) {
		$("#playButton").slideDown();
	}
	selectedCatagory = parseInt(event.target.data("gameId"));
	
})