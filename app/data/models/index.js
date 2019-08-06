const orm = require('../db/connection');
const associate = require('../db/connection');

const User = orm.import('./user');
const Season = orm.import('./season');
const Player_stat = orm.import('./player_stat');
const Player_match_stat = orm.import('./player_match_stat');
const League = orm.import('./league');
const League_participant = orm.import('./league_participant');
const Gameweek = orm.import('./gameweek');
const Gameweek_history = orm.import('./gameweek_history');
const Game = orm.import('./game');
const Football_club = orm.import('./football_club');
const Event = orm.import('./event');

associate({
  User,
  Season,
  Player_stat,
  Player_match_stat,
  League,
  League_participant,
  Gameweek,
  Gameweek_history,
  Game,
  Football_club,
  Event
});
