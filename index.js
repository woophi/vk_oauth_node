const express = require('express');
const app = express();
const port = parseInt(process.env.PORT || '3005', 10);
const exphbs = require('express-handlebars');

require('dotenv').config();
const { vKAuthFirstStep, vkLoginComplete } = require('./vk-auth');
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static('build'));

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/login/vk', (req, res) => vKAuthFirstStep(res));
app.get('/login/vk/complete', vkLoginComplete);


app.get('/app', (req, res) => {
  res.render('home');
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));