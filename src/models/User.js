const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      displayName:{type: DataTypes.STRING, field: "display_name" },
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING
  }, {
    timestamps: false,
    tableName: 'users',
    underscore: true
  });
  return User
}