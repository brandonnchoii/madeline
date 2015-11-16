/* toggle effects for change in picture */
$("#young").click(function() {
	changePhoto("maddie-young.jpg");
});

$("#old").click(function() {
	changePhoto("maddie-current.jpg");
});

/* fade out & fade in with new photo */
function changePhoto(path) {
	var time = 500;
	$("#profile-picture").fadeOut(time, function () {
		$("#profile-picture").attr("src",path);
		$("#profile-picture").fadeIn(time*3.5);
	});
}