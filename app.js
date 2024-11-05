const express = require('express');
const sendEmail = require('./controller/sendEmail');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.post('/sendMail', sendEmail);

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});