'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tests extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Statuses,{foreignKey: 'statusId'});
      this.belongsTo(models.vacancies,{foreignKey: 'vacancyId'});

    }
  }
  tests.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    testType: DataTypes.BOOLEAN,
    fileUrl: DataTypes.STRING,
    vacancyId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tests',
  });
  return tests;
};