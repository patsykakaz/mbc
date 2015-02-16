#-*- coding: utf-8 -*-

from copy import deepcopy
from django.contrib import admin
from mezzanine.pages.admin import PageAdmin
from mezzanine.pages.models import RichTextPage
from .models import *

# univers_extra_fieldsets = ((None, {'fields':
# 	('small_cover','full_cover')
# 	}),)

univers_extra_fieldsets = (
                (None,
                        {'fields': ('content','small_cover','full_cover')
                        }
                ),
        )

revue_extra_fieldsets = (
		(None, 
			{'fields': ('univers','couverture','type_revue','format_revue','periodicite','tirage','pagination','lectorat','baseline','presentation')
			}
		),
	)

class ChiffreInline(admin.TabularInline):
	model = Chiffre

class UniversAdmin(PageAdmin):
	inlines = (ChiffreInline,)
	fieldsets = deepcopy(PageAdmin.fieldsets) + univers_extra_fieldsets

class ContactRevueInline(admin.TabularInline):
	model = ContactRevue

class RevueAdmin(PageAdmin):
	inlines = (ContactRevueInline,)
	fieldsets = deepcopy(PageAdmin.fieldsets) + revue_extra_fieldsets

admin.site.register(Univers, UniversAdmin)
admin.site.register(Revue, RevueAdmin)






