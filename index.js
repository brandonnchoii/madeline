/* hover effect with text overlay for thumbanils */
$(".thumbnail-photo").hover(
	//hover effect
	function() {
		$(this).css("opacity: 0.7");
	},

	//unhoever effect
	function() {
		$(this).css("opacity: 1");
	}
);