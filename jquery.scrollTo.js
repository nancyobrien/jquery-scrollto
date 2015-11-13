/**
 *  jQuery.scrollTo (Version: 1.0)
 *
 *  The MIT License (MIT)
 *  Copyright (c) 2013, Stepframe Interactive Media
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a
 *  copy of this software and associated documentation files (the "Software"),
 *  to deal in the Software without restriction, including without limitation
 *  the rights to use, copy, modify, merge, publish, distribute, sublicense,
 *  and/or sell copies of the Software, and to permit persons to whom the
 *  Software is furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 **/

(function($) {

	'use strict';

	$.fn.scrollTo = function(selector) {
		var scrollTime = 250;

		return this.each(function() {

			var targetTop = ($(this).position().top ? $(this).position().top : 0);

			$('html, body').animate({scrollTop: targetTop}, scrollTime, function() {
				setTimeout(function() {
					$('html,body').scrollTop(targetTop);
				}, 100);  //Add compatibility for Windows Phone where smooth scrolling stops the animation
			});
		});
	};

})(jQuery);
