from django.shortcuts import render
from django.http import HttpResponse, HttpResponseNotFound,HttpResponseRedirect
from django.urls import reverse
# challenges/views.py
monthly_challenges = {
    'january': 'Exercise daily for 30 minutes',
    'february': 'Read one book',
    'march': 'Learn something new each day',
    'april': 'Drink at least 2 liters of water daily',
    'may': 'Wake up early every day',
    'june': 'Practice a new skill for 20 minutes daily',
    'july': 'Avoid junk food for the entire month',
    'august': 'Write a daily journal entry',
    'september': 'Learn and revise one topic each day',
    'october': 'Limit social media usage to 30 minutes per day',
    'november': 'Express gratitude by writing one thankful note daily',
    'december': None,
}

# Create your views here.
def index(request):
    months = list(monthly_challenges.keys())

    return render(request, "challenges/index.html", {
        "months": months
    })

# def january(request):
#     return HttpResponse("january challenge : excited daily !")

# def february(request):
#     return HttpResponse("februrayr challenge : ready a book")

# def monthly_challenge(request , month):
#     return HttpResponse(f' challeges for {month}')
 
def monthly_challenge(request, month):
    try:
        challenge_text = monthly_challenges[month.lower()]
        return render(request, "testapp/challenge.html",{'text':challenge_text,'month':month.capitalize})
    except KeyError:
        return HttpResponseNotFound("This month is not supported!")


from django.urls import reverse

def monthly_challenge_by_number(request, month):
    months = list(monthly_challenges.keys())
    redirect_month = months[month - 1]
    # Using reverse with named URL
    redirect_url = reverse('monthly-challenge', args=[redirect_month])
    return HttpResponseRedirect(redirect_url)