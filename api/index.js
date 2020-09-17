const express = require('express');
const app = express();

const uploader = require('./photos/network');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use(express.static('public'));
app.use('/api/uploader', uploader);

// app.get('/', (req, res) => {
//   res.status(200).json({
//     primera: 'pagina',
//   });
// });

app.listen(process.env.PORT || 3000, () => {
  console.log('All is ok!');
});
