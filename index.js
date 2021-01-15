const express = require('express');

const app = express();

app.get('*', (req, res) => {
	res.redirect(301, 'https://www.wgyt.tk' + req.path)
});

app.listen(3000, () => {
  console.log('server started');
});