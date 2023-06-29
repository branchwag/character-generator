const sequelize = require('../config/connection');
const seedRace = require('./raceData');
// const seedClass = require('./classData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedRace();

  // await seedPaintings();

  process.exit(0);
};

seedAll();
