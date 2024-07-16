// index.js
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const PORT = 3000;




app.use(express.json());

app.post('/api/screen', async (req, res) => {
    const { name, birthYear, country } = req.body;
    console.log('name',name);
    console.log('Request headers:', req.headers);
    try {
      // Use an API or directly parse the SDN list data
      fetch('https://api.ofac-api.com/v4/search',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "apiKey": "ef3b0074-bf79-4be5-bcc9-6c84ef5e95bb",
            "source": ["sdn", "eu"],
            "cases": [
            { "name": name},
            //{"name": name, "nationality": country}
            ] 
          }),
          }
      ).then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      }).then(data => {
        // Process the data
        hit = false;
        const results = data.results;
        console.log('Response data:', data); 
        results.forEach(result => {
            hit = result.matchCount > 0
        });
    
        // Send the processed results back to the client
        res.json({hit});
      })
  
    } catch (error) {
      console.error('Error screening against SDN list:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  })
  
// Middleware