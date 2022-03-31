const Sequelize = require('sequelize');
const db = require('../config/database');

const Resume = db.define('resume', {
    name: {
        type: Sequelize.STRING
    },

    skills: {
          type: Sequelize.STRING
      },

    description: {
          type: Sequelize.STRING
      },

    email: {
          type: Sequelize.STRING
      }
})

module.exports = Resume;