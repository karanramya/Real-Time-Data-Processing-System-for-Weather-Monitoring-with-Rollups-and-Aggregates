import requests
import smtplib
import time
from datetime import datetime

# Configuration
API_KEY = 'your_api_key_here'
CITIES = ['Delhi', 'Mumbai', 'Chennai', 'Bangalore', 'Kolkata', 'Hyderabad']
TEMP_THRESHOLD = 35  # Temperature in Celsius
ALERT_EMAIL = 'your_email@gmail.com'
ALERT_PASSWORD = 'your_email_password'

def send_alert(city, temperature):
    subject = f'Weather Alert for {city}'
    body = f'Temperature exceeded threshold: {temperature} °C'
    message = f'Subject: {subject}\n\n{body}'

    with smtplib.SMTP('smtp.gmail.com', 587) as server:
        server.starttls()
        server.login(ALERT_EMAIL, ALERT_PASSWORD)
        server.sendmail(ALERT_EMAIL, ALERT_EMAIL, message)

def check_weather():
    for city in CITIES:
        response = requests.get(f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric')
        data = response.json()
        temp = data['main']['temp']
        if temp > TEMP_THRESHOLD:
            send_alert(city, temp)
            print(f'Alert sent for {city} with temperature: {temp} °C')

if __name__ == '__main__':
    while True:
        check_weather()
        time.sleep(300)  # Check every 5 minutes
