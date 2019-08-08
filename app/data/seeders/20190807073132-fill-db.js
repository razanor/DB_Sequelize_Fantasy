const userSeeds = require('../seed-data/users.seed');
const player_statSeeds = require('../seed-data/player_stats.seed');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkInsert('users', userSeeds, {});
      const seedsData = await player_statSeeds;
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
