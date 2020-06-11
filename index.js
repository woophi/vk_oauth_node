const express = require('express');
const app = express();
const port = 3000;
require('dotenv').config();
const { vKAuthFirstStep, vkLoginComplete } = require('./vk-auth');

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/login/vk', (req, res) => vKAuthFirstStep(res));
app.get('/login/vk/complete', vkLoginComplete);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));