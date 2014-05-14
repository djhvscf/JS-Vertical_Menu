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
			easingDown: "swing",
			optionToOpen : "mouseenter",
			optionToClose : "click"
        }, options );
		
        return this.each(function () {
            var menu = $(this);
			var events = settings.optionToOpen;
			events += " " + settings.optionToClose;
			menu.find('ul li > a').bind(events, function (event) 
            {
                var elementClicked = $(event.currentTarget);
                if (elementClicked.parent().find('ul.active').size() === 1)
                {
					if(event.type === settings.optionToOpen)
					{
						return false;
					}
                    elementClicked.parent().find('ul.active').slideUp(settings.slideUp, settings.easingUp, function () 
                    {
                        elementClicked.parent().find('ul.active').removeClass('active');
                    });
                }
                else if (menu.find('ul li ul.active').size() === 0)
                {
					if(event.type === settings.optionToClose)
					{
						return false;
					}
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