module.exports = function(sequelize, DataTypes) {
    var Courses = sequelize.define("courses", {
      // Giving the Courses model a name of type STRING
      
      id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        uniqueKey: true
      },
      domain: {
        type: DataTypes.STRING(100)
      },
      description: {
        type: DataTypes.STRING(100)
      }
      
      // description: DataTypes.TEXT
    });
  
    Courses.associate = function(models) {
      // Associating Courses with Tests
      // When an Course is deleted, also delete any associated Tests
      Courses.hasMany(models.test, {
        onDelete: "cascade"
      });
    };
  
    return Courses;
  };