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

$('.modal-link').on("click", function(){

	for(var i=0; i<img_modal.length; ++i)
	{
		var id = "#gallery_post" + img_modal[i].id;
		var click_id = $(this).attr('href'); 
		// console.log(id ,img_modal[i].id);
		if(id == click_id)
		{
			var img_list = img_modal[i].img;
			for(var j=0; j<img_list.length; j++)
			{
				img_path = img_list[j].path.match('\]\(.+\)')[0];
				//delete '](' and ')'
				img_path = img_path.substr(2, img_path.length-3);
				//console.log(img_path);

				div_content = '<div class="gallery-cell gallery-in-grid-item">'
				img_content = '<img src="' + img_path + '">';
				img_disc = img_list[j].disc;
				$items = $(div_content + img_content + img_disc + '</div>');

$(id + ' .gallery-in-grid').masonry({
		itemSelector: '.gallery-in-grid-item',
		columnWidth: 440
	});
				$(id + ' .gallery-in-grid').append($items).masonry('appended', $items);
				//console.log(img_content);
			}
		}
	}
});

$('.gallery-in-grid').on('mouseenter', function(){
	$grid = $('.gallery-in-grid').masonry({
			itemSelector: '.gallery-in-grid-item',
			columnWidth: 440
		});
});
