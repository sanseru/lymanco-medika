const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const helmet = require('helmet');


// Serve static files
app.use(express.static('public'));
app.use(helmet());

// Serve the landing page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// app.get('/harga', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'harga.html'));
// });
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});