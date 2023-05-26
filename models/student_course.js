'use strict';
const {
  Model
} = require('sequelize');
// const Student = db.Student;
module.exports = (sequelize, DataTypes) => {
  class Student_course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Student_course.belongsTo(models.Student,{
        foreignKey:"studentId"
      })

      Student_course.belongsTo(models.Course,{
        foreignKey:"courseId"
      })
      
    }
  }
  Student_course.init({
    studentId: DataTypes.INTEGER,
    courseId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Student_course',
  });

  return Student_course;
};