// routes/drivers.routes.js
const express = require('express');
const router = express.Router();
const driverController = require('../controllers/drivers.controller');

router.get('/', driverController.getAllDrivers);
router.get('/:id', driverController.getDriverById);
router.post('/', driverController.createDriver);
router.put('/:id', driverController.updateDriver);
router.delete('/:id', driverController.deleteDriver);

module.exports = router;
