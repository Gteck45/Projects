const express = require('express');
const fetch = require('node-fetch'); // npm install node-fetch
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json());

// Replace this with your actual CRUD CRUD endpoint
const BASE_URL = process.env.crudcrud_URI;
const PORT = 3000; const corsOptions = {
  origin: 'http://localhost:5173', // Adjust to your frontend's URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));


app.get('/', async (req, res) => {
  try {
    const response = await fetch(BASE_URL);

    // Validate content type
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      console.warn('Invalid content type:', contentType);
     return res.status(200).json([{ site: 'CrudCrud Limit Reached use another api ', username: 'CrudCrud Limit Reached use another api', password: 'CrudCrud Limit Reached use another api' }]); 
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Fetch error:', error);
    res.status(500).json({ error: 'Failed to fetch passwords' });
  }

  console.log('GET request received at /');
});


app.post('/', async (req, res) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    });
    const data = await response.json();
    res.json({ success: true, data });
  } catch (error) {
    console.error('Post error:', error);
    res.status(500).json({ error: 'Failed to save password' });
  }
  console.log('POST request received at /');
});


app.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const response = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });

    if (!response.ok) {
      throw new Error(`Failed to delete resource with ID ${id}`);
    }

    res.json({ success: true });
  } catch (error) {
    console.error(`Error during DELETE request for ID ${req.params.id}:`, error);
    res.status(500).json({ error: error.message || 'Failed to delete password' });
  }
});

app.patch('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    });

    if (!response.ok) throw new Error('Update failed');
    const data = await response.json().catch(() => ({})); // May be empty
    res.json({ success: true, data });
  } catch (error) {
    console.error('Patch error:', error);
    res.status(500).json({ error: 'Failed to update password' });
  }
  console.log(`PATCH request received at /${req.params.id}`);
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
