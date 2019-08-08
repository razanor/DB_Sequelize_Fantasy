const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
const now = new Date();
const results = [];

const promise = new Promise((resolve, reject) => {
  fs.createReadStream(path.resolve(__dirname, '../seed-data/player_stats.csv'))
    .pipe(
      csv({
        mapValues: ({ header, index, value }) => {
          if (header != 'first_name' && header != 'second_name') {
            return parseFloat(value);
          }
          return value;
        }
      })
    )
    .on('data', data => {
      data.createdAt = now;
      data.updatedAt = now;
      results.push(data);
    })
    .on('end', () => {
      resolve(results);
    });
});

module.exports = promise;
