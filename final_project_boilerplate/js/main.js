// get started button scroll to next page

$('.get-started').on('click', function () {
    // Type code related to event here! :)
    $('html,body').animate({
    	scrollTop: $('.page-2').offset().top
    	},'slow');
});

$('.nl-submit-wrap').on('click', function () {
    // Type code related to event here! :)
    $('html,body').animate({
    	scrollTop: $('.page-3').offset().top
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

$('.nl-field-toggle-2').on('click', function (e) {
    // Type code related to event here! :)
    e.preventDefault();
    $('.nl-field-2').toggleClass('nl-field-open-2');
});

// selection change on.click
// $('.nl-field-toggle').change(function()
	

























