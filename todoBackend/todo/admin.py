from django.contrib import admin
from . import models

class TodoAdmin(admin.ModelAdmin):
    list_display = ['body', 'completed', 'created', 'updated']

# Register your models here.
admin.site.register(models.Todo, TodoAdmin)
