const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('mysql://root:EDU4rd87*@127.0.0.1:3306/counter')
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

module.exports = sequelize