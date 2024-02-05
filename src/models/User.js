const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      displayName: DataTypes.STRING,
      email: DataTypes.INTEGER,
      password: DataTypes.INTEGER,
      image: DataTypes.INTEGER
  }, {
    timestamps: false,
    tableName: 'users',
    underscore: true
  });
  User.associate = (models) => {
    User.hasMany(models.BlogPost, {
            foreignKey: 'userId',
            as: 'user'
        });
  }
  return User
}