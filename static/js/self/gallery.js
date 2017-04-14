/***** Created by jhonsonlai*****/
/***** gallery.js ***************/
/* jhonsonlaid[At]gmail[d0t]com */

//var back_color_list = new Array("#CCFFFF", "#CCFFCC", "#FFCCCC", "#99FFCC", "#CCCCCC", "#FFCCFF", "#FFCC99");
var back_color_list = new Array("#99FFFF", "#AAFFCC", "#CCCCFF", "#CCDDFF", "#CCFFCC", "#CCFFAA", "#CCCCCC", "#FFCCAA", "#FFAACC", "#FFCCFF", "#FFCCAA", "#FFCCFF", "#FFFFCC");

//change modal img background color by random
modal_img_list = document.getElementsByClassName("gallery-cell");
for(var i=0; i<modal_img_list.length; ++i)
{
	color_index = Math.round(Math.random()*(back_color_list.length-1));
	modal_img_list[i].style.backgroundColor = back_color_list[color_index];
}

//change gallery-table img background color
img_table = document.getElementsByClassName("gallery-table");
for(var i=0; i<img_table.length; ++i)
{
	color_index = Math.round(Math.random()*(back_color_list.length-1));
	img_table[i].style.backgroundColor = back_color_list[color_index];
}

$('.gallery-grid').masonry({
	itemSelector: '.gallery-grid-item',
	columnWidth: 340
});

$('.gallery-in-grid').on('mouseenter', function(){
	$grid = $('.gallery-in-grid').masonry({
			itemSelector: '.gallery-in-grid-item',
			columnWidth: 440
		});
});

