'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    static associate(models) {
      Person.hasMany(models.Course, {
        foreignKey:'instructor_id'
      });
      Person.hasMany(models.Registration, {
        foreignKey:'student_id'
      });
    }
  }

  Person.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      cpf: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Person',
      tableName: 'people', // Nome da tabela em inglês no banco
    }
  );

  return Person;
};
