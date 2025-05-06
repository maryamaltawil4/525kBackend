// models/driver.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Import the configured Sequelize instance

// Define and export the model directly
const Driver = sequelize.define('Driver', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  full_name: DataTypes.STRING,
  phone: DataTypes.STRING,
  email: DataTypes.STRING,
  years_of_experience: DataTypes.INTEGER,
  license_type_id: DataTypes.INTEGER,
  driver_type_id: DataTypes.INTEGER
}, {
  tableName: 'drivers',
  timestamps: false
});

module.exports = Driver;
