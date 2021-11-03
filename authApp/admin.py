from django.contrib import admin
from .models.user import User
from .models.nomina import nomina
from .models.nomina_num import nominas_varias



admin.site.register(User)
admin.site.register(nomina)
admin.site.register(nominas_varias)