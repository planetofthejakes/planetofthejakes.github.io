
var genre = document.getElementById('genre'),
	genreSelect = document.getElementById('genre-select'),
	length = document.getElementById('length'),
	lengthSelect = document.getElementById('length-select');



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

// $('.genre-list li').on('click', function(e) {
//	e.preventDefault();
//	alert('Click');
//}

// natural language form


// PSEUDO for the transition of the list overlay
// hide ul
// on click of nl-field-toggle
	// if hidden, show ul overlay
	// when user selects option
		// replace the toggle value with new value
		// fade.out ul overlap

// $('select').hide();

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

// 

$('.genre-list li').on('click', function (e, el) {
	e.preventDefault();
	var genreText = e.target.innerHTML,
		index = $('.genre-list li').index(this);

	genre.innerHTML = genreText;
	genreSelect.getElementsByTagName('option')[index + 1].selected = true;

	$('.nl-field').toggleClass('nl-field-open');
	console.log($('#genre-select').val());
})

$('.length-list li').on('click', function (e, el) {
	e.preventDefault();
	var lengthText = e.target.innerHTML,
		index = $('.length-list li').index(this);

	length.innerHTML = lengthText;
	lengthSelect.getElementsByTagName('option')[index + 1].selected = true;

	$('.nl-field-2').toggleClass('nl-field-open-2');
	console.log($('#length-select').val());
})


// selection change on.click

// $('.nl-field-toggle').change(function() {


// }

// $('li').on('click', function () {
// 	$('a.nl-field-toggle').replaceWith('selection')
// }

// $('#genre option:selected').text();

























