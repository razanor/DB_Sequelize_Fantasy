const orm = require('../db/connection');
const associate = require('../db/connection');

const Player_stat = orm.import('./player_stat');
const Player_match_stat = orm.import('./player_match_stat');
const Gameweek = orm.import('./gameweek');
const Gameweek_history = orm.import('./gameweek_history');
const Game = orm.import('./game');
const Football_club = orm.import('./football_club');
const Event = orm.import('./event');

associate({
  Player_stat,
  Player_match_stat,
  Gameweek,
  Gameweek_history,
  Game,
  Football_club,
  Event
});
