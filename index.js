//Hover effect on thumbnails

$(".photo-container").hover(
	function() {
		var d = $(this).find("img").attr("description");
		$(this).find("img").css({"opacity":"0.4"});
		$(this).find("img").css({"border":"3px solid #E697A2", "border-opacity":"1"});
	},
	function() {
		$(this).find("img").css({"opacity":"1"});
		$(this).find("img").css({"border":"none"});
	}
);