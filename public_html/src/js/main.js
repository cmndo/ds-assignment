(function() {

	"use strict";

	//this module uses jquery, enquire, and slick.
	var jQuery = require("../../bower_components/jquery/dist/jquery.min");
	var enquire = require("../../bower_components/enquire");
	require("../../bower_components/slick.js");
	var $ = jQuery;

	document.addEventListener('DOMContentLoaded', function() {
		//everywhere
		var $moreArticlesBtn = jQuery('[data-more-btn]');
		var $storyPage = jQuery('[data-page-one]');
		$storyPage.addClass("located");
		var $threeStories = $($storyPage.html());

		$moreArticlesBtn.click(function(e) {

			$moreArticlesBtn.fadeOut();
			$storyPage.css({
				overflow: 'hidden',
				height: $storyPage.height()
			});

			$storyPage.append($threeStories);

			$storyPage.animate({
				height: $threeStories.position().top + $threeStories.outerHeight()
			}, 'slow', function() {
				$storyPage.css({
					overflow: 'visible',
					height: 'auto'
				});
			});
		});



		//On mobile and tablet the brand guidelines section will be a slickjs swiper
		var $swiperElem = jQuery('[data-slickjs-wrapper]');
		// enquire.register("screen and (max-width:767px)",{
		//   match: function(){
		//     $swiperElem.addClass("live");
		//   },
		//   unmatch: function(){
		//     $swiperElem.removeClass("live");
		//   }
		// });

		$swiperElem.slick({
			centerMode: true,
			centerPadding: '60px',
			slidesToShow: 3,
			responsive: [{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 3
				}
			}, {
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			}]
		});



	});

})();
