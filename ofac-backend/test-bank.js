const axios = require('axios');

function testBackend() {
    return fetch('https://api.ofac-api.com/v4/screen', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "apiKey": "ef3b0074-bf79-4be5-bcc9-6c84ef5e95bb",
        "source": ["SDN","EU"],
        "minScore": 95,
        "cases": [{
          "name": "Abu Abbas"
        }]
      }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Assuming the data is in the format { results: [...] }
      const results = data.results;
      console.log('Response data:', data); 
      results.forEach(result =>
      {result.matchCount > 0 ? console.log('hit'):console.log('0')}
      )
     
      return data; // Return the full data for further processing if needed
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  
  testBackend();