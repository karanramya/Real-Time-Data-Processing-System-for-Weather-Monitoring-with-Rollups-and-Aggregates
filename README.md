**Real-Time-Data-Processing-System-for-Weather-Monitoring-with-Rollups-and-Aggregates**

### Overview
This project is a Real-Time Weather Monitoring System that retrieves weather data from the OpenWeatherMap API. It offers live weather updates, 5-day forecasts, and includes temperature conversions among Celsius, Fahrenheit, and Kelvin. Additionally, it computes daily weather summaries, such as average, maximum, and minimum temperatures, while visualizing temperature trends using Chart.js.

### Features
- **API Integration**: Connects to the OpenWeatherMap API for real-time weather data retrieval.
- **Weather Summaries**: Delivers daily forecasts, including maximum, minimum, and average temperatures.
- **Temperature Conversion**: Enables users to convert temperatures between Celsius, Fahrenheit, and Kelvin according to their preferences.
- **Daily Weather Summary**: Calculates daily averages, maximum, and minimum temperatures, and identifies the predominant weather condition.
- **Additional Data**: Displays humidity and wind speed.
- **5-Day Forecast**: Provides weather predictions for the upcoming days, updated every three hours.
- **Threshold Alerts**: Allows users to set temperature limits and triggers alerts when these limits are exceeded.
- **Data Visualization**: Represents temperature trends over time using Chart.js.

### Fulfillment of Requirements
**Data Source**:
- Continuously fetches weather data from the OpenWeatherMap API for major metropolitan areas in India (Delhi, Mumbai, Chennai, Bangalore, Kolkata, Hyderabad).
- Processes weather-related data, including temperature, humidity, wind speed, and primary weather conditions.

**Processing and Analysis**:
- Invokes the API at adjustable intervals (e.g., every 5 minutes).
- Converts temperature values from Kelvin to Celsius or Fahrenheit.

**Rollups and Aggregates**:
- **Daily Weather Summary**: 
  - Aggregates daily weather data to calculate average, maximum, and minimum temperatures, along with the dominant weather condition.
  - Stores daily summaries in persistent storage for future analysis.
  
- **Threshold Alerts**: 
  - Users can set custom temperature thresholds.
  - Alerts are triggered if the temperature exceeds the threshold for two consecutive updates.

**Visualizations**:
- Displays temperature trends and daily summaries through a line chart.

### Design Highlights
- **Modular Structure**: Distinct modules are responsible for API connection, data processing, and UI rendering.
- **Configurable**: Users can personalize temperature units and forecast intervals.
- **Easily Extendable**: Additional weather parameters can be integrated with minimal effort.

### Requirements
- Minimum screen resolution: 1070x680
- Node.js: Required for running a local server (optional).

### Setup
**Prerequisites**: 
- Install Node.js on your system.

**Installation**:
1. Clone the repository:
   ```
   https://github.com/SRamya24/Real-Time-Data-Processing-System-for-Weather-Monitoring-with-Rollups-and-Aggregates/tree/main
      ```
2. Navigate to the project folder:
   ```
   cd Real-Time-Weather-App
   ```
3. Install Dependencies:
   ```
   npm install
   ```
4. Run the server:
   ```
   npm install http-server -g
   http-server -p 8080
   ```
   Alternatively, you can directly open `index.html` in a browser for basic testing.

### Notes
- Replace the placeholders (e.g., your_api_key_here, your_email@gmail.com, your_email_password) with actual values.
- Ensure MongoDB is running before starting the backend server.
- The alerting script will send an email if the temperature exceeds the defined threshold.

### Usage
- Enter a city name in the search bar to retrieve real-time weather data.
- Use the dropdown menu to select between Celsius, Fahrenheit, and Kelvin.
- View daily weather summaries, along with detailed information on humidity and wind speed.

### Additional Information
The project can be expanded to include more weather parameters, such as atmospheric pressure or UV index, which are available through the OpenWeatherMap API. Users can also set additional thresholds for weather alerts or customize the alerting logic.
