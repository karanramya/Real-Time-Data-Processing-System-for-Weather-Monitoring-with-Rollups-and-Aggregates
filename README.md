**Real-Time Data Processing System for Weather Monitoring with Rollups and Aggregates**

Overview
The Real-Time Data Processing System for Weather Monitoring is a web application that continuously fetches weather data from the [OpenWeatherMap API](https://openweathermap.org/) and provides real-time weather monitoring for major Indian cities, including Delhi, Mumbai, Chennai, Bangalore, Kolkata, and Hyderabad. This system processes, stores, and visualizes weather data, offering daily summaries and real-time alerts based on configurable thresholds.

Features

Real-Time Weather Updates: Fetches weather data at configurable intervals, processes the data, and updates continuously.
Temperature Conversion: Automatically converts temperature from Kelvin to Celsius (or Fahrenheit based on user preference).
Daily Summaries: Calculates daily statistics, including average, maximum, minimum temperatures, and the dominant weather condition.
Configurable Alerts: Allows users to set thresholds for temperature and weather conditions, triggering alerts when thresholds are breached.
Data Visualization: Displays weather summaries, historical trends, and triggered alerts through dynamic charts and graphs.
Technology Stack
Frontend: React.js
Backend: Node.js, Express.js
Database: MongoDB
API: OpenWeatherMap API
Charting: Chart.js (or similar) for visualizations

Setup and Installation
Prerequisites
Node.js and npm
MongoDB
OpenWeatherMap API Key (obtain from OpenWeatherMap)

Installation Steps

Clone the Repository

git clone https://github.com/SRamya24/Real-Time-Data-Processing-System-for-Weather-Monitoring-with-Rollups-and-Aggregates.git
cd Real-Time-Data-Processing-System

Backend Setup

cd backend
npm install
#Configure your MongoDB connection and OpenWeatherMap API key in config.js.

Start the server:

node server.js

Frontend Setup

cd ../frontend
npm install

Start the frontend:

npm start
View Application
Access the application by navigating to http://localhost:3000 in your browser.

**Project Structure**

Real-Time-Data-Processing-System/
├── backend/
│   ├── config/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   └── App.js
└── README.md


**Usage**
View Real-Time Data: Monitor live weather data for selected cities.
Set Alerts: Configure alert thresholds and receive notifications if weather conditions exceed set limits.
Visualize Trends: View daily summaries and historical data through interactive charts.

**Future Enhancements**
Integrate additional weather parameters like humidity and wind speed.
Extend location monitoring to cover more cities.
Enable notifications for mobile and cloud-based storage for scalability.
