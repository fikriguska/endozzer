from django.db import models
from django.dispatch import receiver
from django.db.models.signals import post_save

from campaigns.models import JoinCampaign

import uuid

from accounts.models import User

# Create your models here.

class Payment(models.Model):
	joinCampaign = models.ForeignKey(JoinCampaign, on_delete=models.CASCADE, null=True)
	order_id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
	token = models.CharField(max_length=40, unique=True, null=True)
	created_at = models.DateTimeField(auto_now_add=True)

class Withdraw(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	amount = models.IntegerField(default=0)
	
# lunas = models.BooleanField(default=False)

# class PaymentTx(models.Model):
# 	transaction_id = models.CharField(max_length=40, unique=True)
# 	created_at = models.DateTimeField(auto_now_add=True)
# 	payment = models.ForeignKey(Payment, on_delete=models.CASCADE)
# 	lunas = models.BooleanField(default=False)

# @receiver(post_save, sender=PaymentTx)
# def update_order_payment_status(sender, instance, created, **kwargs):
# 	if(instance.lunas == True):
# 		instance.payment.lunas = True
# 		instance.payment.save()
# 	else:
# 		instance.payment.lunas = False
# 		instance.payment.save()



