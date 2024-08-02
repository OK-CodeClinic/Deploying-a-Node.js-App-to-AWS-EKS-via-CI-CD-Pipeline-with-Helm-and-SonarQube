const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

const apiKey = '02c7dbe20cc68f878c6945a9707e1b7c';

app.get('/weather', async (req, res) => {
    const city = req.query.city;
    if (!city) {
        return res.status(400).send({ error: 'Please enter a city' });
    }

    const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;
    
    try {
        const response = await axios.get(url);
        const weatherData = response.data;
        
        if (weatherData.error) {
            res.status(400).send({ error: weatherData.error.info });
        } else {
            const weatherText = `It's ${weatherData.current.temperature} degrees in ${weatherData.location.name}, ${weatherData.location.country}.`;
            res.send({ weather: weatherText });
        }
    } catch (error) {
        res.status(500).send({ error: 'Error, please try again' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
