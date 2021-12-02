from django.test import TestCase

from rest_framework.test import APITestCase
from rest_framework.authtoken.models import Token

from django.urls import reverse
from django.utils import timezone

from accounts.models import User, Influenzer

from .models import *

campaign_data = [
	{
		'title': 'this is title',
		'description': 'cool description',
		'fee': 1337,
		'gender': '[1]',
		'domicile': 'osaka',
		'min_followers': 0,
		'desc_photo': 'xxxxx',
		'desc_caption': 'askdlasdk',
		'age': '[1,2,3]',
		'category': '[5, 6, 7]',
		'periode_start': timezone.now().replace(hour=0, minute=0, second=0, microsecond=0),
		'periode_end': timezone.now().replace(hour=0, minute=0, second=0, microsecond=0) +  timezone.timedelta(1)
	},
	{
		'title': 'another title',
		'description': 'another cool description',
		'fee': 0xdead,
		'gender': '[1, 2]',
		'domicile': 'osaka',
		'min_followers': 0,
		'desc_photo': 'xxxxx',
		'desc_caption': 'askdlasdk',
		'age': '[1,2,3]',
		'category': '[5, 6, 7]',
		'periode_start': timezone.now().replace(hour=0, minute=0, second=0, microsecond=0),
		'periode_end': timezone.now().replace(hour=0, minute=0, second=0, microsecond=0) +  timezone.timedelta(2)
	}
]

user_data_company = [
	{
		'email': 'company1@gmail.com',
		'username': 'company1',
		'first_name': 'compa',
		'last_name': 'ny',
		'no_telepon': '0855313373133711',
		'password': '13371337',
		'is_company': True
	},

	{
		'email': 'company2@gmail.com',
		'username': 'company2',
		'first_name': 'compa',
		'last_name': 'ny',
		'no_telepon': '0855313373133712',
		'password': '13371337',
		'is_company': True
	},
	{
		'email': 'company3@gmail.com',
		'username': 'company3',
		'first_name': 'compa',
		'last_name': 'ny',
		'no_telepon': '0855313373133713',
		'password': '13371337',
		'is_company': True
	},
]


user_data_influencer = [
	{
		'email': 'influencer1@gmail.com',
		'username': 'influencer1',
		'first_name': 'infl',
		'last_name': 'uencer',
		'no_telepon': '0855313373133721',
		'password': '13371337',
		'is_company': False
	},

	{
		'email': 'influencer2@gmail.com',
		'username': 'influencer2',
		'first_name': 'infl',
		'last_name': 'uencer',
		'no_telepon': '0855313373133722',
		'password': '13371337',
		'is_company': False
	},
	{
		'email': 'influencer3@gmail.com',
		'username': 'influencer3',
		'first_name': 'infl',
		'last_name': 'uencer',
		'no_telepon': '0855313373133723',
		'password': '13371337',
		'is_company': False
	},
]


# Create your tests here.
class PaymentTest(APITestCase):
	def setUp(self):

		User.objects.create_user(username=user_data_influencer[0]['username'], email=user_data_influencer[0]['email'], first_name=user_data_influencer[0]['first_name'], last_name=user_data_influencer[0]['last_name'], no_telepon=user_data_influencer[0]['no_telepon'], is_company=user_data_influencer[0]['is_company'],  password=user_data_influencer[0]['password'])
		User.objects.create_user(username=user_data_company[0]['username'], email=user_data_company[0]['email'], first_name=user_data_company[0]['first_name'], last_name=user_data_company[0]['last_name'], no_telepon=user_data_company[0]['no_telepon'], is_company=user_data_company[0]['is_company'],  password=user_data_company[0]['password'])
		self.api_authentication(user_data_influencer[0]['username'], user_data_influencer[0]['password'])

		data = {
			'user_id': 1,
			'birth_date': timezone.now(),
			'gender': 1,
		}
		url = reverse('Influenzer List Create')
		response = self.client.post(url, data)

		self.api_authentication(user_data_company[0]['username'], user_data_company[0]['password'])

		url = reverse('Campaign List Create')
		response = self.client.post(url, campaign_data[0], format='json')


		self.api_authentication(user_data_influencer[0]['username'], user_data_influencer[0]['password'])

		data = {
			'campaign_id': '1'
		}

		url = reverse('JoinCampaign List Create')
		response = self.client.post(url, data, format='json')


	def api_authentication(self, username, password):
		url = reverse('Token Obtain Pair')
		data = {
			'username': username,
			'password': password
		}
		response = self.client.post(url, data)
		self.jwt = response.data['access']
		self.client.credentials(HTTP_AUTHORIZATION='Bearer ' + self.jwt)

	# def testPayment(self):
	# 	data = {
	# 		'joinCampaign_id': '1'
	# 	}

	# 	url = reverse('Payment Create')
	# 	response = self.client.post(url, data, format='json')
	# 	print(response.data)
	def testWithdraw(self):
		inf = Influenzer.objects.get(pk=1)
		inf.balance = 10000
		inf.save()

		# url = reverse('Influenzer Detail', kwargs={'pk': 1})
		# response = self.client.get(url, format='json')
		# print(response.data)

		data = {
			'amount': 1337
		}

		url = reverse('Withdraw Create')
		response = self.client.post(url, data, format='json')
		self.assertEqual(201, response.status_code)

		data = {
			'amount': 1337
		}

		url = reverse('Withdraw Create')
		response = self.client.post(url, data, format='json')
		self.assertEqual(400, response.status_code)

		Withdraw.objects.get(pk=1).delete()

		data = {
			'amount': 1333333333333337
		}
		url = reverse('Withdraw Create')
		response = self.client.post(url, data, format='json')
		self.assertEqual(400, response.status_code)

