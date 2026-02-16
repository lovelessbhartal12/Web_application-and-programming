from django.test import TestCase

# Create your tests here.
from .utils import add
from django.urls import reverse

class Addfunctiontestclass(TestCase):
    def test_add(self):
        self.assertEqual(add(2,3),5)


class RegistrationFormpage(TestCase):
    def test_registration_contians_input_tezt(self):
        reponse=self.client.get(reverse('registration:form'))
        self.assertEqual(reponse.status_code,200)
        self.assertEqual(reponse,' name')
        self.assertEqual(reponse ,' email')
        self.assertEqual(reponse , ' password ')