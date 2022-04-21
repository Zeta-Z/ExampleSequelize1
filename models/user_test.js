'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_test extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.users,{foreignKey: 'userId'});
      this.belongsTo(models.tests,{foreignKey: 'testId'});


    }
  }
  user_test.init({
    userId: DataTypes.INTEGER,
    testId: DataTypes.INTEGER,
    startDateN: DataTypes.DATE,
    endDateN: DataTypes.DATE,
    startTimeN: DataTypes.DATEONLY,
    endTimeN: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'user_test',
  });
  return user_test;
};