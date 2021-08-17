from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.db import IntegrityError
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.exceptions import AuthenticationFailed
import json

def homeView (request,*args, **kwargs):
	return render(request, 'index.html')

class GetNameView(APIView):
	def get(self,request,*args,**kwargs):
		user_id = request.query_params.get('user_id')
		user = User.objects.get(id = user_id)
		return Response({str(user.username)},status= status.HTTP_200_OK)


class RegisterView(APIView):
	def post(self,request,*args,**kwargs):
		username = request.data.get('username')
		email = request.data.get('email')
		password = request.data.get('password')
		if User.objects.filter(email=email).exists():
			return Response({'Email Already Exists. Please Try New Email'},status=status.HTTP_400_BAD_REQUEST)

		print(password)

		try:
			user = User.objects.create_user(username, email, password)
			user.save()
			data = {
				'username': username,
				'password': password,
			}
			obj = TokenObtainPairSerializer()
			result = obj.validate(data)
			return Response(result,status= status.HTTP_201_CREATED)
		
		# this won't occur
		except AuthenticationFailed:
			return Response({''},status=status.HTTP_400_BAD_REQUEST)
		
		except IntegrityError:
			return Response({'Username Already Exists. Please Try New Username'},status=status.HTTP_400_BAD_REQUEST)

		except Exception as e:
			print("logging in error")
			print(e)
			return Response({"Unknown Error Occured. Please Try Later"},status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class CheckUser(APIView):
	def get(self,request,*args,**kwargs):
		username = request.query_params.get('username')
		email = request.query_params.get('email')

		if email == '':
			try:
				User.objects.get(username = username)
				return Response({'True'},status=status.HTTP_200_OK)

			except User.DoesNotExist:
				return Response({"False"},status = status.HTTP_200_OK)

			except Exception as e:
				print("error is")
				print(e)
				return Response({'Some error occured'},status=status.HTTP_500_INTERNAL_SERVER_ERROR)

		else:
			try:
				User.objects.get(email = email)
				return Response({'True'},status=status.HTTP_200_OK)

			except User.DoesNotExist:
				return Response({"False"},status = status.HTTP_200_OK)

			except Exception as e:
				print("error is")
				print(e)
				return Response({'Some error occured'},status=status.HTTP_500_INTERNAL_SERVER_ERROR)
