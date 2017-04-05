from markdown.fields import MarkdownxFormField

class MyForm(forms.Form):
    
    myfield = MarkdownxFormFile()
