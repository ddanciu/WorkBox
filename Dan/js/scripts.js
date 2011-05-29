
$(function() {
	$(".post-body img").load(function() {
		$(this).width( $(this).width() > 400 ? 400 : $(this).width());
	});
});
