const csv = require('csv-parser');
const fs = require('fs');
const results = [];

fs.createReadStream('cleaned_players.csv')
  .pipe(
    csv([
      'first_name',
      'second_name',
      'goals',
      false,
      'player-score',
      false,
      'goals-conceded'
    ])
  )
  .on('data', data => {
    console.log(data);
    results.push(data);
  })
  .on('end', () => {
    // console.log(results);
  });
