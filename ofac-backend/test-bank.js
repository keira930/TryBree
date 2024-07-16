const axios = require('axios');

function testBackend() {
    return fetch('https://api.ofac-api.com/v4/screen', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "apiKey": "ef3b0074-bf79-4be5-bcc9-6c84ef5e95bb",
        "source": ["SDN"],
      // "types": ["person"],
        "minScore": 95,
        "cases": [{"name": "SAING, U Sai Lone", "identification": [
            {"idNumber": "0"}
        ]
           },{
            "name": "Client Vessel",
            "identification": [
                {
                    "idNumber": "0"
                }
            ]
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
      const matches = results.match;
      console.log(matches);
      console.log('Response data:', results.matches[1].sectionField); 
     
     
      return data; // Return the full data for further processing if needed
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  
  testBackend();