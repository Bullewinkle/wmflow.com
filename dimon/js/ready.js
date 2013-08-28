
$(document).ready(function() {
	var body = $('body');
	body.mCustomScrollbar({
		callbacks: {
			onScrollStart: function () {
				$('.mCSB_dragger_bar').addClass('visible');
				console.log('add');
			},
			onScroll: function () {
				$('.mCSB_dragger_bar').removeClass('visible');
				console.log('rmv');
			},
			whileScrolling: function() {
				var nav = $('.header-main_menu');
				var userInfo = $('.user');
				var headerTop = $('#main_header .header-top');
				var csb = $('.mCSB_container');
				console.log(parseInt(csb.css('top'), 10));
				if (parseInt(csb.css('top'), 10) < -50) {
					nav.addClass("fixed");
					userInfo.appendTo(nav);
					logo.addClass('fixed');
				} else {
					nav.removeClass("fixed");
					logo.removeClass('fixed');
					if ($(window).width() > 767) {	
						userInfo.appendTo(headerTop);
					};
				};
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

//------------------------------------------MOBILE VERSION
var menu = $('.header-main_menu #menu');
var menuItems = $('nav.header-main_menu .item.menu_item');
var city = $('#city');
var header = $('#main_header .header-top');
var search = $('.item-search');
var logoRed = $('#logo .red');
var nav = $('.header-main_menu');
var userInfo = $('.user');
var headerTop = $('#main_header .header-top');
var csb = $('.mCSB_container');

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
var userPanel = $('#user-control_panel');

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

// $(window).scroll(function () {
// 	if (csb.offset().top > 50) {
// 		alert('dfvd')
// 		nav.addClass("fixed");
// 		userInfo.appendTo(nav);
// 	} else {
// 		nav.removeClass("fixed");
// 		if ($(window).width() > 767) {	
// 			userInfo.appendTo(headerTop);
// 		};
// 	}
// });
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
		showControlPanel.addClass('opened');
	} else {
		controlPanel.removeClass('visible');
		showControlPanel.removeClass('opened');
	};
});


// ------------------------REGISTER
var regBtn = $('#register');
var regBtnMob = $('#register_mobile_btn');

console.log(userPanel);

regBtn.on('click', function(){
	$(this).addClass('hidden');
	regBtnMob.parent().addClass('hidden');
	userInfo.addClass('visible');
	userPanel.addClass('visible');
})
regBtnMob.on('click', function(){
	$(this).parent().addClass('hidden');
	regBtn.parent().addClass('hidden');
	userInfo.addClass('visible');
	userPanel.addClass('visible');
})

$('body').delegate('.chosen-single', 'click', function () {
	var chosenVal = $('.chosen-single > span').text();
	$('.chosen-results li').removeClass('hidden').each(function (i) {
		var thisVal = $(this).text();
		thisVal == chosenVal ? $(this).addClass('hidden') : false;
	});
});



});



