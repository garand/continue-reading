jQuery(function($) {

	$(".continueReading--button").on( "click", function() {
		$(".continueReading--hidden").slideToggle();
		$(this).parent().remove();
	});

	var firstWidget = $(".td-ss-main-sidebar").children().first();

	continueReadingMoveAd();

	$(window).on( 'resize', function() {
		continueReadingMoveAd();
	});

	function continueReadingMoveAd() {
		if ( $(document).width() < 768 ) {
			firstWidget.insertAfter('.continueReading--hidden');
		}
		else {
			$(".td-ss-main-sidebar").prepend(firstWidget);	
		}
	}

});
