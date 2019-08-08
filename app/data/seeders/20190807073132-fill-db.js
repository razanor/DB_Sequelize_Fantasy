const userSeeds = require('../seed-data/users.seed');
const player_statSeeds = require('../seed-data/player_stats.seed');
const football_clubSeeds = require('../seed-data/football_clubs.seed');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      let seedsData;
      await queryInterface.bulkInsert('users', userSeeds, {});
      seedsData = await football_clubSeeds;
      await queryInterface.bulkInsert('football_clubs', seedsData, {});
      seedsData = await player_statSeeds;
      await queryInterface.bulkInsert('player_stats', seedsData, {});
    } catch (err) {
      console.log(`Seeding error: ${err}`);
    }
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
