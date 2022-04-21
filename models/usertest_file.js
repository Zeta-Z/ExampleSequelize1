'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userTest_file extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Statuses,{foreignKey: 'statusId'});
      this.belongsTo(models.user_test,{foreignKey: 'userTestId'});
      this.belongsTo(models.files,{foreignKey: 'fileId'});


    }
  }
  userTest_file.init({
    userTestId: DataTypes.INTEGER,
    fileId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'userTest_file',
  });
  return userTest_file;
};