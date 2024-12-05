// models/sclass.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Sclass = sequelize.define('Sclass', {
    sclassName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

// Define relationships
Sclass.associate = (models) => {
    Sclass.hasMany(models.Student, { foreignKey: 'sclassName' });
    Sclass.hasMany(models.Subject, { foreignKey: 'sclassName' });
    Sclass.hasMany(models.Teacher, { foreignKey: 'teachSclass' });
};

module.exports = Sclass;