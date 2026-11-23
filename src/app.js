const express = require('express');

const app = express();

app.get('/', (_request, response) => {
  response.send('KT3 App');
});

app.get('/health', (_request, response) => {
  response.json({ status: 'ok' });
});

module.exports = app;

