from django.urls import path
from .views import *

urlpatterns = [
	path('generate', PaymentCreateView.as_view(), name='Payment Create'),
	path('withdraw', WithdrawCreateView.as_view(), name='Withdraw Create')
	# path('', TransactionCreateView.as_view(), name='Transaction Create'),
]