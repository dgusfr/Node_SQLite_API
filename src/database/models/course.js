'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    static associate(models) {
      Course.belongsTo(models.Category, {
        foreignKey: 'category_id'
      });
      Course.belongsTo(models.Person, {
        foreignKey: 'instructor_id'
      });
    }
  }
  Course.init({
    title: DataTypes.STRING,
    start_date: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Course',
    tableName: 'courses',
  });
  return Course;
};