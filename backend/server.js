const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware for logging all requests
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
  if (req.body) {
    console.log('Request body:', req.body);
  }
  if (req.query && Object.keys(req.query).length > 0) {
    console.log('Request query:', req.query);
  }
  next();
});

app.use(cors());
app.use(express.json());

const headlineTemplates = [
  "Why {business} is {location}'s Sweetest Spot in 2025",
  "Discover the Magic of {business} in the Heart of {location}",
  "How {business} is Redefining Business in {location}",
  "{location}'s {business}: A Business You Can't Miss",
  "The Secret Behind {business}'s 5-Star Reviews in {location}"
];

function generateHeadline(name, location) {
  if (!name || typeof name !== 'string') {
    throw new Error('Invalid business name');
  }
  if (!location || typeof location !== 'string') {
    throw new Error('Invalid location');
  }

  try {
    const template = headlineTemplates[Math.floor(Math.random() * headlineTemplates.length)];
    console.log('Selected template:', template);
    console.log('Replacing with:', { name, location });
    
    const headline = template
      .replace(/{business}/g, name.trim())
      .replace(/{location}/g, location.trim());
    
    console.log('Generated headline:', headline);
    return headline;
  } catch (error) {
    console.error('Error generating headline:', error);
    throw new Error('Failed to generate headline');
  }
}

// POST /business-data
app.post('/business-data', (req, res) => {
  try {
    console.log('Received POST request body:', req.body);
    
    const { name, location } = req.body;
    
    if (!name || !location) {
      console.log('Missing required fields:', { name, location });
      return res.status(400).json({ 
        error: 'Name and location are required',
        received: { name, location }
      });
    }

    // Simulate random rating between 4.0 and 4.9
    const rating = (4 + Math.random() * 0.9).toFixed(1);
    // Simulate random reviews between 100 and 200
    const reviews = Math.floor(100 + Math.random() * 100);
    
    const headline = generateHeadline(name, location);

    const response = {
      rating: parseFloat(rating),
      reviews,
      headline,
      name: name.trim(),
      location: location.trim()
    };

    console.log('Sending response:', response);
    res.json(response);
  } catch (error) {
    console.error('Error processing business data:', error);
    res.status(500).json({ 
      error: 'Internal server error', 
      message: error.message 
    });
  }
});

// GET /regenerate-headline
app.get('/regenerate-headline', (req, res) => {
  try {
    console.log('Received GET request query:', req.query);
    
    const { name, location } = req.query;
    
    if (!name || !location) {
      console.log('Missing required query parameters:', { name, location });
      return res.status(400).json({ 
        error: 'Name and location are required as query parameters',
        received: { name, location }
      });
    }

    const headline = generateHeadline(name, location);
    
    const response = { headline };
    console.log('Sending response:', response);
    res.json(response);
  } catch (error) {
    console.error('Error regenerating headline:', error);
    res.status(500).json({ 
      error: 'Internal server error', 
      message: error.message 
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ 
    error: 'Internal server error', 
    message: err.message 
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('Available headline templates:', headlineTemplates);
});
