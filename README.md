## Personal blog
### Features
* generate html content by markdown
* code highlight
* drag image and drop on markdown-editor-area to upload image 
* live markdown preview in django admin
![](http://www.jhonsonlai.com/media/markdownx/img/4fbb686e-a669-490b-bdb4-cef0b3ab89e8.png) 
* colors change with category

You can visit my blog by <http://www.jhonsonlai.com> to learn more.

## Quick start

### Dependencies
1. Something you should install
  * python 2.7
  * django: `pip install django`
  * markdown： `pip install markdown`
  * [markdownx](https://github.com/adi-/django-markdownx): `pip install django-markdownx`(Normally, it will install pillow automatically, otherwise refer to [this](http://askubuntu.com/questions/547656/install-pillow-on-ubuntu-14-04)
  * Pygments： `pip install pygments`
  

2. Something alreadly included in this project
  * bootstrap 3.3.7
  * jquery 2.2.1
  * flat-ui
  * [pygments-css](https://github.com/richleland/pygments-css)

### Run
1. git clone: `git clone git@github.com:jhonsonlaid/jblog.git`
2. turn to jblog root directory,run `python manage.py runserver 0.0.0.0:8000` and type `http://localhost:8000` in browser.

### Edit
If you like to edit this blog to create your own, what you should change mainly in:
* `blog/templates/`(control the html page layout and content)
* `static/js/self/jblog.js`(allowed to change the category color and add category`)
* `static/css/self/jblog.css`(change document element style)
 

 



 
  
