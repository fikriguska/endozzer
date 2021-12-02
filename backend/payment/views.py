from django.shortcuts import render
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAuthenticated
from .serializers import *

from campaigns.permissions import IsPostAndCompany, IsInfluenzer
# Create your views here.

class PaymentCreateView(CreateAPIView):

	serializer_class = PaymentSerializer
	permission_classes = (IsAuthenticated, IsPostAndCompany,)

class WithdrawCreateView(CreateAPIView):
	serializer_class = WithdrawSerializer
	permission_classes = (IsAuthenticated, IsInfluenzer, )

# class TransactionCreateView(CreateAPIView):
# 	serializer_class = PaymentTxSerializer

	