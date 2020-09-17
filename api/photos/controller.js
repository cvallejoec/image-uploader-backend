const path = require('path');
const multer = require('multer');
const upload = multer({ dest: path.join(__dirname, '/../../uploads') });

const mime = {
  gif: 'image/gif',
  jpg: 'image/jpeg',
  png: 'image/png',
};

function get(name) {
  return path.join(__dirname, `/../../uploads/${name}`);
}

function toUpload() {
  return null;
}

module.exports = {
  get,
  upload,
};
