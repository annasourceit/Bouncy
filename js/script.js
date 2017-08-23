; (function ($) {
		"use strict";
		$(document).ready(function () {
			$(window).on('load', function () {
//----------------------------------------Isotope---------------------------------------------
				var $grid = $('.grid').isotope({
				    itemSelector: '.grid-item',
				    percentPosition: true,
				    masonry: {
				    	columnWidth: '.grid-sizer'
				    }
				});

				$('.filter-button-group').on( 'click', 'button', function() {
				    var filterValue = $(this).attr('data-filter');
				    $grid.isotope({ filter: filterValue });
				});
//----------------------------------------Slider---------------------------------------------
             	$('.firstSlider').slick({
				  	slidesToShow: 1,
				 	slidesToScroll: 1,
				  	arrows: false,
				 	dots: true,
				  	infinite: true,
				  	dotsClass: 'slick-dots',
				});	
             	$('.secondSlider').slick({
				  	slidesToShow: 1,
				 	slidesToScroll: 1,
				  	arrows: false,
				 	dots: true,
				  	infinite: true,
				  	dotsClass: 'slick-dots',
				  	swipe: true,
					autoplay: true,
				    autoplaySpeed: 4000,
				});				
			});

//----------------------------------------Smooth scroll---------------------------------------

			$("[data-scrollto]").on("click", function(event) {
		        event.preventDefault();
		        var el = $(this).data('scrollto');
		        var top = $(el).offset().top;
		        $('body,html').animate({scrollTop: top}, 1000);
		    });
//----------------------------------------Active buttons---------------------------------------	    
	        $(".menu__item").on("click", function(event){
	       		$(".menu__item").removeClass("menu__item--active");
	       		$(this).addClass("menu__item--active");		
	        });
	        $(".menu__item").on("mouseover", function(event){
	       		$(this).addClass("menu__item--hover");		
	        });
	        $(".menu__item").on("mouseout", function(event){
	       		$(".menu__item").removeClass("menu__item--hover");	
	        });

	        $("[data-filter]").on("click", function(event){
	       		$(".shape__item").removeClass("shape__item--active");
	       		var i = $(this).index();
	       		$(".shape__item").eq(i).addClass("shape__item--active");
	        });

	        $("[data-filter]").on("mouseover", function(event){
	       		var i = $(this).index();
	       		$(".shape__item").eq(i).addClass("shape__item--hover");
	        });
	        $("[data-filter]").on("mouseout", function(event){
	       		$(".shape__item").removeClass("shape__item--hover");
	        });

	        initMap();
		});

//----------------------------------------Google Maps------------------------------------------	
})(jQuery);

function initMap() { 
	google = window.google;
	var uluru0 = {lat: 49.5685311, lng: 34.583243}; // координаты Полтавского офиса Beetroot 

	var map0 = new google.maps.Map(document.getElementById('map0'), {
		zoom: 16, 
		center: uluru0,
		disableDefaultUI: true,
	});
	var image = 'http://projects.beetroot.se/academy/2017/odessa/rovnaia/MarkerBeetroot/Beetroot_marker.png';
	var marker = new google.maps.Marker({
		position: uluru0,
		map: map0,
		icon: image,
	});
}