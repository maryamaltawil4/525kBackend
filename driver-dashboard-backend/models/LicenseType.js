module.exports = (sequelize) => {
    const { DataTypes } = require('sequelize');
    return sequelize.define('license_type', {
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
      tableName: 'license_types'
    });
  };
  