const KPI = require('../models/KpiHistory');

// Get all KPI records
exports.getAllKpis = async (req, res) => {
  try {
    const kpis = await KPI.findAll();
    res.json(kpis);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getKpisByDriverId = async (req, res) => {
    try {
      const driverId = req.params.id;
      const kpis = await KPI.findAll({ where: { driver_id: driverId } });
  
      if (kpis.length === 0) return res.status(404).json({ message: 'No KPI history for this driver' });
  
      res.json(kpis);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  
// Create new KPI record
exports.createKpi = async (req, res) => {
  try {
    const newKpi = await KPI.create(req.body);
    res.status(201).json(newKpi);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
