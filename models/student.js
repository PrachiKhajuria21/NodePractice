'use strict';
const {
  Model
} = require('sequelize');
const course = require('./course');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
      Student.belongsToMany(models.Course,{through:"Student_course",foreignKey:"studentId"})
    }
  }
  Student.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};