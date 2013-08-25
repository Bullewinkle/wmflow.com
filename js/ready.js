$(document).ready(function() {

	var container = document.querySelector('#container');
	var msnry;
// initialize Masonry after all images have loaded
imagesLoaded( container, function() {
	msnry = new Masonry( container, {
  // options
  
  "isFitWidth": true,
  itemSelector: '.block'
} );
});

$(".chosen-select-no-single").chosen();
$(".chosen-select-no-single").chosen({disable_search_threshold: 10});

var logo = $('#logo')
var show = $('#logo .show');
show.on('click', function (){
	if(!logo.hasClass('visible')){
		$(this).parent().addClass('visible');
	} else {
		$(this).parent().removeClass('visible');
	}
});

var filter = $('#dropdown-filters .filter-item');
filter.on('click', function (){
	if(!$(this).hasClass('active')){
		filter.removeClass('active');
		$(this).addClass('active');
	} else {
		$(this).removeClass('active');
	}
});

var nav = $('.header-main_menu');

$(window).scroll(function () {
	if ( $(this).scrollTop() > 50) {
		nav.addClass("fixed");
	} else {
		nav.removeClass("fixed");
	}
});

var select = $('.city-select');
select.on('click',function(){
	if (!select.hasClass('opened')) {
		select.addClass('opened');
	} else {
		select.removeClass('opened');
	}; 
});

});

