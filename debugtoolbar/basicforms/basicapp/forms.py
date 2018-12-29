from django import forms
from django.core import validators
#perticular field validation ValidationError
def check_for_z(value):
    if value[0].lower() != 'z':
        raise forms.ValidationError("NAME NEED TO START WITH Z")


class FormName(forms.Form):
    name=forms.CharField(validators=[check_for_z])
    email = forms.EmailField()
    varify_email = forms.EmailField(label='enter your email agina')
    text = forms.CharField(widget=forms.Textarea)

    def clean(self):
        all_clean_data = super().clean()
        email = all_clean_data['email']
        vmail = all_clean_data['varify_email']

        if email != vmail:
            raise forms.ValidationError("make sure email match")
    # botcatcher = forms.CharField(required=False,
    #                              widget=forms.HiddenInput,
    #                              validators=[validators.MaxLengthValidator(0)])

#sneaky is a botcatcher in hidden value='sneaky'
    # def clean_botcatcher(self):
    #     botcatcher = self.cleaned_data['botcatcher']
    #     if len(botcatcher) > 0:
    #         raise forms.ValidationError("GOTCHA BOT!")
    #     return botcatcher
