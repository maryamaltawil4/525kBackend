module.exports = (sequelize) => {
    const { DataTypes } = require('sequelize');
    return sequelize.define('driver_type', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: DataTypes.TEXT
    }, {
      timestamps: false,
      tableName: 'driver_types'
    });
  };
  