const express = require('express');
const sendEmail = require('./controller/sendEmail');

const app = express();
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     res.header('Access-Control-Allow-Methods', 'POST');
//     next();
//   });
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.post('/sendMail', sendEmail);

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});