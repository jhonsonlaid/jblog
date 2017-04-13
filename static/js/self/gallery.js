/***** Created by jhonsonlai*****/
/***** gallery.js ***************/
/* jhonsonlaid[At]gmail[d0t]com */

var back_color_list = new Array("#CCFFFF", "#CCFFCC", "#FFCCCC", "#99FFCC", "#CCCCCC", "#FFCCFF", "#FFCC99");

modal_img_list = document.getElementsByClassName("gallery-cell");
for(var i=0; i<modal_img_list.length; ++i)
{
	color_index = Math.round(Math.random()*(back_color_list.length-1));
	modal_img_list[i].style.backgroundColor = back_color_list[color_index];
	console.log(back_color_list[color_index]);
}

