    $('#madness').keydown(function (event) {
    var keypressed = event.keyCode || event.which;
    if (keypressed == 13) {
    alert("It works:D");
    //add code n shit here for what should happen on keypress
    //$(this).closest('form').submit(); this was copy and pasted idk if it is useful
    }
});