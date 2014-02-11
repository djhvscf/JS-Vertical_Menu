JS-Vertical_Menu
================

This jQuery plugin provides a vertical menu with easy use and totally customisable by CSS


Author Homepage:      http://djhv92.wix.com/dennishernandez<br />

How to use it?
==============

Just add this in your html

$('document').ready(function(){
	$('.menu').vertical_menu();
});

This plugin has options and sets default values:

* slideUp: "medium",
* slideDown: "slow",
* easingUp: "swing",
* easingDown: "swing"

You can customize your vertical menu like:

$('document').ready(function(){
	$('.menu').vertical_menu({
		slideUp: "medium",
		slideDown: "slow",
		easingUp: "swing",
		easingDown: "swing"
	});
});

All the options are not required and you can put the easing name or number.
For more information about: 

* slideUp() : https://api.jquery.com/slideUp/
* slideDown() : https://api.jquery.com/slideDown/
* easing : http://api.jqueryui.com/easings/

Dependencies
=============
This plugin has these dependencies:

* jquery-1.10.2.js
* jquery-ui.js (1.10.4)

Repo Contents
=============

* index.html
* vertical_menu.js
* vertical_menu_style.css
* README

MIT Open Source License
=======================

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
