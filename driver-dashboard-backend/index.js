const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const driverRoutes = require('./routes/drivers.routes');
app.use('/api/drivers', driverRoutes);


const kpiRoutes = require('./routes/kpiRoutes');
app.use('/api/kpis', kpiRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
