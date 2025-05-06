module.exports = (sequelize) => {
    const { DataTypes } = require('sequelize');
    return sequelize.define('driver_route', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      driver_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      route_date: DataTypes.DATEONLY,
      start_time: DataTypes.TIME,
      end_time: DataTypes.TIME,
      start_lat: DataTypes.DECIMAL(9, 6),
      start_lng: DataTypes.DECIMAL(9, 6),
      end_lat: DataTypes.DECIMAL(9, 6),
      end_lng: DataTypes.DECIMAL(9, 6),
      path_data: DataTypes.JSON
    }, {
      timestamps: false,
      tableName: 'driver_routes'
    });
  };
  