const express = require('express');
const router = express.Router();
const upload = require('../../utils/multer/config');

const Controller = require('./controller');

// Routes
router.get('/:id', get);
router.post('/', upload.single('image'), toUpload);

router.get('/test/test2', (req, res, next) => {
  res.status(200).json({
    hola: 'mundo',
  });
});

// Internal Functions

function toUpload(req, res, next) {
  console.log(req.file);
  res.status(200).json({
    message: 'upload successful',
    image: req.file.filename,
  });
}

function get(req, res, next) {
  const filePath = Controller.get(req.params.id);
  res.set('Content-Type', 'image/png').sendFile(filePath);
}

module.exports = router;
