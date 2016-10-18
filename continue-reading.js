jQuery(function($) {

	$(".continueReading--button").on( "click", function() {
		$(".continueReading--hidden").slideToggle();
		$(this).hide();
	});

	var firstWidget = $(".wpb_wrapper").children().first();

	continueReadingMoveAd();

	$(window).on( 'resize', function() {
		continueReadingMoveAd();
	});

	function continueReadingMoveAd() {
		if ( $(document).width() < 768 ) {
			firstWidget.insertAfter('.continueReading--hidden');
		}
		else {
			$(".wpb_wrapper").prepend(firstWidget);	
		}
	}

});
