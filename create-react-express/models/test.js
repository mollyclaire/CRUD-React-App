module.exports = function(sequelize, DataTypes) {
    var Test = sequelize.define("test", {
      
      courses_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false
      },
      num_of_questions: {
        type: DataTypes.INTEGER(10),
        allowNull: false
      },
      name: {
        type: DataTypes.STRING(50)
      },
      duration: {
        type: DataTypes.STRING(10)
      }
    });
  
    Test.associate = function(models) {
      // I'm saying that a Test should belong to a Course
      // A Test can't be created without a Course due to the foreign key constraint
      Test.belongsTo(models.courses, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Test;
  };