const express = require('express');
const app = express();
const port = 3000; // Change this to your desired port number

// Route for handling GET requests to the root endpoint '/'
app.get('/', (req, res) => {
  res.send('Hello, this is the backend server!');
});

// Route for handling GET requests to the '/api/data' endpoint
app.get('/api/data', (req, res) => {
  const data = {
    message: 'This is data from the backend!',
    timestamp: new Date().toISOString()
  };
  res.json(data);
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
