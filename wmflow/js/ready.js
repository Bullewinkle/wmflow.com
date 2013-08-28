
$(document).ready(function() {
	var scroller = $('.mCSB_dragger');
	var body = $('body');
	body.mCustomScrollbar({
		callbacks: {
			onScrollStart: function () {
				scroller.addClass('visible');
				console.log('add');
			},
			onScroll: function () {
				scroller.removeClass('visible');
				console.log('rmv');
			},
		},
	});




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
var showLogo = $('.show.logo');
showLogo.on('click', function (){
	if(!logo.hasClass('visible')){
		logo.addClass('visible');
		showLogo.addClass('opened');
	} else {
		logo.removeClass('visible');
		showLogo.removeClass('opened');
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
var csb = $('.mCSB_container');

$(window).scroll(function () {
	if ( csb.offset().top > 50) {
		alert('dfvd')
		nav.addClass("fixed");
		userInfo.appendTo(nav);
	} else {
		nav.removeClass("fixed");
		if ($(window).width() > 767) {	
			userInfo.appendTo(headerTop);
		};
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

//------------------------------------ SHOW BUTTONS
var showControlPanel = $('button.show.user-control_panel');
var controlPanel = $('.user-control_list');
var showFilter = $('button.show.filters');
var filters = $('#dropdown-filters');
var mainFilter = $('.main-page');

mainFilter.on('click',function(){
	if(!filters.hasClass('visible')){
		filters.addClass('visible');
		mainFilter.addClass('opened');
		showFilter.addClass('opened');
	} else {
		filters.removeClass('visible');
		mainFilter.removeClass('opened');
		showFilter.removeClass('opened');
	};
});
showControlPanel.on('click',function(){
	if(!controlPanel.hasClass('visible')){
		controlPanel.addClass('visible');
	} else {
		controlPanel.removeClass('visible');
	};
});

//------------------------------------------MOBILE VERSION
var menu = $('.header-main_menu #menu');
var menuItems = $('nav.header-main_menu .item.menu_item');
var city = $('#city');
var header = $('#main_header .header-top');
var search = $('.item-search');
var logoRed = $('#logo .red');

$(window).load(function(event) {
	if ($(window).width() < 767) {
		menuItems.prependTo(logoRed);
		city.prependTo(logoRed);
		showLogo.prependTo(nav);
		userInfo.appendTo(nav);
		search.appendTo(logo);
	} else{
		menuItems.appendTo(menu);
		city.prependTo(header);
		showLogo.appendTo(logo);
		userInfo.appendTo(headerTop);
		search.appendTo(menu);
	};
});


$(window).resize(function(event) {
	if ($(window).width() < 767) {
		menuItems.prependTo(logoRed);
		city.prependTo(logoRed);
		showLogo.prependTo(nav);
		userInfo.appendTo(nav);
		search.appendTo(logo);
	} else{
		menuItems.appendTo(menu);
		city.prependTo(header);
		showLogo.appendTo(logo);
		userInfo.appendTo(headerTop);
		search.appendTo(menu);
	};
});



// ------------------------REGISTER
var regBtn = $('#register');
var userPanel = $('#user-control_panel');
console.log(userPanel);

regBtn.on('click', function(){
	$(this).addClass('hidden');
	userPanel.addClass('visible collapsed');
})

});


