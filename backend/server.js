const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const weatherRoutes = require('./routes/weatherRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Middleware to parse JSON
app.use(express.json());

// Weather API routes
app.use('/api/weather', weatherRoutes);

// Default route for root URL
app.get('/', (req, res) => {
    res.send('Welcome to the Weather Monitoring API!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
