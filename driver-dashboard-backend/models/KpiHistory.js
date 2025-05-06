// models/KpiHistory.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // your Sequelize instance

const KpiHistory = sequelize.define('KpiHistory', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  driver_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  date: DataTypes.DATEONLY,
  trips_completed: DataTypes.INTEGER,
  driver_rating: DataTypes.DECIMAL(3, 1),
  revenue_collected: DataTypes.DECIMAL(10, 2),
  orders_completed_count: DataTypes.INTEGER,
  orders_completed_percentage: DataTypes.DECIMAL(5, 2),
  boxes_delivered: DataTypes.INTEGER,
  boxes_rejected: DataTypes.INTEGER,
  on_time_arrival_percent: DataTypes.DECIMAL(5, 2),
  fuel_consumption: DataTypes.DECIMAL(6, 2),
  distance_covered: DataTypes.DECIMAL(6, 2),
  working_hours: DataTypes.DECIMAL(5, 2),
  idle_time: DataTypes.DECIMAL(4, 2),
  average_speed: DataTypes.DECIMAL(5, 2),
  fuel_efficiency: DataTypes.DECIMAL(4, 2),
  stop_frequency: DataTypes.INTEGER,
  comments: DataTypes.TEXT
}, {
  tableName: 'kpi_history',
  timestamps: false
});

module.exports = KpiHistory; // ✅ Export the model instance
