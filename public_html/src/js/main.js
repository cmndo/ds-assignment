(function() {

	"use strict";

	var //Require Components
			enquire = require("../../bower_components/enquire"),
			renderfarm = require('components/renderfarm');

			//Register Global/jQuery Components
			require("../../../node_modules/slick-carousel/slick/slick.js");


	//When DOM is loaded
	document.addEventListener('DOMContentLoaded', function() {

		//Prepare Header Ball Drop for Tablet and Mobile

		var //Prepare "More Articles Expansion"
				$moreArticlesBtn = $('[data-more-btn]'),
				$storyPage = $('[data-page-one]'),
				$fauxData = $($storyPage.html());

		//When clicking on "More Articles" Button
		$moreArticlesBtn.click(function(e) {

			//Fade out the button to prevent further interaction
			$moreArticlesBtn.fadeOut();

			//2 very important steps, assign a height to the $storyPage continer
			// and set overflow to hidden
			$storyPage.css({
				overflow: 'hidden',
				height: $storyPage.height()
			});

			//Insert the fauxData into the $storyPage container
			$storyPage.append($fauxData);

			//Animate the height of the $storyPage container to fit the newly inserted
			// content
			$storyPage.animate({
				height: $threeStories.position().top + $threeStories.outerHeight()
			}, 'slow', function() {
				//Upon animaiton complete, reset the conditions of the container so that
				// it will continue to respond accordingly.
				$storyPage.css({
					overflow: 'visible',
					height: 'auto'
				});
			});

			//Done with what happens when you click on the "More Articles Button"
		});



		var //Prepare "Brand Guidelines" Section
				$swiperElem = jQuery('[data-slickjs-wrapper]');

		//Apply a slick slider to the container around the crown logo wall
		// Centered, slides
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
					slidesToShow: 1
				}
			}]
		});



	});

})();
