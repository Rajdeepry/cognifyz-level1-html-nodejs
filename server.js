const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle form submission
app.post('/submit', (req, res) => {
  const { name, email, gender, message } = req.body;
  console.log('Form Data:', { name, email, gender, message });

   res.send(`
    <div style="font-family: Arial; padding: 20px;">
      <h2>Thanks for submitting the form, ${name}!</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Gender:</strong> ${gender}</p>
      <p><strong>Your Message:</strong> "${message}"</p>
    </div>
  `);
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
