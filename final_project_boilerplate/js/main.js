// get started button scroll to next page

$('.get-started').on('click', function () {
    // Type code related to event here! :)
    $('html,body').animate({
    	scrollTop: $('.page-2').offset().top
    	},'slow');
});

// natural language form


// PSEUDO for the transition of the list overlay
// hide ul
// on click of nl-field-toggle
	// if hidden, show ul overlay
	// when user selects option
		// replace the toggle value with new value
		// fade.out ul overlap

$('select').hide();

$('.nl-field-toggle').on('click', function (e) {
    // Type code related to event here! :)
    e.preventDefault();
    $('.nl-field').toggleClass('nl-field-open');
});



