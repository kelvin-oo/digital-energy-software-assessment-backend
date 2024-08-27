const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;


app.get('/fetch-object/:id', async (req, res) => {
    const id = parseInt(req.params.id, 10);

    
    if (isNaN(id) || id < 1 || id > 10) {
        return res.status(400).json({ error: 'ID must be an integer between 1 and 10.' });
    }

    try {
        const response = await axios.get(`https://api.restful-api.dev/objects/${id}`);
        return res.json(response.data);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'An error occurred while fetching the data.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
