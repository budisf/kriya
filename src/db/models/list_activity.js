'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class list_activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      list_activity.belongsTo(models.user);
      list_activity.belongsTo(models.user_activity);
    }
  };
  list_activity.init({
    user_id: DataTypes.INTEGER,
    user_activity_id: DataTypes.INTEGER,
    desc: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'list_activity',
    underscored: true,
  });
  return list_activity;
};