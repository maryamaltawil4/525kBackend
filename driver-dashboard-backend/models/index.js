const { Sequelize } = require('sequelize');
const sequelize = require('../config/db');

// Import models
const Driver = require('./Driver')(sequelize);
const KpiHistory = require('./KpiHistory')(sequelize);
const LicenseType = require('./LicenseType')(sequelize);
const DriverType = require('./DriverType')(sequelize);
const DriverRoute = require('./DriverRoute')(sequelize);

// Define associations
Driver.belongsTo(LicenseType, { foreignKey: 'license_type_id' });
LicenseType.hasMany(Driver, { foreignKey: 'license_type_id' });

Driver.belongsTo(DriverType, { foreignKey: 'driver_type_id' });
DriverType.hasMany(Driver, { foreignKey: 'driver_type_id' });

Driver.hasMany(KpiHistory, { foreignKey: 'driver_id' });
KpiHistory.belongsTo(Driver, { foreignKey: 'driver_id' });

Driver.hasMany(DriverRoute, { foreignKey: 'driver_id' });
DriverRoute.belongsTo(Driver, { foreignKey: 'driver_id' });

module.exports = {
  sequelize,
  Driver,
  KpiHistory,
  LicenseType,
  DriverType,
  DriverRoute
};
