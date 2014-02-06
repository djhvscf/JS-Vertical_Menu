/* File Created: 11 November, 2013 */
/*By: Dennis Hernández Vargas*/
(function ($) {
    $.fn.vertical_menu = function () {
        // Se ejecuta un each donde esto porque pueden existir muchos selectores con la clase 'menu'
        return this.each(function () {
            // Se obtiene el elemento
            var menu = $(this);
            // Se encuentra los elementos a y se les asigna el evento click
            menu.find('ul li div div > a').bind('click', function (event) 
            {
                // Se toma el elemento donde se hizo el click
                var elementClicked = $(event.currentTarget);
                // Los elementos ul que tienen asignada la clase active serán los que estan abiertos
                //Si el elemento en el que presionamos estaba abierto, tenia la clase active, simplemente se cierra

                if (elementClicked.parent().parent().parent().find('ul.active').size() === 1) 
                {
                    //Se cierra el elemento al que se le hizo click porque ya estaba abierto
                    elementClicked.parent().parent().parent().find('ul.active').slideUp('medium', function () 
                    {
                        //Removemos la clase active del elemento al que se le hizo click
                        elementClicked.parent().parent().parent().find('ul.active').removeClass('active');
                    });
                }
                // Si ningun elemento tenia la clase active, osea ninguno estaba abierto
                else if (menu.find('ul li ul.active').size() === 0) 
                {
                    //Solo se abre el elemento al que se le hizo click
                    show(elementClicked);
                }
                else 
                {
                    // Si ya habia un elemento abierto, se localiza con find, y se cierra con slideup,
                    menu.find('ul li ul.active').slideUp('slow', function () 
                    {
                        //Una vez cerrado el elemento se le quita la clase active
                        menu.find('ul li ul').removeClass('active');
                        //Se abre el elemento al que se le hizo click
                        show(elementClicked);
                    });
                }
            });

            //Se asigna la clase active al elemento al que se le hizo click
            function show(elementClicked) 
            {
                elementClicked.parent().parent().parent().find('ul').addClass('active');
                elementClicked.parent().parent().parent().find('ul').slideDown('slow');
            }
        });
    }
})(jQuery);