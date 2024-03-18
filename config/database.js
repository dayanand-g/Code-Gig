const Sequelize = require('sequelize');
module.exports = new Sequelize('bn4sh1qjm7lfecijr1py', 'uapollrqll2rjgzr7sb6', 'kVLFFBvO4kA8bBNr6DCyqGsZBX8v8j', {
    host: 'bn4sh1qjm7lfecijr1py-postgresql.services.clever-cloud.com',
    port: 50013,
    dialect: 'postgres',
    operatorsAliases: 0,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});