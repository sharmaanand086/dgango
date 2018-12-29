from django import template

register = template.library()
@register.filter(name='cut')
def cut(value,arg):
    """
    this cuts out all values of "arg" form the string!
    """
    return value.replace(arg,'')
register.filter('cut',cut)
