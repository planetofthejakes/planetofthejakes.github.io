
// natural language form variables (JS) for ul selection process
var genre = document.getElementById('genre'),
	genreSelect = document.getElementById('genre-select'),
	length = document.getElementById('length'),
	lengthSelect = document.getElementById('length-select');


// get started button scroll to page-2

$('.get-started').on('click', function () {
    // Type code related to event here! :)
    // on button click, animate the page down and scroll to top of page-2, slow speed
    $('html,body').animate({
    	scrollTop: $('.page-2').offset().top
    	},700);
});

// $('.genre-list li').on('click', function(e) {
//	e.preventDefault();
//	alert('Click');
//}

// NATURAL LANGUAGE FORM BELOW

// hide select class, create path to find value below
$('select').hide();

// toggle ul on click
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

$('.genre-list li').on('click', function (e, el) {
	e.preventDefault();
	// JS to target and change HTML text in genre list
	var genreText = e.target.innerHTML,
		// index returns the index position of specified elements relative to other specified elements
		index = $('.genre-list li').index(this);
	// 	get index value of genre selection and change selected HTML text field
	genre.innerHTML = genreText;
	genreSelect.getElementsByTagName('option')[index + 1].selected = true;
	// toggle off ul on selection of li item
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

// FIND MOVIE button from page-2 to page-3
$('.nl-submit-wrap').on('click', function () {
    // Type code related to event here! :)
    $('html,body').animate({
    	scrollTop: $('.page-3').offset().top
    	},700);
    // hide gif that comes up if user clicks .nic-cage button
    $('.nic-gif, p').hide();
});


// FILM SELECTION 


$('.page-3').hide();
$('.con-air').hide();
$('.national-treasure').hide();

$('.nl-submit').on('click', function(e) {
	e.preventDefault();
// attempt number 2
	// var value = $('option').val();
	// find value of genre li item and length li item
	var selectedGenre = $('#genre-select').val(),
		selectedLength = $('#length-select').val();

// attempt number 1 
	// if (value === 1) {
	// 	$('.page-3, .con-air').show();
	// } else {
	// 	$('.page-3, .con-air').hide();
	// }

	// if (value > 1) {
	// 	$('.page-3, .national-treasure').show();
	// } else {
	// 	$('.page-3, .national-treasure').hide();
	// }

	// if genre value is 1 and length value is 1 then show con-air, else national treasure
	// need "" around number so value and number can equal each other
	if (selectedGenre === "1" && selectedLength === "1") {
		$('.page-3, .con-air').show();
	} else {
		$('.page-3, .national-treasure').show();
	}

});


// .page-3 button actions

// hide gif and giphy p text
$('.nic-gif').hide();
$('p').hide();

$('.new-movie').on('click', function () {
    // Type code related to event here! :)
    // on button click scoll back up to top of page 2 and hide page 3
    $('html,body').animate({
    	scrollTop: $('.page-2').offset().top
    	},700);
    $('.page-3').hide();
});

$('.nic-cage').on('click', function () {
    // Type code related to event here! :)
    // on button click scoll back up to top of page 2 and hide page 3
    // show gif and p text 
    $('html,body').animate({
    	scrollTop: $('.page-2').offset().top
    	},700);
    $('.page-3').hide();
    $('.nic-gif, p').show();
});


// hidden nic cage gif on .page-2






















