const express = require('express');
const app = express();
const port = parseInt(process.env.PORT || '3000', 10);
require('dotenv').config();
const { vKAuthFirstStep, vkLoginComplete } = require('./vk-auth');

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/login/vk', (req, res) => vKAuthFirstStep(res));
app.get('/test', async (req, res) => {
  console.info('before sleep');
  const reds = await new Promise(resolve => {
    setTimeout(() => {
      console.info('SLEPT WELL');
      resolve('GTFO');
    }, 10000);
  });
  console.info('after sleep');

  return res.send(reds);
});
app.get('/login/vk/complete', vkLoginComplete);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));