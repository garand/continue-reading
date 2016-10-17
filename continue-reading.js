jQuery(function($) {

	$(".continueReading--button").on( "click", function() {
		$(".continueReading--hidden").slideToggle();
		$(this).hide();
	});

	var firstWidget = $(".sidebar").children().first();

	continueReadingMoveAd();

	$(window).on( 'resize', function() {
		continueReadingMoveAd();
	});

	function continueReadingMoveAd() {
		if ( $(document).width() < 768 ) {
			$(".entry-content").append(firstWidget);	
		}
		else {
			$(".sidebar").prepend(firstWidget);	
		}
	}

});
