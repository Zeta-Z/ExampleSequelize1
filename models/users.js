'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Statuses,{foreignKey: 'statusId'});
      this.belongsTo(models.roles,{foreignKey: 'roleId'});

    }
  }
  users.init({
    firstName: DataTypes.STRING,
    secondName: DataTypes.STRING,
    firstSurname: DataTypes.STRING,
    secondSurname: DataTypes.STRING,
    email: DataTypes.STRING,
    documentNumber: DataTypes.STRING,
    roleId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};