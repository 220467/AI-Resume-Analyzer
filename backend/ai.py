import os
from dotenv import load_dotenv
import google.generativeai as genai

print("Step 1")

load_dotenv()

print("Step 2")

api_key = os.getenv("GEMINI_API_KEY")

print("API Key Loaded:", api_key is not None)

genai.configure(api_key=api_key)

print("Step 3")

model = genai.GenerativeModel("gemini-2.5-flash")

print("Step 4")

response = model.generate_content("Say hello in one sentence.")

print("Step 5")

print(response.text)