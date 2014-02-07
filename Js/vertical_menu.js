/* @version 1.0 verticalMenu
 * @author Dennis Hernández - djhvscf
 * @webSite: http://djhv92.wix.com/dennishernandez
 * Vertical menu with jquery and css
 */

(function ($) {
    $.fn.vertical_menu = function () {
        return this.each(function () {
            var menu = $(this);
            menu.find('ul li > a').bind('click', function (event) 
            {
                var elementClicked = $(event.currentTarget);
                if (elementClicked.parent().find('ul.active').size() === 1) 
                {
                    elementClicked.parent().parent().parent().find('ul.active').slideUp('medium', function () 
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
                    menu.find('ul li ul.active').slideUp('slow', function () 
                    {
                        menu.find('ul li ul').removeClass('active');
                        show(elementClicked);
                    });
                }
            });
			
            function show(elementClicked) 
            {
                elementClicked.parent().find('ul').addClass('active');
                elementClicked.parent().find('ul').slideDown('slow');
            }
        });
    }
})(jQuery);