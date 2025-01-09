// app.js
const express = require('express');
const fs = require('fs');
const app = express();
const html = fs.readFileSync('index.html','utf-8');

app.get('/', (req, res) => {
    res.send(html);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});