/* @version 2.0 verticalMenu
 * @author Dennis Hernández - djhvscf
 * @webSite: http://djhv92.wix.com/dennishernandez
 * Vertical menu with jquery and css
 */

(function ($) {
    'use strict'
    $.fn.vertical_menu = function (options) {		
		var settings = $.extend({
            slideUp: "medium",
            slideDown: "slow",
			easingUp: "swing",
			easingDown: "swing"
        }, options );
		
        return this.each(function () {
            var menu = $(this);
            menu.find('ul li > a').bind('click', function (event) 
            {
                var elementClicked = $(event.currentTarget);
                if (elementClicked.parent().find('ul.active').size() === 1)
                {
                    elementClicked.parent().find('ul.active').slideUp(settings.slideUp, settings.easingUp, function () 
                    {
                        elementClicked.parent().find('ul.active').removeClass('active');
                    });
                }
                else if (menu.find('ul li ul.active').size() === 0)
                {
                    show(elementClicked);
                }
                else 
                {
                    menu.find('ul li ul.active').slideUp(settings.slideUp, settings.easingUp, function ()
                    {
                        menu.find('ul li ul').removeClass('active');
                        show(elementClicked);
                    });
                }
            });
			
            function show(elementClicked) 
            {
                elementClicked.parent().find('ul').addClass('active').slideDown(settings.slideDown, settings.easingDown);
            }
        });
    }
})(jQuery);