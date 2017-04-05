/***** Created by jhonsonlai*****/
/* jhonsonlaid[At]gmail[d0t]com */

//add active class to respective category, should be placed first
var win_path = window.location.pathname.slice(6,-1);
var query_id = win_path.match(/(python|django|machine-learning|git|web-design|web-spider|editor|system)/g);
if(query_id)
{
	query_id = query_id[0];
}

var res_obj = document.getElementById(query_id);
if (res_obj)
	res_obj.className += "active";

var category_type = new Array("python","django","machine-learning","git","web-design","web-spider","editor","system");
var category_color = new Array("#2C3E50","#003366","#333366","#006633","#006699","#666699","#996666","#009966","#669966");

/*** ATTENTION! when use the querid obj, ASK if it exists first! ***/
//change blog-home category color
for(var i=0; i<category_type.length; ++i)
{
	obj = document.getElementsByClassName(category_type[i]+"-grid-out");			

	//mouseEvent
	if(obj.length)
	{
		subObj = obj[0].getElementsByClassName(category_type[i]+"-grid");
		color = category_color[i];
		//normal Mode	
		obj[0].style.margin = "10px 0px 20px 0px";
		subObj[0].style.backgroundColor = color;
		//mouseEvent
		change_home_cat_color(obj[0], subObj[0], color);
	}
}

function change_home_cat_color(obj, subObj, color)
{
	obj.onmouseover = function(){mover_home_cat(this, subObj, color)}; 
	//console.log(obj);
	obj.onmouseout = function(){mout_home_cat(this, subObj, color)};
}

function mover_home_cat(obj, subObj, color)
{
	//console.log("over");
	subObj.style.backgroundColor = "#ECF0F1";
	obj.getElementsByTagName("a")[0].style.color = color;
	obj.getElementsByTagName("svg")[0].style.fill = color;
}

function mout_home_cat(obj,subObj,color)
{
	//console.log("out");
	subObj.style.backgroundColor = color;
	obj.getElementsByTagName("a")[0].style.color = "white";
	obj.getElementsByTagName("svg")[0].style.fill ="white";
}
//change category color
for (var i = 0; i < category_type.length; ++i)
{
	obj = document.getElementById(category_type[i]);
	color = category_color[i];
	if (obj)
	{
		obj.getElementsByTagName("a")[0].style.color ="#BDC3C7";
		change_category_color(obj,color);
	}
}

function change_category_color(obj,color)
{
	if("active" == obj.className)
	{
		obj.style.backgroundColor = color;
		obj.getElementsByTagName("a")[0].style.color = "white";
		obj.getElementsByTagName("svg")[0].style.fill = "white";
	}
	//console.log(obj);
	obj.onmouseover = function(){mover_category(this, color)}; 
	obj.onmouseout = function(){mout_category(this, color)};
}


function mover_category(obj,color)
{
	obj.style.backgroundColor = "#ECF0F1";
	obj.getElementsByTagName("a")[0].style.color = color;
	obj.getElementsByTagName("svg")[0].style.fill = color;
}

function mout_category(obj,color)
{
	if("active" == obj.className)
	{
		obj.style.backgroundColor = color;
		obj.getElementsByTagName("a")[0].style.color = "white";
		obj.getElementsByTagName("svg")[0].style.fill = "white";
	}
	else
	{
		obj.style.backgroundColor = "white";
		obj.getElementsByTagName("a")[0].style.color = "#BDC3C7";
		obj.getElementsByTagName("svg")[0].style.fill =  "#BDC3C7";
	}
}
