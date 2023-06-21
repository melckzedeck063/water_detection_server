const express =   require('express');

const router =  express.Router();

const SignalController =  require('../controllers/SignalController');

router.post('/new_signal', SignalController.createSignal);
router.get('/current_signal', SignalController.getCurrentSignal);
router.get('/all_signals', SignalController.getAllSignals);

router.get('/last_signal', SignalController.getLastSignal);

router.delete('/delete', SignalController.deleteSignals);


module.exports =  router