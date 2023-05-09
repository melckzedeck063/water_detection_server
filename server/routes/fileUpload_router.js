const express  =  require('express');

const router =  express.Router();

const FileController  =  require('../controllers/fileController');

router.post('/upload_photo', FileController.uploadImage);
router.post('/new_signal', FileController.postSignal);
router.get('/read_signal', FileController.readSignal);

module.exports =  router;