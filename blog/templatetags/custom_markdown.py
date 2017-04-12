import markdown
from django import template
from django.template.defaultfilters import stringfilter
from django.utils.encoding import force_text
from django.utils.safestring import mark_safe

register = template.Library()

@register.filter(is_safe = True) #register filter
@stringfilter
def custom_markdown(value):
    return mark_safe(markdown.markdown(value,
                              extensions = ['markdown.extensions.extra',
											'markdown.extensions.toc',
											'markdown.extensions.sane_lists',
											'markdown.extensions.nl2br',
                                            'markdown.extensions.codehilite'],
                              safe_mode = True,
                              enable_attributes = False))

