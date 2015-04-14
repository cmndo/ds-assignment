(function() {

	"use strict";

	var //Require Components
			enquire = require("../../bower_components/enquire"),
			renderfarm = require("./components/renderfarm");

			//Register Global/jQuery Components
			require("../../bower_components/slick.js/slick/slick");


	//When DOM is loaded
	document.addEventListener('DOMContentLoaded', function() {

			//Prepare Header Ball Drop for Tablet and Mobile
		//gyronorm !!!


		//Prepare Renderfarm


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
				height: $fauxData.position().top + $fauxData.outerHeight()
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



		var //Prepare "Brand Guidelines" Section (Don't forget to bower install)
				$swiperElem = $('[data-slickjs-wrapper]');

		//Apply a slick slider to the container around the crown logo wall
		// Centered, slides
		$swiperElem.slick({
			mobileFirst:true,
			arrows: false,
			centerMode: true,
			centerPadding: '0px',
			slidesToShow: 1,
			dots: true,
			responsive: [{
				breakpoint: 768,
				settings: {
					centerMode: true,
					centerPadding: '60px',
					slidesToShow: 3,
				}
			}]
		});


	});

})();
