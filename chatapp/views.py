
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import google.generativeai as genai
import json

# ✅ TEMP SAFE CONFIG (for testing)
genai.configure(api_key="AIzaSyAxl8YFBtqO2qqr7MyrZh5ixhp5RC4iH10")

model = genai.GenerativeModel("gemini-2.5-flash")


def home(request):
    return render(request, 'index.html')


@csrf_exempt
def chat(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            user_message = data.get("message")

            print("User:", user_message)

            response = model.generate_content(user_message)

            print("Bot:", response.text)

            return JsonResponse({
                "reply": response.text
            })

        except Exception as e:
            return JsonResponse({
                "reply": "Error: " + str(e)
            })

    return JsonResponse({"reply": "Invalid request"})