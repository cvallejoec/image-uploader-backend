const express = require('express');
const path = require('path');
const router = express.Router();
const multer = require('multer');

const Controller = require('./controller');

// Multer Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '/../../uploads'));
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage });

// Routes
router.get('/:id', get);
router.post('/', upload.single('image'), toUpload);

// Internal Functions

function toUpload(req, res, next) {
  console.log(req.file);
  res.status(200).json({
    message: 'OK',
  });
}

function get(req, res, next) {
  const filePath = Controller.get(req.params.id);
  res.set('Content-Type', 'image/png').sendFile(filePath);
}

module.exports = router;
