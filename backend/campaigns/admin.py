from django.contrib import admin
from .models import Campaign, JoinCampaign

# Register your models here.
admin.site.register(Campaign)
admin.site.register(JoinCampaign)
