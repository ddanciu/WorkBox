
$(function() {
	
	
	window.setTimeout(function() {
        $(&#39;body&#39;).removeClass(&#39;loading&#39;);
    }, 10);
	
	$(".post-body img").load(function() {
		$(this).width( $(this).width() > 400 ? 400 : $(this).width());
	});
});
