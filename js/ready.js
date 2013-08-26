
$(document).ready(function() {

var userName = $('.user .user-name .name');
userName.html(userName.html() + '&nbsp;');

// -------------------------------- MASONRY

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

// ---------------------------------- LOGO

var logo = $('#logo')
var show = $('#logo .show-logo');
show.on('click', function (){
	if(!logo.hasClass('visible')){
		$(this).parent().addClass('visible');
	} else {
		$(this).parent().removeClass('visible');
	}
});

// -------------------------------TOP-MENU FILTERS

var filter = $('#dropdown-filters .filter-item');
filter.on('click', function (){
	if(!$(this).hasClass('active')){
		filter.removeClass('active');
		$(this).addClass('active');
	} else {
		$(this).removeClass('active');
	}
});

// ------------------------------- ON SCROLL

var nav = $('.header-main_menu');
var userInfo = $('.user');
var headerTop = $('#main_header .header-top');

$(window).scroll(function () {
	if ( $(this).scrollTop() > 50) {
		nav.addClass("fixed");
		userInfo.appendTo(nav);
	} else {
		nav.removeClass("fixed");
		userInfo.appendTo(headerTop);
	}
});
// -------------------------------- CITY SELECT

var select = $('.city-select');
select.on('click',function(){
	if (!select.hasClass('opened')) {
		select.addClass('opened');
	} else {
		select.removeClass('opened');
	}; 
});

});

//------------------------------------ SHOW BUTTONS
var showControlPanel = $('button.show.user-control_panel');
var controlPanel = $('.user-control_list');
var showFilter = $('button.show.filters');
var filters = $('#dropdown-filters');


showFilter.on('click',function(){
	if(!filters.hasClass('visible')){
		filters.addClass('visible');
	} else {
		filters.removeClass('visible');
	};
});
showControlPanel.on('click',function(){
	if(!controlPanel.hasClass('visible')){
		controlPanel.addClass('visible');
	} else {
		controlPanel.removeClass('visible');
	};
});





