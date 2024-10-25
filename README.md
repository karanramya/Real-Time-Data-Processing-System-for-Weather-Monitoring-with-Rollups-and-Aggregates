**Real-Time Data Processing System for Weather Monitoring with Rollups and Aggregates**

**Overview**
The Real-Time Data Processing System for Weather Monitoring is a web application that continuously fetches weather data from the [OpenWeatherMap API](https://openweathermap.org/) and provides real-time weather monitoring for major Indian cities, including Delhi, Mumbai, Chennai, Bangalore, Kolkata, and Hyderabad. This system processes, stores, and visualizes weather data, offering daily summaries and real-time alerts based on configurable thresholds.

**Features**
Real-Time Weather Updates: Fetches weather data at configurable intervals, processes the data, and updates continuously.
Temperature Conversion: Automatically converts temperature from Kelvin to Celsius (or Fahrenheit based on user preference).
Daily Summaries: Calculates daily statistics, including average, maximum, minimum temperatures, and the dominant weather condition.
Configurable Alerts: Allows users to set thresholds for temperature and weather conditions, triggering alerts when thresholds are breached.
Data Visualization: Displays weather summaries, historical trends, and triggered alerts through dynamic charts and graphs.

**Rollups and Aggregates**

The system provides rollups and aggregates to offer meaningful insights from the raw weather data.

1. Daily Weather Summary
For each day, the system aggregates weather data to calculate:

Average Temperature: Mean temperature over the day.
Maximum Temperature: The highest recorded temperature.
Minimum Temperature: The lowest recorded temperature.
Dominant Weather Condition: The most frequent weather condition throughout the day.
These summaries are stored in a database for further analysis.

2. Alerting Thresholds
   
Users can define custom alerting thresholds, such as:

Temperature Threshold: Alerts are triggered if the temperature exceeds a user-defined threshold (e.g., 35°C) for two consecutive API updates.
Weather Condition Alerts: Specific conditions (e.g., heavy rainfall or snow) can trigger alerts.
Alert Output: Alerts can be shown in the console or sent via email.

3. Visualizations
To help users visualize weather data and trends, the system includes:

Daily Weather Summary Charts: Visual representations of daily temperature summaries.
Historical Trends: Graphs showing temperature fluctuations over time.
Alert Logs: Display of alerts triggered based on user-defined thresholds.

**Test Cases**

1. System Setup
Verify that the system starts up successfully.
Ensure connection to the OpenWeatherMap API using a valid API key.
2. Data Retrieval
Simulate API calls at configurable intervals.
Confirm that weather data is retrieved and parsed correctly for each location.
3. Temperature Conversion
Test the accuracy of temperature conversions from Kelvin to Celsius or Fahrenheit.
4. Daily Weather Summary
Simulate weather updates for several days.
Verify that average, maximum, and minimum temperatures are calculated correctly, as well as the dominant weather condition.
5. Alerting Thresholds
Set and configure user-specific temperature or weather condition thresholds.
Simulate scenarios where the thresholds are breached.
Ensure alerts are triggered appropriately.

**Technology Stack**

Frontend: React.js

Backend: Node.js, Express.js

Database: MongoDB

API: OpenWeatherMap API

Charting: Chart.js (or similar) for visualizations

**Setup and Installation**

Prerequisites
Node.js and npm
MongoDB
OpenWeatherMap API Key (obtain from [OpenWeatherMap](https://openweathermap.org/))

**Installation Steps**

Clone the Repository

git clone https://github.com/SRamya24/Real-Time-Data-Processing-System-for-Weather-Monitoring-with-Rollups-and-Aggregates.git
cd Real-Time-Data-Processing-System

Backend Setup

cd backend
npm install
Configure your MongoDB connection and OpenWeatherMap API key in config.js.

Start the server:

node server.js

Frontend Setup

cd ../frontend
npm install

Start the frontend:

npm start
View Application
Access the application by navigating to http://localhost:3000 in your browser.

Notes
- Replace the placeholders (e.g., your_api_key_here, your_email@gmail.com, your_email_password) with actual values.
- Ensure MongoDB is running before starting the backend server.
-  The alerting script will send an email if the temperature exceeds the defined threshold.

Usage
- View Real-Time Data: Monitor live weather data for selected cities.
- Set Alerts: Configure alert thresholds and receive notifications if weather conditions exceed set limits.
- Visualize Trends: View daily summaries and historical data through interactive charts.

Future Enhancements
- Integrate additional weather parameters like humidity and wind speed.
- Extend location monitoring to cover more cities.
- Enable notifications for mobile and cloud-based storage for scalability.
