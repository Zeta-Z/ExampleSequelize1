'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vacancies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Statuses,{foreignKey: 'statusId'});
      this.belongsTo(models.positions,{foreignKey: 'positionId'});

    }
  }
  vacancies.init({
    companyId: DataTypes.BIGINT,
    positionId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'vacancies',
  });
  return vacancies;
};