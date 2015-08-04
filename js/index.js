//Hover effect on thumbnails
$(".photo-container").hover(
	function() {
		$(this).find("img").css({"opacity":"0.45"});
	},
	function() {
		$(this).find("img").css({"opacity":"1"});
	}
);