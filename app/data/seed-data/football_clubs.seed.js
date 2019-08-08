const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
const now = new Date();
const results = [];

const promise = new Promise((resolve, reject) => {
  fs.createReadStream(
    path.resolve(__dirname, '../seed-data/football_clubs.csv')
  )
    .pipe(
      csv({
        mapValues: ({ header, index, value }) => {
          if (header != 'name' && header != 'short_name') {
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
