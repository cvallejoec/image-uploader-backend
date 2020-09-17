const express = require('express');
const app = express();

const uploader = require('./photos/network');

app.use('/api/uploader', uploader);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
