const sequelize = require('../config/connection');
const seedRace = require('./raceData');
const seedClass = require('./classData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedRace();

  await seedClass();

  process.exit(0);
};

seedAll();
