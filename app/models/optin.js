module.exports = function (sequelize, DataTypes) {

  var Optin = sequelize.define('Optin', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    fbId: DataTypes.STRING,
    passthrough: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        // example on how to add relations
        // Optins.hasMany(models.Users);
      }
    }
  });

  return Optin;
};

