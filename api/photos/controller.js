const path = require('path');
const multer = require('multer');
const upload = multer({ dest: path.join(__dirname, '/../../tmp') });

const mime = {
  gif: 'image/gif',
  jpg: 'image/jpeg',
  png: 'image/png',
};

function get(name) {
  return path.join(__dirname, `/../../tmp/${name}`);
}

function toUpload() {
  return null;
}

module.exports = {
  get,
  upload,
};
