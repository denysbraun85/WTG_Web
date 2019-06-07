(function($) {

	"use strict";

	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('#preloader').length){
			$('#preloader').fadeOut(300);
		}
	}


	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-top');
			if (windowpos >= 110) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
			}
		}
	}

	headerStyle();

	// dropdown menu
	var mobileWidth = 992;
	var navcollapse = $('.navigation li.dropdown');

	var contextTest = "ok1";

	$(window).on('resize', function(){
		navcollapse.children('ul').hide();
	});

	navcollapse.hover(function() {
		if($(window).innerWidth() >= mobileWidth){
			$(this).children('ul').stop(true, false, true).slideToggle(300);
		}
	});

	//Submenu Dropdown Toggle
	if($('.main-header .navigation li.dropdown ul').length){
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');

		//Dropdown Button
		$('.main-header .navigation li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});

		//Disable dropdown parent link
		$('.navigation li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});
	}



	// 27. Select menu
	function selectDropdown() {
		if ($(".selectmenu").length) {
			$(".selectmenu").selectmenu();

			var changeSelectMenu = function(event, item) {
				$(this).trigger('change', item);
			};
			$(".selectmenu").selectmenu({ change: changeSelectMenu });
		};
	}


	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
			// animate
			$('html, body').animate({
				scrollTop: $(target).offset().top
			}, 1000);

		});
	}



	// Elements Animation
	if($('.wow').length){
		var wow = new WOW({
			mobile:       false
		});
		wow.init();
	}

	//Gallery Filters
	if($('.filter-list').length){
		$('.filter-list').mixItUp({});
	}


	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true
				},
				subject: {
					required: true
				},
				message: {
					required: true
				}
			}
		});
	}


//========================================================================= DEN
//    Fact Counter
//========================================================================= DEN
	function factCounter() {
		if($('.search_section').length){
			$('.search_section .column.animated').each(function() {

				let $t = $(this),
					n = $t.find(".number").attr("data-stop"),
					r = parseInt($t.find(".number").attr("data-speed"), 10);

				if (!$t.hasClass("counted")) {
					$t.addClass("counted");
					$({
						countNum: $t.find(".number").text()
					}).animate({
						countNum: n
					}, {
						duration: r,
						easing: "linear",
						step: function() {
							$t.find(".number").text(Math.floor(this.countNum));
						},
						complete: function() {
							$t.find(".number").text(this.countNum);
						}
					});
				}

			});
		}
	}
//========================================================================= DEN
//                                  END
//========================================================================= DEN

	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'elastic',
			closeEffect : 'elastic',
			helpers : {
				media : {}
			}
		});
	}

	//Sortable Masonary with Filters
	function enableMasonry() {
		if($('.sortable-masonry').length){

			var winDow = $(window);
			// Needed variables
			var $container=$('.sortable-masonry .items-container');
			var $filter=$('.filter-btns');

			$container.isotope({
				filter:'*',
				masonry: {
					columnWidth : 2
				},
				animationOptions:{
					duration:500,
					easing:'linear'
				}
			});


			// Isotope Filter
			$filter.find('li').on('click', function(){
				var selector = $(this).attr('data-filter');

				try {
					$container.isotope({
						filter	: selector,
						animationOptions: {
							duration: 500,
							easing	: 'linear',
							queue	: false
						}
					});
				} catch(err) {

				}
				return false;
			});


			winDow.bind('resize', function(){
				var selector = $filter.find('li.active').attr('data-filter');

				$container.isotope({
					filter	: selector,
					animationOptions: {
						duration: 500,
						easing	: 'linear',
						queue	: false
					}
				});
			});


			var filterItemA	= $('.filter-btns li');

			filterItemA.on('click', function(){
				var $this = $(this);
				if ( !$this.hasClass('active')) {
					filterItemA.removeClass('active');
					$this.addClass('active');
				}
			});
		}
	}

	//11.progressBarConfig
	function progressBarConfig () {
		var progressBar = $('.progress');
		if(progressBar.length) {
			progressBar.each(function () {
				var Self = $(this);
				Self.appear(function () {
					var progressValue = Self.data('value');

					Self.find('.progress-bar').animate({
						width:progressValue+'%'
					}, 100);

					Self.find('span.value').countTo({
						from: 0,
						to: progressValue,
						speed: 100
					});
				});
			})
		}
	}

	// tab-content
	function customTabProductPageTab () {
		if ($('.custom-tab-title').length) {
			var tabWrap = $('.tab-details-content');
			var tabClicker = $('.custom-tab-title ul li');

			tabWrap.children('div').hide();
			tabWrap.children('div').eq(0).show();
			tabClicker.on('click', function() {
				var tabName = $(this).data('tab-name');
				tabClicker.removeClass('active');
				$(this).addClass('active');
				var id = '#'+ tabName;
				tabWrap.children('div').not(id).hide();
				tabWrap.children('div'+id).fadeIn('500');
				return false;
			});
		}
	}

	//three-column-carousel
	if ($('.three-column-carousel').length) {
		$('.three-column-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 3000,
			autoplay: 4000,
			navText: [ '<span class="fa fa-long-arrow-left"></span>', '<span class="fa fa-long-arrow-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:2
				},
				1024:{
					items:3
				}
			}
		});
	}

	//Accordion Box
	if ($('.accordion-box').length) {
		$('.accordion-box .acc-btn').on('click', function() {
			if ($(this).hasClass('active') !== true) {
				$('.accordion-box .acc-btn').removeClass('active');
			}

			if ($(this).next('.acc-content').is(':visible')) {
				$(this).removeClass('active');
				$(this).next('.acc-content').slideUp(500);
			} else {
				$(this).addClass('active');
				$('.accordion-box .acc-content').slideUp(500);
				$(this).next('.acc-content').slideDown(500);
			}
		});
	}


	// sponsors-slider
	if ($('.video-slider').length) {
		$('.video-slider').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 3000,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				400:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});
	}


	//Main Slider Carousel
	if ($('.main-slider-carousel').length) {
		$('.main-slider-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			animateOut: 'fadeOutDown',
			// animateIn: 'fadeIn',
			active: true,
			smartSpeed: 1000,
			autoplay: true,
			autoplayHoverPause: true,
			autoplayTimeout: 5000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});
	}


	if ($('.agent-style-two .bxslider').length) {
		$('.agent-style-two .bxslider').bxSlider({
			nextSelector: '.agent-style-two #slider-next',
			prevSelector: '.agent-style-two #slider-prev',
			nextText: '<i class="fa fa-angle-right"></i>',
			prevText: '<i class="fa fa-angle-left"></i>',
			mode: 'fade',
			auto: 'true',
			speed: '700',
			pagerCustom: '.agent-style-two .slider-pager .thumb-box'
		});
	};

	// 4. select menu
	function selectMenu () {
		if ($('.select-menu').length) {
			$('.select-menu').selectmenu();
		};
	}

	/*=========================================================================
    When document is Scrolling, do
    ========================================================================== */

	jQuery(document).on('ready', function () {
		(function ($) {
			// add your functions
			progressBarConfig ();
			customTabProductPageTab ();
			selectMenu ();
		})(jQuery);
	});

	/*==========================================================================
    When document is Scrolling, do
    ========================================================================== */

	$(window).on('scroll', function() {
		headerStyle();
		factCounter();
	});

	/*==========================================================================
    When document is loaded, do
    ========================================================================== */

	$(window).on('load', function() {
		handlePreloader();
		enableMasonry();
	});




//========================================================================= DEN
//    Scroll progress bar
//========================================================================= DEN
	window.onscroll = function() {myFunction()};
	function myFunction() {
		var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
		var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		var scrolled = (winScroll / height) * 100;
		document.getElementById("myBar").style.width = scrolled + "%";
	}
})(window.jQuery);
//========================================================================= DEN
//                               END
//========================================================================= DEN

//========================================================================= DEN
//    Scroll Down Button Function
//========================================================================= DEN
$(function() {
	$('.scroll-down').click (function() {
		$('html, body').animate({scrollTop: $('.scroll_down_container').offset().top }, 'slow');
		return false;
	});
});
//========================================================================= DEN
//                                END
//========================================================================= DEN

//========================================================================= DEN
// Search Container Counter
//========================================================================= DEN
$(function() {
	var blockTop = $('.search_container').offset().top;
	var CountUpFlag = 0;
	var $window = $(window);
	$window.on('load scroll', function() {
		var top = $window.scrollTop();
		var height = $window.height();
		if (top + height >= blockTop && CountUpFlag === 0) {
			CountUp();
			CountUpFlag = 1;
		}
	});
	function CountUp() {
		$('#animation').show();


	}
});
//========================================================================= DEN
//                                END
//========================================================================= DEN


//========================================================================= DEN
//  Modal Button On the left (window modal form)
//========================================================================= DEN
$(window).bind("scroll", function() {
	if ($(this).scrollTop() >= 900) {
		$(".search_open_btn").fadeIn(300);
	} else {
		$(".search_open_btn").fadeOut(300);
	}
});
//========================================================================= DEN
//                                  END
//========================================================================= DEN

//========================================================================= DEN
//  Contact Container On the Right
//========================================================================= DEN
$(window).bind("scroll", function() {
	if ($(this).scrollTop() >= 900) {
		$(".wrapper_contact_block").fadeIn(300);
	} else {
		$(".wrapper_contact_block").fadeOut(300);
	}
});
//========================================================================= DEN
//                                  END
//========================================================================= DEN


//========================================================================= DEN
//   TEST Modal Windows with jBox library
//========================================================================= DEN
new jBox('Modal', {
	width: 300,
	height: 100,
	attach: '#myModal',
	title: 'My Modal Window',
	content: '<i>Hello there!</i>'
});
//========================================================================= DEN
//                                  END
//========================================================================= DEN

//========================================================================= DEN
//   						Manager Slider
//========================================================================= DEN
$('.manager_slider').slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	// autoplay: true,
	// autoplaySpeed: 3000,
	// dots: true,
	arrows: false,
	cssEase: 'ease-out',
	dotsClass: "slider-dots",
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 440,
			settings: {
				slidesToShow: 1
			}
		}
	]
});
//========================================================================= DEN
//  								END
//========================================================================= DEN

//========================================================================= DEN
//   						Feedback Slider
//========================================================================= DEN
// $('.feedback_slider').owlCarousel({
// 	loop: true,
// 	margin: 10,
// 	nav: true,
// 	dots: true,
// 	autoplay: 4000,
// 	// navText: [ '<span class="fa fa-long-arrow-left"></span>', '<span class="fa fa-long-arrow-right"></span>' ],
// 	responsive:{
// 		0:{
// 			items:1
// 		},
// 		600:{
// 			items:3
// 		},
// 		1000:{
// 			items:3
// 		}
// 	}
// })
$('.feedback_slider').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000,
	dots: true,
	arrows: false,
	cssEase: 'linear',
	dotsClass: "slider-dots",
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}
	]
});
//========================================================================= DEN
//  								END
//========================================================================= DEN











// HOLINEY CODE FOR ANIMATION INPUTS


//Hide Loading Box (Preloader)

$('input').on('focusin', function() {
	$(this).parent().find('label').addClass('active');
  });
  
  $('input').on('focusout', function() {
	if (!this.value) {
	  $(this).parent().find('label').removeClass('active');
	}
});

// HOLINEY CODE FOR ANIMATION INPUTS