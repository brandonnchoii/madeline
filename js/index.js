//hover effect on thumbnails
$(".photo-container").hover(
	function() {
		$(this).find("img").css({"opacity":"0.45"});
	},
	function() {
		$(this).find("img").css({"opacity":"1"});
	}
);


//fade in effect
//TODO move to global js file
function fadeIn(identifier, time) {
	$(identifier).fadeIn(time)
}

fadeIn("body", 1500);