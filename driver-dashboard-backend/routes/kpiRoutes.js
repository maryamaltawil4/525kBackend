const express = require('express');
const router = express.Router();
const kpiController = require('../controllers/kpiController');

router.get('/', kpiController.getAllKpis);
router.post('/', kpiController.createKpi);
router.get('/driver/:id', kpiController.getKpisByDriverId);


module.exports = router;
